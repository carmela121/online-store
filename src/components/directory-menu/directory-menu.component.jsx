import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import hats from '../images/hats.jpg'
import jackets from '../images/jackets.jpg'
import shoes from '../images/shoes.jpg'
import men from '../images/men2.jpg'
import women from '../images/women1.jpg'
import './directory-menu.styles.scss';


class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [{
        title: "hats",
        imageUrl: hats,
        id: 1

      },
      {
        title: "jackets",
        imageUrl: jackets,
        id: 2

      },
      {
        title: "shoes",
        imageUrl: shoes,
        id: 3

      },
      {
        title: "womens",
        imageUrl: women,
        id: 4,
        size: 'large'

      },
      {
        title: "mens",
        imageUrl: men,
        id: 5,
        size: 'large'


      }]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}
export default Directory;