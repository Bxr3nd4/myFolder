let gasto = 100;

for (let mes = 1; mes <= 12; mes++) {
  gasto = gasto * 1.1;
  console.log(`Gastos mes ${mes}: ${gasto.toFixed(2)}`);
}
