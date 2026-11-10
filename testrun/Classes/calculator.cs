namespace testrun.Classes
{
    public interface Calculator
    {
        int Add(int start, int amount);
        int Subtract(int start, int amount);
    }

    public class CalculatorClass : Calculator
    {
        public int Add(int start, int amount)
        {
            return start + amount;
        }

        public int Subtract(int start, int amount)
        {
            return start - amount;
        }
    }
}
