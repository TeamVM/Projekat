using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using student2.Data;
using student2.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace student2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly DataContext _context;
        public CarsController(DataContext context)
        {
            _context = context;
        }

        //Pretraga -> Na frontu dodaj formu u njoj popuni i posaljes podatke ovde na osnovu koji ces vrsiti pretragu
        //Kad vratis rezultate pretrage na front pozoves then() funkciju preko koje ces da pozoves novu stranicu gde ces da ispsises rezultate
        [HttpPost]
        [Route("SearchForCars")]
        //public ActionResult<List<CarModels>> SearchForCars(SearchDTO car)
        public ActionResult<List<CarModels>> SearchForCars(SearchDTO car)
        {
            List<CarModels> cars = _context.CarsModels.ToList();
            List<CarModels> searchResult = new List<CarModels>();

            DateTime dateFrom = DateTime.Parse(car.DateFrom);
            DateTime dateTo = DateTime.Parse(car.DateTo);

            if (car.Name)
            {
             //   searchResult = _context.CarsModels.Where(x => x.Ime == car.SearchText && Int32.Parse(x.Cena) <= car.Price && DateTime.Parse(x.DatumOd) >= dateFrom && DateTime.Parse(x.DatumDo) <= dateTo && x.Rezervisan == false).ToList();
              
                cars.ForEach(x =>
                {
                    if (x.Ime == car.SearchText && Int32.Parse(x.Cena) <= car.Price  && x.Rezervisan == false)
                    {
                        searchResult.Add(x);
                    }
                });
               
            } 
            else
            { 
                cars.ForEach(x =>
                {
                    if (x.Lokacija == car.SearchText && Int32.Parse(x.Cena) <= car.Price && x.Rezervisan == false)
                    {
                        searchResult.Add(x);
                    }
                });
            }

            return searchResult;
        }

        
        [HttpPost]
        [Route("ReserveCar")]
        public bool ReserveCar(CarModels car)
        {
            CarModels trazeniAuto = _context.Cars.FirstOrDefault(x => x.IDAuta == car.IDAuta);
            
            if (trazeniAuto == null)
            {
                return false;
            }

            if (!trazeniAuto.Rezervisan)
            {    
                List<CarModels> cars = _context.Cars.Where(x => x.IDAuta == car.IDAuta).ToList();
                cars.ForEach(x =>
                {
                    x.DatumOd = car.DatumOd;
                    x.DatumDo = car.DatumDo;
                    x.Rezervisan = true;
                });

                _context.SaveChanges();
                return true;
            } else
            {
                return false;
            }
        }

        [HttpPost]
        [Route("ReserveSpeedCar")]
        public bool ReserveSpeedCar(CarModels car)
        {
            SpeedCar trazeniAuto = _context.SpeedCars.FirstOrDefault(x => x.IDAuta == car.IDAuta);

            if (trazeniAuto == null)
            {
                return false;
            }

            if (!trazeniAuto.Rezervisan)
            {
                List<SpeedCar> cars = _context.SpeedCars.Where(x => x.IDAuta == car.IDAuta).ToList();
                cars.ForEach(x =>
                {
                    x.DatumOd = car.DatumOd;
                    x.DatumDo = car.DatumDo;
                    x.Rezervisan = true;
                });

                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpPost]
        [Route("DeleteCar")]
        public bool DeleteCar(CarModels car)
        {
            CarModels carToDelete = _context.Cars.FirstOrDefault(x => x.IDAuta == car.IDAuta);
            if (carToDelete != null)
            {
                _context.Cars.Remove(carToDelete);
                _context.SaveChanges();
                return true;
            }
            return false;
        }


        [Route("Cars/AddCar")]
        public async Task AddCar(CarModels carToAdd)
        {
            if (carToAdd != null)
            {
                carToAdd.DatumDo = DateTime.Now.AddDays(150).ToShortDateString();
                await _context.AddAsync(carToAdd);
            }
        }

        [HttpPost]
        [Route("SaveCarGrade")]
        public void SaveCarGrade(CarModels carToAdd)
        {
            if (carToAdd != null)
            {
                var car = this._context.Cars.FirstOrDefault(x => x.IDAuta == carToAdd.IDAuta);
                car.Ocena = carToAdd.Ocena;

                this._context.SaveChanges();

                //Samo koriguj nacin na koji racunas prosecnu ocenu
                //double ocena = Double.Parse(car.Ocena);
                //ocena = 
            }
        }

        // GET: api/<CarsController>
        [HttpGet]
        public IEnumerable<CarModels> Get()
        {
            return this._context.Cars.ToList();
        }

        // GET api/<CarsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CarsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CarsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CarsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


   
        [HttpGet]
        [Route("SpeedCars")]
        public async Task<ActionResult<List<SpeedCar>>> GetAllSpeedCars()
        {
            List<SpeedCar> car = _context.SpeedCars.ToList();
            return car;
        }

        [HttpGet]
        [Route("GetSpeedCar/{id}")]
        public async Task<ActionResult<SpeedCar>> GetSpeedCar(string id)

        {
            //var user = new ApplicationUser();
            var car = await _context.SpeedCars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            return car;
        }

    }
}
