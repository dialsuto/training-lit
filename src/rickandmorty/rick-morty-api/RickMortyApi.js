import { LitElement, html } from 'lit';
import '../components/get-data.js';
import '../title-api/title-api.js';
import style from './RickMortyStyle.js';

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: {type: Array},
    };
  }

  static get styles() {
    return [style]
  }

  constructor() {
    super();
    this.wiki = [];
  }

  _dataFormat(event) {
    const data = event.detail;
    let characters = [];

    data['results'].forEach(character => {
      characters.push({
        image: character.image,
        name: character.name,
        species: character.species,
        status: character.status
      });
    });

    this.wiki = characters;
  }

  render() {
    return html`
      <get-data
          @ApiData="${this._dataFormat}"
          url="https://rickandmortyapi.com/api/character"
          method="GET"
      ></get-data>

      <title-api></title-api>
      <div class="container">
        ${this.dataTemplate}
      </div>
    `;
  }

  get dataTemplate() {
    return html`
      ${this.wiki.map(character => html`
        <div class="card">
          <div class="card-content">
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="">
            <div>${character.species} ${character.status}</div>
          </div>
        </div>
      `)}
    `;
  }
}
