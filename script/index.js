function loadCategories() {
  //   Face the Data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  //   get yhe Container
  const categoryContainer = document.getElementById("category-container");

  //   loop operation
  for (let cat of categories) {
    console.log(cat);
    // create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    
    `;
    // append the Element
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();
