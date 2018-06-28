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
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        UserManeger logic = new UserManeger();
        [HttpGet]
        [Route("all")]
        public HttpResponseMessage GetAllUsers()
        {
            try
            {
                List<User> users = logic.GetAllUsers();
                
                return Request.CreateResponse(HttpStatusCode.OK, users);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpGet]
        [Route("{username}/{pass}")]
        public HttpResponseMessage GetUser([FromUri]string username,[FromUri]string pass)
        {
            try
            {
                User user = logic.GetUser(username,pass);

                return Request.CreateResponse(HttpStatusCode.OK, user);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        [HttpPost]
        [Route("{id}")]
        public HttpResponseMessage AddBranch(User newUser)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, logic.AddUser(newUser));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
    }
}
