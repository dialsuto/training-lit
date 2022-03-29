import { LitElement } from "lit";

export class GetData extends LitElement {
  static get properties() {
    return {
      url: {type: String},
      method: {type: String},
    };
  }

  constructor() {
    super();
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.getData();
  }

  getData() {
    fetch(this.url, {method: this.method})
      .then((response) => {
        if (response.ok) return response.json();
        return response.error;
      })
      .then((data) => this._sendData(data))
      .catch((error) => {
        console.warn('algo fallo: ', error)
      });
  }

  _sendData(data) {
    this._fireEvent('ApiData', data);
  }

  /**
   * Fires every event
   * @param {String} eventName
   * @param {Object} detail
   */
  _fireEvent(eventName, detail = {}) {
    this.dispatchEvent(new CustomEvent(eventName, {bubbles: true, composed: true, detail: detail}));
  }
}

customElements.define('get-data', GetData);
