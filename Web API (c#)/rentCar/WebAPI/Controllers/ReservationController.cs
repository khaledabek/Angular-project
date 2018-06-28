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
    [RoutePrefix("api/Reservation")]
    public class ReservationController : ApiController
    {
        ReservationManeger logic = new ReservationManeger();
        [HttpGet]
        [Route("all")]
        public HttpResponseMessage GetAllReservations()
        {
            try
            {
                List<Reservation> reservations = logic.GetAllReservations();
                
                return Request.CreateResponse(HttpStatusCode.OK, reservations);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpGet]
        [Route("{userName}")]
        public HttpResponseMessage GetAllReservation([FromUri]string userName)
        {
            try
            {
                List<Reservation> res = logic.GetReservation(userName);

                return Request.CreateResponse(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpPost]
        [Route("{id}")]
        public HttpResponseMessage AddReservations(Reservation NewRes)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, logic.AddReservation(NewRes));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
    }
}
