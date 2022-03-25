import {css} from "lit";

export default css`
  :host {
    display: block;
  }

  .container {
    text-align: center;
  }

  get-data {
    display: none;
  }

  .card {
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    width: 200px;
    margin: 1rem;
    position: relative;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: all 0.3s cubic-bezier(.25 .8 .25 1);
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card img {
    width: 70%;
  }
`;
