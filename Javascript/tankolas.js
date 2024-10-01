
let fuelingStatements = [];

function input() {
    let fuel = document.getElementById('fuelInput').value;
    let money = document.getElementById('moneyInput').value;
    let kilometers = document.getElementById('kilometresInput').value;
    let date = document.getElementById('datumInput').value;

    let errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = ""; 

    
    if (fuel === "" || money === "" || kilometers === "" || date === "") {
        errorMessage.textContent = "Kérlek, töltsd ki az összes mezőt!";
        return;
    }

    if (isNaN(fuel) || isNaN(money) || isNaN(kilometers)) {
        errorMessage.textContent = "Kérlek, csak számokat adj meg!";
        return;
    }

    
    let table = document.getElementById('dataTable');
    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = fuel;
    cell3.innerHTML = money;
    cell4.innerHTML = kilometers;
    cell5.innerHTML = date;

    
    fuelingStatements.push({
        fuel: fuel,
        money: money,
        kilometers: kilometers,
        date: date
    });

    
    document.getElementById('fuelInput').value = '';
    document.getElementById('moneyInput').value = '';
    document.getElementById('kilometresInput').value = '';
    document.getElementById('datumInput').value = '';
}


function filterByDate() {
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;

    
    let start = new Date(startDate);
    let end = new Date(endDate);

    
    let filteredTable = document.getElementById('filteredTable');
    filteredTable.innerHTML = "";

    
    if (startDate === "" || endDate === "") {
        alert("Kérlek, válassz ki két dátumot!");
        return;
    }

    
    let filteredStatements = fuelingStatements.filter(statement => {
        let statementDate = new Date(statement.date);
        return statementDate >= start && statementDate <= end;
    });

    
    filteredStatements.forEach((statement, index) => {
        let row = filteredTable.insertRow(-1);
        row.insertCell(0).innerHTML = index + 1; 
        row.insertCell(1).innerHTML = statement.fuel;
        row.insertCell(2).innerHTML = statement.money;
        row.insertCell(3).innerHTML = statement.kilometers;
        row.insertCell(4).innerHTML = statement.date;
    });
}
