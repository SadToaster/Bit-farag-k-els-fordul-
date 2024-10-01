function input() {
    // Get input values
    let fuel = document.getElementById('fuelInput').value;
    let money = document.getElementById('moneyInput').value;
    let kilometers = document.getElementById('kilometresInput').value;
    let date = document.getElementById('datumInput').value;
    
    // Get the error message container
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = ""; // Clear previous error messages

    // Validate inputs
    if (fuel === "" || money === "" || kilometers === "") {
        errorMessage.textContent = "Kérlek, töltsd ki az összes mezőt számokkal!";
        return; // Exit the function if validation fails
    }

    if (isNaN(fuel) || isNaN(money) || isNaN(kilometers)) {
        errorMessage.textContent = "Kérlek, csak számokat adj meg!";
        return; // Exit the function if validation fails
    }

    // Get current date
    

    // Create a new row
    let table = document.getElementById('dataTable');
    let row = table.insertRow(-1);

    // Add cells to the row
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    // Fill the cells with data
    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = fuel;
    cell3.innerHTML = money;
    cell4.innerHTML = kilometers;
    cell5.innerHTML = date;

    // Clear the inputs
    document.getElementById('fuelInput').value = '';
    document.getElementById('moneyInput').value = '';
    document.getElementById('kilometresInput').value = '';
    document.getElementById('dateInput').value = ''
}
