using Microsoft.AspNetCore.Mvc;
using testrun.Classes;

namespace testrun.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CalculatorController : ControllerBase
    {

        private readonly CalculatorClass _calculator;
        public CalculatorController()
        {
            _calculator = new CalculatorClass();
        }

        [HttpGet("add")]
        public int Add(int start, int amount)
        {
            return _calculator.Add(start, amount);
        }

        [HttpGet("subtract")]
        public int Subtract(int start, int amount)
        {
            return _calculator.Subtract(start, amount);
        } 
    }
}
