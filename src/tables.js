function buildTable(table, tbody, array) {
  //Build thead
  const headers = ["Name", "Dates", "Location","Description"];
  const row = document.createElement("tr");
  for (const name of headers) {
    const cell = document.createElement("th");
    const cellText = document.createTextNode(name);
    cell.append(cellText);
    row.append(cell);
  }
  tbody.append(row); //adding headers to table

  //build rows
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].name);
    addRow(tbody, array[i]);
  }
  table.append(tbody);
}

function addRow(tbody, rowData) {
  console.log(`rowData - ${rowData}`);
  const row = document.createElement("tr");
  Object.entries(rowData).forEach((k, v) => {
    let element = k.toString().split(",")[1];
    const cell = document.createElement("td");
    const cellText = document.createTextNode(element);
    cell.append(cellText);
    row.append(cell);
  });
  tbody.append(row);
  console.log("add row")
}

function deleteRow() {
  const table = document.querySelector("table");
  const row = Math.floor(Math.random * 5) + 1;
  table.deleteRow(row);
}

export { buildTable, addRow, deleteRow }
