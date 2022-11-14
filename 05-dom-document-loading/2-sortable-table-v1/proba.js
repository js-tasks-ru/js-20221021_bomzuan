export default class SortableTable {
  // element;
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = data;
    this.render();
  }

  addTemplate(){
    this.headerConfig.forEach(value => {
      if(!value.template){
        value.template = (data = []) => {
          return `
          <div class="sortable-table__cell">${data}</div>
        `}}})
  }

  get template(){
    return`
        <div data-element="productsContainer" class="products-list__container">
            <div data-element="header" class="sortable-table__header sortable-table__row">
                ${this.headerTables()}
            </div>
            <div data-element="body" class="sortable-table__body">
                ${this.bodyTables()}
            </div>
        </div>
      `
  }
  getSubElements(){
    const result = {};
    const elements = this.element.querySelectorAll("[data-element]");
    for(const subElement of elements){
      const name = subElement.dataset.element;
      result[name] = subElement;
    }
    return result;
  }


  render(){
    this.addTemplate();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild;
    this.subElements = this.getSubElements();
  }

  headerTables(){
    return this.headerConfig.map(({id,title, sortable})=>{
      return`
        <div class="sortable-table__cell" data-id="${id}" data-sortable="${sortable}" data-order="asc">
            <span>${title}</span>
        </div>
      `
    }).join("")
  }
  bodyTables(){
    return this.data.map(item =>{
      return `<a href="/products/${item.id}" class="sortable-table__row">
        ${this.headerConfig.map(value => value.template(item[value.id])).join("")}
            </a>`
    }).join("")
  }

  sort

}

