import {LitElement, html} from 'lit';
import './components/get-data.js';
import './title-api.js';
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
        this.addEventListener('ApiData', (event) => {
            this._dataFormat(event.detail);
        });
    }

    _dataFormat(data) {
        let personajes = [];

        data['results'].forEach(personaje => {
            personajes.push({
                image: personaje.image,
                name: personaje.name,
                species: personaje.species,
                status: personaje.status
            });
        });

        this.wiki = personajes;
    }

    render() {
        return html`
            <get-data
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
            ${this.wiki.map(personaje => html`
                <div class="card">
                    <div class="card-content">
                        <h2>${personaje.name}</h2>
                        <img src="${personaje.image}" alt="">
                        <div>${personaje.species} ${personaje.status}</div>
                    </div>
                </div>
            `)}
        `;
    }
}
