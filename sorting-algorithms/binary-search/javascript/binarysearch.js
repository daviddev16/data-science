
var array = generate();
bubbleSort(array);

function init() {
	document.getElementById("arrayText").innerHTML = array.join(', ');
}

function search() {

	let value = parseInt(document.getElementById("inputValue").value);
	let indexValue = binarySearch(array, value);
	document.getElementById("result").innerHTML = "Index of " + value + " is " + (indexValue != -1 ? indexValue : " not valid");
}

/* gera valore aleatórios */
function generate() {
	let randomArray = [];	
	for (let i = 0; i < MAX; i++) {
		randomArray.push( Math.floor(Math.random() * MAX));
	}
	return randomArray;
}

/* implementação do bubble sort algorithm */
function bubbleSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let aux = array[j];
				array[j] = array[j + 1];
				array[j + 1] = aux;
			}
		}
	}
}

function binarySearch(array, value) {
	return binarySearchAlgorithm(array, 0, array.length - 1, value);
}

/* implementação do binary search algorithm */
function binarySearchAlgorithm(array, min, max, value) {
	
	if (min > max)
		return -1;
	
	let mid = Math.floor((min + max) / 2);
	
	if (value == array[mid])
		return mid;
	
	if (value > array[mid])
		return binarySearchAlgorithm(array, mid + 1, max, value);
	else
		return binarySearchAlgorithm(array, min, mid - 1, value);
	
}