import { LitElement, html } from "lit";
import style from './TitleApiStyle.js';

export class TitleApi extends LitElement {
  static get properties() {
    return {
      title: {type: String},
    };
  }

  static get styles() {
    return [style]
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <h1>The <strong class="title">Rick and Morty</strong> API</h1>
        <p class="title">LitElement</p>
      </div>
    `;
  }
}
