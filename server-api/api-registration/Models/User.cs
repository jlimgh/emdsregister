using System;
namespace api_registration.Models
{
	public class User
	{
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User(string firstName, string lastName, string userName, string email, string password)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Username = userName;
            this.Email = email;
            this.Password = password;
        }
    }
}

