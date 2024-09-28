let number = 1;

function input(){
    var fuel = document.getElementById("fuelInput").value;
    var money = document.getElementById("moneyInput").value;
    var distance = document.getElementById("kilometresInput").value;

    var table = document.getElementById("dataTable");

    var row = table.insertRow(-1);

    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    cell0.innerHTML = number + '.';
    cell1.innerHTML = fuel;
    cell2.innerHTML = money;
    cell3.innerHTML = distance;

    document.getElementById('fuelInput').value = '';
    document.getElementById('moneyInput').value = '';
    document.getElementById('kilometresInput').value = '';

    number ++
}
