export default class MainPage {
  constructor() {
    this.generateSection = (className = '', id = '') => {
      const section = document.createElement('section');
      section.className = className;
      section.id = id;
      return section;
    };
    this.generateDiv = (className) => {
      const div = document.createElement('div');
      div.className = className;
      return div;
    };
    this.generateSlider = () => {
      const section = this.generateSection('slider');
      const ul = document.createElement('ul');
      ul.className = 'slides';
      let liInner = `<img src="assets/imgs/slide-1.jpg">
        
            <div class="caption center-align">
              <h2>Food For Every Occasion</h2>
              <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident eos dicta unde debitis
              </h5>
            </div>`;
      let li = this.generateSliderItem(liInner);
      ul.appendChild(li);
      liInner = `<img src="assets/imgs/slide-2.jpg">
            <div class="caption left-align">
              <h2>Meals For Every Budget</h2>
              <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus inventore neque impedit
              </h5>
            </div>`;
      li = this.generateSliderItem(liInner);
      ul.appendChild(li);
      liInner = `<img src="assets/imgs/slide-3.jpg">
            <div class="caption right-align">
              <h2>Dine Alone or With Group</h2>
              <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum molestias excepturi doloremque
              </h5>
            </div>`;
      li = this.generateSliderItem(liInner);
      ul.appendChild(li);
      section.appendChild(ul);
      return section;
    };
    this.generateSliderItem = (innerHTML) => {
      const li = document.createElement('li');
      li.innerHTML = innerHTML;
      return li;
    };
    this.generateSectionHeader = (content) => {
      const h4 = document.createElement('h4');
      h4.className = 'center';
      h4.innerHTML = content;
      return h4;
    };
    this.generateCard = (img, title) => {
      const div = this.generateDiv('col s12 m4');
      const card = this.generateDiv('card');
      const cardImg = this.generateDiv('card-image');
      const cardContent = this.generateDiv('card-title');

      cardImg.innerHTML = `<img src="${img}" alt="card image">
                  <span class="card-title">${title}</span>`;
      cardContent.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Itaque expedita modi, distinctio sint quasi tenetur?`;
      card.appendChild(cardImg);
      card.appendChild(cardContent);
      div.appendChild(card);
      return div;
    };
    this.generateWhyUs = () => {
      const section = this.generateSection('section section-popular scrollspy');
      const container = this.generateDiv('container');
      const row = this.generateDiv('row');
      const h4 = this.generateSectionHeader('<span class="red-text">Why</span> Us?');

      row.appendChild(h4);
      row.appendChild(this.generateCard('https://source.unsplash.com/1600x900/?meal', 'Great Meals'));
      row.appendChild(this.generateCard('https://source.unsplash.com/1600x900/?waiter', 'Excellent Service'));
      row.appendChild(this.generateCard('https://source.unsplash.com/1600x900/?dessert', 'Even Better Dessert'))
      container.appendChild(row);
      section.appendChild(container);
      return section;
    };
    this.generateFollowUs = () => {
      const social = ['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-pinterest'];
      const section = this.generateSection('section section-follow red darken-2 white-text center');
      const container = this.generateDiv('container');
      const row = this.generateDiv('row');
      const innerDiv = this.generateDiv('col s12');
      const h4 = this.generateSectionHeader('Follow Us');
      const p = document.createElement('p');
      p.innerHTML = 'Follow us on social media to get great deals';
      innerDiv.appendChild(h4, p);
      social.forEach((socialClass) => {
        const a = document.createElement('a');
        a.className = 'white-text fab-icon';
        a.href = '#';
        a.innerHTML = `<i class="fab ${socialClass} fa-2x"></i>`;
        innerDiv.appendChild(a);
      });
      row.appendChild(innerDiv);
      container.appendChild(row);
      section.appendChild(container);
      return section;
    };
  }

  generateMainContent() {
    const content = this.generateDiv('content');
    content.append(this.generateSlider(), this.generateWhyUs(), this.generateFollowUs());
    return content;
  }
}
