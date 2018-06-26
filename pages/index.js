import React from 'react';
import Item from '../components/Item';
import CheckoutButton from '../components/CheckoutButton';

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
        <main>
          <img width="100%" src="/images/logo.png" alt="Logo of Upay NGO" />

          <section>
            The foundation of development for every society is the education of
            its youth. Keeping this in mind, an
            <a
              href="https://www.upay.org.in/"
              rel="noreferrer noopener"
              target="_blank"
            >
              {' NGO UPAY '}
            </a>
            (Underprivileged Advancement by Youth), was established in May 2010
            by a group of young engineers from IITs and NITs.
          </section>

          <h2>Items</h2>
          <ul>
            {this.state.items.map(({ id, name }) => (
              <Item key={id} name={name} />
            ))}
          </ul>

          <CheckoutButton />
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
