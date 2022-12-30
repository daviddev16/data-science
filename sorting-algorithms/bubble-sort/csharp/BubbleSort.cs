
using System;

public class BubbleSort
{

    public static void Main(string[] args)
    {
        BubbleSort bubbleSort = new BubbleSort();

        int[] unsortedArray = CreateArray(20);

        Console.Write("Unsorted: ");
        PrintArray(unsortedArray);

        bubbleSort.Sort(unsortedArray);

        Console.Write("\nSorted: ");
        PrintArray(unsortedArray);

        Console.ReadKey();
    }

    public static int[] CreateArray(int size)
    {
        Random random = new Random(); 
        int[] array = new int[size];
        for (int i = 0; i < size; i++)
        {
            array[i] = random.Next(size); 
        }
        return array;
    }

    /* Implementação bubble sort algorithm */
    public void Sort(int[] array)
    {
        for (int i = 0; i < array.Length - 1; i++)
        {
            for (int j = 0; j < array.Length - i - 1; j++)
            {
                if (array[j] > array[j + 1])
                {
                    int aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;
                }
            }
        }
    }

    public static void PrintArray(int[] array)
    {
        for (int i = 0; i < array.Length; i++)
        {
            Console.Write(array[i] + ((i  < array.Length - 1) ? ", " : ""));
        }
        Console.WriteLine();
    }

}
