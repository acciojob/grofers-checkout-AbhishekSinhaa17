// Create and add the button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const existing = document.getElementById("ans");
  if (existing) {
    const tr = existing.closest("tr");
    if (tr) tr.remove();
  }

  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    const text = (cell.textContent || "").trim();
    const value = parseFloat(text);
    if (!isNaN(value)) total += value;
  });

  const table = document.querySelector("table");
  if (!table) return;

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.id = "ans";

  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
