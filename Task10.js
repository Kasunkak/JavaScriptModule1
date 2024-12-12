function calculateProbability() {
    // Prompt the user for the number of dice and the sum they're interested in
    const numDice = parseInt(prompt("Enter the number of dice:"));
    const sum = parseInt(prompt("Enter the sum you're interested in:"));

    // Validate the inputs
    if (isNaN(numDice) || isNaN(sum) || numDice < 1 || sum < numDice || sum > numDice * 6) {
        console.log("Please enter valid values.");
        return;
    }

    let successfulRolls = 0;
    const totalRolls = 10000;

    // Simulate rolling the dice 10,000 times
    for (let i = 0; i < totalRolls; i++) {
        let currentSum = 0;
        for (let j = 0; j < numDice; j++) {
            // Roll a single die (random number between 1 and 6)
            currentSum += Math.floor(Math.random() * 6) + 1;
        }

        // Check if the rolled sum equals the target sum
        if (currentSum === sum) {
            successfulRolls++;
        }
    }

    // Calculate the probability
    const probability = (successfulRolls / totalRolls) * 100;

    // Display the result in the console
    console.log(`Probability to get sum ${sum} with ${numDice} dice is ${probability.toFixed(2)}%`);
}

// Call the function to start the calculation
calculateProbability();
