import { LitElement, css, html } from 'lit';
import litLogo from './assets/lit.svg';
import viteLogo from '/vite.svg';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ContactMethod extends LitElement {
  static properties = {
    /**
     * Copy for the read the docs hint.
     */
    method: { type: String },

    /**
     * The number of times the button has been clicked.
     */
    address: { type: String },
  };

  constructor() {
    super();
    this.method = '';
    this.address = '';
  }

  render() {
    return html`<li><strong>${this.method}: </strong>${this.address}</li> `;
  }
}

window.customElements.define('contact-method', ContactMethod);
