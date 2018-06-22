import React from 'react';
import Link from 'next/link';
import Item from '../components/Item';

/**
 * Home page
 *
 * @export
 * @class IndexPage
 * @extends {React.PureComponent}
 */
export default class IndexPage extends React.PureComponent {
  state = {
    items: [],
  };

  render() {
    return (
      <React.Fragment>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
          }
        `}</style>
        <style jsx>{`
          nav {
            background: linear-gradient(90deg, violet, limegreen);
          }
          nav ul {
            margin: 0;
            padding: 20px;
            list-style: none;
          }
          nav ul li {
            display: inline-block;
            margin: 5px;
          }
          nav ul li a {
            color: white;
            text-decoration: none;
          }
          main {
            padding: 20px;
          }
        `}</style>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Upay</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h2>Items</h2>
          <ul>
            {this.state.items.map(({ id, name }) => (
              <Item id={id} name={name} />
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }

  /**
   * This is for demo purposes.
   * Once the component has mounted, we fetch items from our API and sets them to state.
   */
  async componentDidMount() {
    const { data: items } = await fetch('/api/items').then(r => r.json());
    this.setState({ items });
  }
}
