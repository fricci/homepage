import './style.css';

class PopUpInfo extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({mode: 'open'});
      const wrapper = document.createElement('span');
      wrapper.textContent = this.getAttribute('data-text');
      this.shadowRoot.append(wrapper);
    }
  }

  customElements.define('popup-info', PopUpInfo);