import React from 'react';
import PropTypes from 'prop-types';
import '../card/card.scss'

const Card = ({ imageUrl, title, description }) => {
  return (
   
          <div className="adc_card-section__adc-card">
            <div className="card-prop">
              <img src={imageUrl} className="card-img-top" alt={title} />
              <div className="card-body">
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
