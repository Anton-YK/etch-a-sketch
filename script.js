function createGrid(n) {
  const container = document.querySelector(".container");
  for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < n; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}
createGrid(16);
