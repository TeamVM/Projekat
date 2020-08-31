using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Web.Services3.Security.Utility;
using student2.Data;
using student2.MejlServis;
using student2.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace student2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository repos;
        private readonly IConfiguration configs;
        private readonly UserManager<UserHelpReg> userMenager;
        private readonly DataContext context;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            repos = repo;
            configs = config;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(UserHelpReg userHelpReg)
        {
            userHelpReg.Username = userHelpReg.Username.ToLower();
            if (!repos.UserExists(userHelpReg.Username))
                return BadRequest("Username already exist");

            var userToCreate = new User
            {
                UserName = userHelpReg.Username,
                Name = userHelpReg.Name,
                LastName = userHelpReg.LastName,
                City = userHelpReg.City,
                PhoneNumber = userHelpReg.PhoneNumber,
                Email = userHelpReg.Email,
                Type = "Korisnik",
                Password = userHelpReg.Password
            };

            var createdUser = await repos.Register(userToCreate, userHelpReg.Password);

            PosaljiMejlAsync(userHelpReg);
            
            return StatusCode(201);
        }

       

        [HttpPost]
        [Route("login")]
        public IActionResult Login(UserHelp userHelp)
        {
            var userFromRepo = repos.Login(userHelp.Username.ToLower(), userHelp.Password);
            if (userFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.UserName),
                new Claim(ClaimTypes.GivenName, userFromRepo.Name),
                new Claim(ClaimTypes.Role,userFromRepo.Type),                                                                
                new Claim(ClaimTypes.Surname, userFromRepo.LastName),
                new Claim(ClaimTypes.MobilePhone, userFromRepo.PhoneNumber),
                new Claim(ClaimTypes.StateOrProvince, userFromRepo.City)

            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configs.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(10),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }

        public async Task PosaljiMejlAsync(UserHelpReg userHelpReg)
        {
            using (MailMessage mail = new MailMessage())
            {
              //  string code = await userMenager.GenerateEmailConfirmationTokenAsync(userHelpReg);

                string toMail = "http://localhost:5000/api/auth/PotvrdiMejl/" + userHelpReg.Name;

                mail.From = new MailAddress("psugsprojekat@gmail.com");
                mail.To.Add(userHelpReg.Email);
                mail.Subject = "PUSGS projekat";
                mail.Body = "<h1>Da biste aktivirali Vas nalog, kliknite na sledeci link: </h1>";
                mail.Body += toMail;
                mail.IsBodyHtml = true;

                using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                {
                    smtp.Credentials = new System.Net.NetworkCredential("psugsprojekat@gmail.com", "ftn12345");  // ovo su mejl i sifra sa kojeg saljes
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }
        }


        [HttpGet]
        [Route("PotvrdiMejl/{name}")]
        public void PotvrdiMejl(string name)
        {

            List<UserHelpReg> lista = userMenager.Users.Where(user => user.Name == name).ToList();

            if (lista.Count == 0)
            {
                UserHelpReg userhelp = lista[0];
                userhelp.EmailConfirmed = true;

                try
                {
                    MailServis servis = new MailServis(context);
                    servis.Potvrdi(userhelp);
                }
                catch (Exception e)
                {


                }
            }
        }
    }
}
