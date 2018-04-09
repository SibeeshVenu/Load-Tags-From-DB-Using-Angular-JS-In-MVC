using System.Web;
using System.Web.Mvc;

namespace Load_Tags_From_DB_Using_Angular_JS_In_MVC
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}