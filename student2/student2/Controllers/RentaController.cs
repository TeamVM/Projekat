using Microsoft.AspNetCore.Mvc;
using student2.Data;
using student2.Migrations;
using student2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RentaCompany = student2.Models.RentaCompany;
using System.Data.Entity;
using System.Net;

namespace student2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentaController : ControllerBase
    {
        private readonly DataContext _context;

        public RentaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Car")]
        public async Task<ActionResult<List<RentaCompany>>> GetAllCompanies()
        {
            List<RentaCompany> company = _context.RentaCompanies.ToList();
            return company;
        }

        [HttpGet]
        [Route("Car/{id}")]
        public ActionResult<RentaHelp> GetCompany(string id)
        {
            RentaHelp rentCompany = new RentaHelp();
            RentaCompany company = _context.RentaCompanies.Where(x => x.Id == id).FirstOrDefault();
            rentCompany.ListaAuta = _context.CarsModels.Where(x => x.IDKompanije == company.Id).ToList();
            rentCompany.Name = company.Name;
            rentCompany.ocena = company.ocena;
            rentCompany.Promo = company.Promo;
            rentCompany.Filijale = company.Filijale;
            rentCompany.Adresa = company.Adresa;
            return rentCompany;
        }

        [HttpPost]
        [Route("AddCarCompany")]
        public ActionResult AddCarCompany(RentaCompany rentaHelp)
        {
            if (_context.RentaCompanies.Any(x => x.Id == rentaHelp.Id))
            {
                return Content("Already exists!");
            }
            else
            {
                var company = new RentaCompany
                {
                    Id = rentaHelp.Id,
                    Name = rentaHelp.Name,
                    Promo = rentaHelp.Promo,
                    Adresa = rentaHelp.Adresa,
                    Filijale = rentaHelp.Filijale,
                    ocena = rentaHelp.ocena,
                    //ListaAuta = new List<Models.CarModels>()
                };

                _context.RentaCompanies.Add(company);
                _context.SaveChanges();
            }

            return Ok();
        }

        [HttpPost]
        [Route("AddCar")]
        public ActionResult AddCar(CarHelp carHelp)
        {
            var kompanija = _context.RentaCompanies.FirstOrDefault(x => x.Name == carHelp.ImeKompanije);

            if (kompanija == null)
            {
                return NotFound();
            }

            var car = new Models.CarModels
            {
                IDAuta = Guid.NewGuid().ToString(),
                Ime = carHelp.Ime,
                Img = carHelp.Img,
                Godiste = carHelp.Godiste,
                Ocena = carHelp.Ocena,
                Cena = carHelp.Cena,
                Lokacija = carHelp.Lokacija,
                DatumDo = carHelp.DatumDo,
                DatumOd = carHelp.DatumOd,
                Rezervisan = false,
                IDKompanije = kompanija.Id,
                //ListaAuta = new List<Models.CarModels>()
            };

            _context.CarsModels.Add(car);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("DeleteCarCompany")]
        public ActionResult DeleteCarCompany(RentaHelp rentCompany)
        {
            var company = _context.RentaCompanies.FirstOrDefault(x => x.Name == rentCompany.Name);

            var cars = _context.CarsModels.Where(x => x.IDKompanije == company.Id).ToList();

            _context.CarsModels.RemoveRange(cars);

            _context.RentaCompanies.Remove(company);

            _context.SaveChanges();

            return Ok();
        }

        [HttpPut("{Id}")]
        [Route("EditCarCompany/{Id}")]
        public  ActionResult<RentaCompany> EditProfile(string Id, RentaCompany company)
         {
            _context.RentaCompanies.Update(company);

            try
            {
               _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return CreatedAtAction("EditCarCompany", new { id = company.Id }, company);
        }
    }
}