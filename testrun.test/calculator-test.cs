using Microsoft.AspNetCore.Authorization.Infrastructure;
using Xunit;
using testrun;

namespace testrun.Classes.tests
{
    public class calculator_test
    {
        [Fact]
        public void Add_ReturnsCorrectResult()
        {
            //arrange
            var calculator = new CalculatorClass();

            //act
            var result = calculator.Add(10, 5);

            //assert
            Assert.Equal(15, result);
        }

        [Fact]
        public void Subtract_ReturnsCorrectResult()
        {
            //arrange
            var calculator = new CalculatorClass();

            //act
            var result = calculator.Subtract(10, 5);

            //assert
            Assert.Equal(5, result);
        }
    }
}
