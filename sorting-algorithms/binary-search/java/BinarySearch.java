package daviddev16;

import java.util.Arrays;

public class BinarySearch {

	public static void main(String[] args) {
		
		BubbleSort bubbleSort = new BubbleSort();
		BinarySearch binarySearch = new BinarySearch();
		
		int[] array = {0, 3, 1, 8, 5, 4, 10, 9, 8, 7, 6};
		bubbleSort.sort(array);
		System.out.println("Sorted array: " + Arrays.toString(array));
		

		int indexOfValue = binarySearch.search(array, 9);
		System.out.println("Index of 5 is " + indexOfValue);
		
	}
	
	public int search(int[] array, int value) {
		return binarySearchAlgorithm(array, 0, array.length - 1, value);
	}
	
	private static int binarySearchAlgorithm(int[] array, int min, int max, int value) {

		if (max < min)
			return -1;
		
		int mid = (max + min) / 2;
		
		if (value == array[mid])
			return mid;
		
		if (value > array[mid])
			return binarySearchAlgorithm(array, mid + 1, max, value);
		else
			return binarySearchAlgorithm(array, min, mid - 1, value);

	}

}
