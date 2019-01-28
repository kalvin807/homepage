import React from 'react';
import './style.scss';

const Item = (props) =>{

    if (props.render) return props.render;
    else
        return(
            <div className="portfolio-item">
            <div className="portfolio-item__title">Badass</div>
    
            <div className="portfolio-item__desc">
              I do badass things and kickass everyday! I do badass things and
              kickass everyday! I do badass things and kickass everyday!
            </div>
            <div className="portfolio-item__icon">
              <i className="fab fa-js" />
              <i className="fab fa-react" />
              <i className="fab fa-html5" />
            </div>
            <div className="portfolio-item__links">
            </div>
          </div>
        );
}

export default Item;