// type ImageType = {
//   kind: "thumbnail" | "mobile" | "tablet" | "desktop";
//   src: string;
// };

// type ProductType = {
//   image: ImageType[];
//   name: string;
//   category: string;
//   price: number;
// };

export class ProductManager {
  async init() {
    await this.fetchProducts();
    return this;
  }

  getProducts() {
    return this._products;
  }

  async fetchProducts() {
    const response = await fetch("./data.json");
    const data = await response.json();
    this._products = data;
  }

  getUlList(ulElement) {
    for (let i = 0; i < this.getProducts().length; i++) {
      let li_elem = document.createElement("li");
      ulElement.appendChild(li_elem);
      ulElement.childNodes[i].textContent = this.getProducts()[i].name;
    }
  }
}
