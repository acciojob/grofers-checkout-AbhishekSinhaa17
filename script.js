const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const priceCells = document.querySelectorAll(".prices");
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent) || 0;
    total += value;
)};

getSumBtn.addEventListener("click", getSum);

