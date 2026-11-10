using Microsoft.AspNetCore.Mvc;

namespace testrun.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok(new
            {
                Message = "hello from .net"
            });
        }
    }
}
