using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_registration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_registration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {

        List<User> users = new List<User>()
        {
            new User("Jeff", "L", "testUsername", "testuser@gmail.com", "pw123"),
            new User("Nancy", "Jade", "jadeUser", "testjade@gmail.com", "pw456")
        };

        // GET: api/Registration
        [HttpGet]
        public List<User> Get()
        {
            return users;
        }


        // POST: api/Registration
        [HttpPost]
        public PostResponse Post([FromBody] User user)
        {
            users.Add(user);
            PostResponse postResponse = new PostResponse(true, "tempID");
            return postResponse;
        }

        // PUT: api/Registration/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Registration/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
