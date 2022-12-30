package daviddev16;

import java.util.Arrays;
import java.util.Random;

public class BubbleSort {

	public static void main(String[] args) {

		int[] array = createArray(20);
		System.out.println("Unsorted: " + Arrays.toString(array));
		
		BubbleSort bubbleSort = new BubbleSort();	
		bubbleSort.sort(array);
		System.out.println("Sorted: " + Arrays.toString(array));

	}

	/*
	 * Generate a array with fixed size
	 */
	public static int[] createArray(int max) {
		final Random random = new Random();
		int[] values = new int[max];
		for (int i = 0; i < values.length; i++) {
			values[i] = random.nextInt(max);
		}
		return values;
	}
	
	/*
	 * bubble sort algorithm implementation
	 */
	public void sort(int[] array) {
		for (int i = 0; i < array.length - 1; i++) {
			for (int j = 0; j < array.length - i - 1; j++) {
				if (array[j] > array[j + 1]) {
					int aux = array[j];
					array[j] = array[j + 1];
					array[j + 1] = aux;
				}
			}
		}
	}

}
