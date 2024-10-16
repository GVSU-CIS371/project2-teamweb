import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById('main-container');

    if (mainContainer) {
        // Clear existing content
        mainContainer.innerHTML = '';

        // Generate and append HTML for each product
        prods.forEach((product) => {
            const productHTML = generateProductHTML(product);
            mainContainer.innerHTML += productHTML;
        });
    }
}


function getByCategory(category: string): void {
    const categorizedProducts:Product[] = products.filter((product) => product.category == category);

    renderProducts(categorizedProducts);
}

function getByRating(minRating: number): void {
    const filteredProducts:Product[] = products.filter((product) => product.rating > minRating);

    renderProducts(filteredProducts);
}

export { renderProducts, getByCategory, getByRating };