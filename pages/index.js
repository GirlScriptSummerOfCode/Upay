import React from 'react';
import Item from '../components/Item';
import NavBar from '../components/NavBar';
import links from '../constants/links';
import buybutton from '../components/buybutton';

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
          <img src="/images/logo.png" alt="Logo of Upay NGO" />

          <section>
            The foundation of development for every society is the education of
            its youth. Keeping this in mind, an{' '}
            <a
              href="https://www.upay.org.in/"
              rel="noreferrer noopener"
              target="_blank"
            >
              NGO UPAY
            </a>{' '}
            (Underprivileged Advancement by Youth), was established in May 2010
            by a group of young engineers from IITs and NITs. It mainly aims to
            provide opportunities to underprivileged children and bring some
            sunshine in those deprived lives. Ever since it's dawn, UPAY Team
            has been working wholeheartedly in achieving this aim. Its success
            story can be culminated by the mere fact that where children were
            unable to do basic arithmetic calculations are now, not just
            producing excellent academic results but also bringing laurels to
            these underprivileged areas. The main vision of UPAY is overcome
            disparities in education so that every child gets an opportunity to
            Learn, Grow and Succeed.
          </section>

          <h2>Items</h2>
          <ul>
            {this.state.items.map(({ id, name }) => (
              <Item id={id} name={name} />
            ))}
          </ul>
          <h2>Buy Now Button</h2>
          <buybutton/>
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
