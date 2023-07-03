import { LitElement, css, html } from 'lit';
import { TestValues } from './test-values';

export class Contact extends LitElement {
  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    this.data = {};
  }

  contactsList() {
    if (this.data?.methods ?? none) {
      return this.data.methods.map((contactMethod) => {
        return html`<contact-method
          method=${contactMethod.method}
          address=${contactMethod.address}
        ></contact-method>`;
      });
    } else {
      return '';
    }
  }

  render() {
    this.data = TestValues.contact1;
    console.log(this.data);
    const methods = this.contactsList();
    console.log(methods);
    if (this.data) {
      console.log('runs');
      return html`<ul>
        <li>${this.data.name ?? ''}</li>
        <li>${this.data.title ?? ''}</li>
        <li>
          <ul>
            ${methods}
          </ul>
        </li>
      </ul> `;
    } else {
      return html`<p>does not run</p>`;
    }
  }
}

window.customElements.define('contact-data', Contact);
