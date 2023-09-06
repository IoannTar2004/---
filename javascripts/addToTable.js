function addToTable(response) {
    let table = document.getElementById('tbody');
    let text = response.split('<br>');
    for(let i = 0; i < text.length - 1; i++) {
        let tableData = text[i].split('|');
        let inner = `
            <tr>
                <td>${tableData[0]}</td>
                <td>${tableData[1]}</td>
                <td>${tableData[2]}</td>
                <td>${tableData[3]}</td>
            </tr>`
        table.innerHTML += inner;
        coordinatesParse(tableData[0]);
    }
}

function coordinatesParse(tableData) {
    let coordinates = tableData.match(/-?\d+/g);
    createDot(coordinates[0], coordinates[1], coordinates[2]);
}