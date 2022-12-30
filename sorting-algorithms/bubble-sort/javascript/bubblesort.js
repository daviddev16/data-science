
const MAX = 10;

/* organiza a array ao clicar no button */
function sort(inputTextArray) {
	
	var unsortedArray = translateToArray(inputTextArray.value);	
	
	/* organizar array */
	bubbleSort(unsortedArray);
	
	/* setar os valores da lista organizados no input */
	inputTextArray.value = unsortedArray.join(', ');
	
}

/* gera valore aleatórios */
function generate(inputTextArray) {
	let randomArray = [];	
	for (let i = 0; i < MAX; i++) {
		randomArray.push( Math.floor(Math.random() * MAX));
	}
	inputTextArray.value = randomArray.join(', ');
}

/* converte o texto do input para uma array de números */
function translateToArray(inputText) {
	
	var translatedArray = [];
	var textArray = inputText.replaceAll('\\s+', '').split(',');
	
	for (let i = 0; i < textArray.length; i++) {
		translatedArray.push(parseInt(textArray[i]));
	}
	
	return translatedArray;
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

function getInputArray() {
	return document.getElementById("inputArray");
}
