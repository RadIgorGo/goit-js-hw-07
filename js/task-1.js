const summItemsEl = document.querySelectorAll('.item');
console.log(summItemsEl);
const viewCategories = () =>
    console.log(`У списку ${summItemsEl.length} категорії.`);
viewCategories(summItemsEl);

  
const viewCategory = summItemsEl.forEach(item => {
    const categoriesItemsEl = item.querySelectorAll('li')
    console.log(
        `Категорія: ${item.firstElementChild.textContent}
Кількість елементів: ${categoriesItemsEl.length}`);
});

        
       
   

