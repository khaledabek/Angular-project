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
    [RoutePrefix("api/branch")]
    public class BranchController : ApiController
    {
        BranchManeger logic = new BranchManeger();
        [HttpGet]
        [Route("all")]
        public HttpResponseMessage GetAllbranchs()
        {
            try
            {
                List<Branch> cars = logic.GetAllBranch();
                
                return Request.CreateResponse(HttpStatusCode.OK, cars);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpGet]
        [Route("{name}")]
        public HttpResponseMessage GetCar([FromUri]string name)
        {
            try
            {
                Branch car = logic.GetBranch(name);

                return Request.CreateResponse(HttpStatusCode.OK, car);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpGet]
        [Route("{id}")]
        public HttpResponseMessage AddBranch(Branch Newbranch)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, logic.AddBranch(Newbranch));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
    }
}
