using _2_BO;
using _3_BLL;
using System;
using System.Net;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/car_status")]
    public class CarStatusController : ApiController
    {
        CarManeger logic = new CarManeger();
        [HttpGet]
        [Route("all")]
        public HttpResponseMessage GetAllCars()
        {
            try
            {
                List<CarStatus> cars = logic.GetAllCars();

                return Request.CreateResponse(HttpStatusCode.OK, cars);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpGet]
        [Route("{PlateNumber}")]
        public HttpResponseMessage GetCar([FromUri]int PlateNumber)
        {
            try
            {
                CarStatus car = logic.GetCar(PlateNumber);

                return Request.CreateResponse(HttpStatusCode.OK, car);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpPost]
        [Route("add")]
        public HttpResponseMessage AddCar([FromBody]CarStatus Newcar)
           {
            try
            {
                if (ModelState.IsValid)
                {
                    if (logic.EditCar(Newcar))
                        return Request.CreateResponse(HttpStatusCode.OK, true);
                    if (logic.AddCar(Newcar))
                        return Request.CreateResponse(HttpStatusCode.OK, true);
                }
                return Request.CreateResponse(HttpStatusCode.NotAcceptable, new HttpError());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpDelete]
        [Route("delete/{plateNumber}")]
        public HttpResponseMessage DeleteCar([FromUri]int plateNumber)
        {
            try
            {
                    if (logic.RemoveCar(plateNumber))
                        return Request.CreateResponse(HttpStatusCode.OK, true);
                return Request.CreateResponse(HttpStatusCode.NotAcceptable, new HttpError());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        [HttpPut]
        [Route("put")]
        public HttpResponseMessage PutCar([FromBody]CarStatus car)
        {
            try
            {
                if (logic.EditCar(car)) 
                    return Request.CreateResponse(HttpStatusCode.OK, true);
                return Request.CreateResponse(HttpStatusCode.NotAcceptable, new HttpError());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
    }
}
