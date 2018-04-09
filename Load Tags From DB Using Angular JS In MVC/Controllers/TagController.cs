using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Load_Tags_From_DB_Using_Angular_JS_In_MVC.Models;

namespace Load_Tags_From_DB_Using_Angular_JS_In_MVC.Controllers
{
    public class TagController : ApiController
    {
        private DBEntities db = new DBEntities();

        // GET api/Tag
        public IEnumerable<tblTag> Get()
        {
            return db.tblTags.AsEnumerable();
        }
    }
}