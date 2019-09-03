export default class ContactPage {
  constructor() {
    this.mainSection = document.createElement('section');
    this.generateDiv = (className) => {
      const div = document.createElement('div');
      div.className = className;
      return div;
    };
    this.generateFormField = (placeholder, element, type, className = '') => {
      const div = this.generateDiv('input-field');
      const field = document.createElement(element);

      field.setAttribute('type', type);
      field.placeholder = placeholder;
      if (className !== '') field.className = className;
      div.appendChild(field);
      return div;
    };
    this.generateForm = () => {
      const containingDiv = this.generateDiv('col s12 m6');
      const card = this.generateDiv('card-panel grey lighten-3');
      const header = document.createElement('h5');
      const submitBtn = document.createElement('input');
      const fields = [
        ['Name', 'input', 'text'],
        ['Email', 'input', 'text'],
        ['Phone', 'input', 'phone'],
        ['Message', 'textarea', 'text', 'materialize-textarea'],
      ];
      header.innherHTML = 'Please fill out this form';
      card.appendChild(header);
      fields.forEach((set) => {
        card.appendChild(this.generateFormField(...set));
      });
      submitBtn.value = 'submit';
      submitBtn.type = 'submit';
      submitBtn.className = 'btn red';
      card.appendChild(submitBtn);
      containingDiv.appendChild(card);
      return containingDiv;
    };
    this.generateGeneralInfo = () => {
      const containingDiv = this.generateDiv('col s12 m6');
      const cardPanel = this.generateDiv('card-panel red white-text center');
      const collection = document.createElement('ul');
      const collectionHeader = document.createElement('li');
      const collectionItems = ['The Best Restaurant', '777 Restaurant Street', 'San Francisco, CA'];
      cardPanel.innerHTML = `<i class="material-icons">email</i>
                            <h5>Contact Us For Reservation</h5>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis aut deleniti quae voluptatibus id tenetur molestias quas nemo ipsum.
                            </p>`;
      collection.className = 'collection with-header';
      collectionHeader.className = 'collection-header';
      collectionHeader.innerHTML = '<h4>Location</h4>';
      collection.appendChild(collectionHeader);
      collectionItems.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerHTML = item;
        collection.appendChild(li);
      });
      containingDiv.append(cardPanel, collection);
      return containingDiv;
    };
  }

  generateMainContent() {
    const content = this.generateDiv('content');
    const container = this.generateDiv('container');
    const row = this.generateDiv('row');
    row.append(
      this.generateGeneralInfo(),
      this.generateForm(),
    );
    container.appendChild(row);
    this.mainSection.appendChild(container);
    content.appendChild(this.mainSection);
    return content;
  }
}
