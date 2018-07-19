import React from 'react';
import Item from '../components/Item';
import Arrow from '../components/Icons/Arrow';
import Bookmark from '../components/Icons/Bookmark';
import Cog from '../components/Icons/Cog';
import Hamburger from '../components/Icons/Hamburger';
import Heart from '../components/Icons/Heart';
import Rupee from '../components/Icons/Rupee';
import Save from '../components/Icons/Save';
import Search from '../components/Icons/Search';
import Share from '../components/Icons/Share';
import User from '../components/Icons/User';
import Chevron from '../components/Icons/Chevron';

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
        <style jsx>{`
          ul {
            padding: 0;
          }
        `}</style>
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
            {this.state.items.map(
              (item) => (
                <Item
                  key={item.id}
                  {...item}
                />
              )
            )}
          </ul>

          <section>
            <h1>Icons</h1>
            <Arrow />
            <Bookmark />
            <Cog />
            <Hamburger />
            <Heart />
            <Rupee />
            <Save />
            <Search />
            <Share />
            <User />
            <Chevron direction={Chevron.DIRECTIONS.TOP} />
          </section>
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
