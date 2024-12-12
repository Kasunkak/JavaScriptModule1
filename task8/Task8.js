// JavaScript function to find and display leap years
function findLeapYears() {
    // Get the start and end years from the user
    const startYear = parseInt(prompt("Enter the start year:"));
    const endYear = parseInt(prompt("Enter the end year:"));

    // Validate the input
    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        alert("Please enter valid years with the start year less than or equal to the end year.");
        return;
    }

    const resultList = document.getElementById("leapYears");
    resultList.innerHTML = ""; // Clear previous results

    // Find and display leap years
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            const listItem = document.createElement("li");
            listItem.textContent = year;
            resultList.appendChild(listItem);
        }
    }
}
