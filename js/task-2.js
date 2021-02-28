const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];



const productList = ingredients.map(ingridient => {
  const li = document.createElement('li');
  li.textContent = ingridient;
  console.log(li);
  return li;
})

const productListEl = document.querySelector('#ingredients');
productListEl.append(...productList);
console.log(productListEl)