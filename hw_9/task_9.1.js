let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalSales() {
  return [
    ...company.sales,
    ...company.development.web,
    ...company.development.internals,
  ].reduce((total, person) => total + person.salary, 0);
}

console.log(totalSales());
