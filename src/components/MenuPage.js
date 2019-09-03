export default class MenuPage {
  constructor() {
    this.generateDiv = (className) => {
      const div = document.createElement('div');
      div.className = className;
      return div;
    };
    this.generateSectionHeader = (content) => {
      const h4 = document.createElement('h4');
      h4.className = 'center';
      h4.innerHTML = content;
      return h4;
    };
    this.generateCard = (title, img) => {
      const div = this.generateDiv('col s12 m3');
      const card = this.generateDiv('card');
      const cardImg = this.generateDiv('card-image');
      const cardContent = this.generateDiv('card-title');

      cardImg.innerHTML = `<img src="${img}" alt="card image">
                <span class="card-title">${title}</span>`;
      cardContent.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
      card.appendChild(cardImg);
      card.appendChild(cardContent);
      div.appendChild(card);
      return div;
    };
    this.generateMenuSection = (list, title) => {
      const section = document.createElement('section');
      const header = this.generateSectionHeader(title);
      const container = this.generateDiv('container');
      const row = this.generateDiv('row');
      list.forEach((menuItem) => {
        row.appendChild(this.generateCard(...menuItem));
      });
      container.appendChild(row);
      section.append(header, container);
      return section;
    };
    this.generateBreakfastMenu = () => {
      const breakfast = [
        ['Delicious Breakfast 1', 'https://source.unsplash.com/1600x900/?breakfast'],
        ['Delicious Breakfast 2', 'https://source.unsplash.com/1600x900/?pancakes'],
        ['Delicious Breakfast 3', 'https://source.unsplash.com/1600x900/?waffles'],
        ['Delicious Breakfast 4', 'https://source.unsplash.com/1600x900/?brunch'],
      ];
      return this.generateMenuSection(breakfast, 'Our Breakfast Menu');
    };
    this.generateMealMenu = () => {
      const meals = [
        ['Delicious Meal 1', 'https://source.unsplash.com/1600x900/?lunch'],
        ['Delicious Meal 2', 'https://source.unsplash.com/1600x900/?dinner'],
        ['Delicious Meal 3', 'https://source.unsplash.com/1600x900/?meal'],
        ['Delicious Meal 4', 'https://source.unsplash.com/1600x900/?soup'],
      ];
      return this.generateMenuSection(meals, 'Our Main Courses');
    };
    this.generateDessertMenu = () => {
      const desserts = [
        ['Delicious Dessert 1', 'https://source.unsplash.com/1600x900/?icecream'],
        ['Delicious Dessert 2', 'https://source.unsplash.com/1600x900/?cake'],
        ['Delicious Dessert 3', 'https://source.unsplash.com/1600x900/?cheesecake'],
        ['Delicious Dessert 4', 'https://source.unsplash.com/1600x900/?souffle'],
      ];
      return this.generateMenuSection(desserts, 'Our Desserts Menu');
    };
    this.generateDrinksMenu = () => {
      const drinks = [
        ['Delicious Breakfast 1', 'https://source.unsplash.com/1600x900/?cocktail'],
        ['Delicious Breakfast 2', 'https://source.unsplash.com/1600x900/?wine'],
        ['Delicious Breakfast 3', 'https://source.unsplash.com/1600x900/?beer'],
        ['Delicious Breakfast 4', 'https://source.unsplash.com/1600x900/?juice'],
      ];
      return this.generateMenuSection(drinks, 'Our Drinks Menu');
    };
  }

  generateMainContent() {
    const content = this.generateDiv('content');
    const h2 = document.createElement('h2');
    h2.className = 'center';
    h2.innerHTML = 'Checkout Our Latest Menu!';
    content.append(
      h2,
      this.generateBreakfastMenu(),
      this.generateMealMenu(),
      this.generateDessertMenu(),
      this.generateDrinksMenu(),
    );
    return content;
  }
}
