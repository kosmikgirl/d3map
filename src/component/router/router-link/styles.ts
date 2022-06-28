import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
    font-family: "Roboto Flex", sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    padding-bottom: .5rem;
  }

  a:hover {
    border-bottom: 1px solid pink;
  }
`;
