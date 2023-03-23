using System;
namespace api_registration.Models
{
	public class PostResponse
	{
		public bool Result { get; set; }
		public string Id { get; set; }

        public PostResponse(bool result, string id)
        {
            this.Result = result;
            this.Id = id;
        }
    }
}

