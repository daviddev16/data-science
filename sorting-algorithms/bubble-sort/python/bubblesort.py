import random


# Gerar array com valores aleatórios
def generate_array(size):
    new_array: list[int] = []
    for i in range(0, size):
        new_array.append(random.randint(0, size));
    return new_array


# implementação bubble sort algorithm
def bubble_sort(array):
    for i in range(0, len(array) - 1):
        for j in range(0, len(array) - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]


unsorted_array = generate_array(20)

print("Unsorted: ", unsorted_array)

bubble_sort(unsorted_array)

print("Sorted: ", unsorted_array)
