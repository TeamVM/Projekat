using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Web.Services3.Security.Utility;
using student2.Data;
using student2.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
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
            };

            var createdUser = await repos.Register(userToCreate, userHelpReg.Password);

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
    }
}
