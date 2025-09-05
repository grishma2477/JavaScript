namespace ConsoleApp1
{
    internal class Program
    {
        //@Author - Grishma Kandel
        static void Main(string[] args)
        {
            Console.Write("Enter the person's height in meters: ");

            // Read input and convert it to a double
            if (double.TryParse(Console.ReadLine(), out double height))
            {
                // Check height conditions
                if (height > 2)
                {
                    Console.WriteLine("The person is tall.");
                }
                else if (height >= 0 && height <= 2)
                {
                    Console.WriteLine("The person is normal.");
                }
                else
                {
                    Console.WriteLine("Invalid data: Height cannot be negative.");
                }
            }
            else
            {
                Console.WriteLine("Invalid input: Please enter a valid number.");
            }
        }
    }
}
