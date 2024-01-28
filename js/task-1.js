const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
    console.log(`Category: ${category.firstElementChild.innerText}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}