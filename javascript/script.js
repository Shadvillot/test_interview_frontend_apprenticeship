// Task 1: Array Manipulation
function getEvenNumbers(numbers) {
    // Vérifie que l'entrée est bien un tableau, sinon throw une erreur
    if (!Array.isArray(numbers)) {
        throw new TypeError("L'entrée doit être un tableau.");
    }

    return numbers.filter(number => typeof number === 'number' && number % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbersArray);
console.log("Nombres pairs:", evenNumbers);

// Task 2: DOM Interaction
document.getElementById('changeTextButton').addEventListener('click', () => {
    const textElement = document.getElementById('myText');
    
    // Si l'élément existe, change son texte en "Hello, Check!"
    if (textElement) {
        textElement.textContent = 'Hello, Check!';
    } else {
        console.error("L'élément avec l'ID 'myText' est introuvable.");
    }
});
