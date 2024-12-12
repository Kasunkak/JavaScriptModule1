function checkPrime() {
    // Get the user input from prompt (you can replace this with any input method)
    const num = parseInt(prompt("Enter a number:"));

    // Check if the input is a valid number
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
        return;
    }

    // Handle edge cases
    if (num <= 1) {
        console.log(num + " is not a prime number.");
        return;
    }

    // Check divisibility from 2 to sqrt(num)
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Output result
    if (isPrime) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}

// Call the function to check for prime number
checkPrime();
