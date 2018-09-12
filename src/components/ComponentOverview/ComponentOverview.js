import React from 'react';
import { Link } from "gatsby";

class ComponentOverview extends React.Component {
  renderItems = (currentItem) => {  

    const component = currentItem.item;
  
    let componentUrl
    if (component === 'Multiselect') {
      componentUrl = '/components/dropdown'
    } 
    else {
      componentUrl = `/components/${component.toLowerCase().replace(' ', '-')}`
    }

    let componentImg;
    componentImg = require(`../../content/components/overview/images/${component}.svg`);
  
    return (
      <li className="component-item">
          <div className="flex-item">
            <Link to={componentUrl}>
              <img src={componentImg} alt={component} />
              <p className="component-name">{component}</p>
            </Link>
          </div>
      </li>
    );
  };

  render() {   
    const componentList = require('../../data/components.json'); // eslint-disable-line
    const content = (
      <ul className="flex-container">
        {Object.keys(componentList.items).map(item => {
          return this.renderItems(componentList.items[item]);
        })}      
      </ul>
    );
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default ComponentOverview;

