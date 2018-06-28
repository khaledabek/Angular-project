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
    [RoutePrefix("api/car_type")]
    public class CarTypeController : ApiController
    {
        CarTypeManeger logic = new CarTypeManeger();
        [HttpGet]
        [Route("all")]
        public HttpResponseMessage GetAllCars()
        {
            try
            {
                List<CarType> cars = logic.GetAllCars();
                
                return Request.CreateResponse(HttpStatusCode.OK, cars);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpGet]
        [Route("{id}")]
        public HttpResponseMessage GetCar([FromUri]int id)
        {
            try
            {
                CarType car = logic.GetCar(id);

                return Request.CreateResponse(HttpStatusCode.OK, car);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpPost]
        [Route("add")]
        public HttpResponseMessage AddCar([FromBody]CarType Newcar)
        {
            try
            {
                if (ModelState.IsValid)
                    if(logic.EditCar(Newcar))
                        return Request.CreateResponse(HttpStatusCode.OK, true);
                if (logic.AddCar(Newcar))
                        return Request.CreateResponse(HttpStatusCode.OK, true);
                return Request.CreateResponse(HttpStatusCode.NotFound, new HttpError());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
    }
}
