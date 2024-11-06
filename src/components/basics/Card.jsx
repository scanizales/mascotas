import PropTypes from 'prop-types';

import "./card.css"

const Card = ({image, text}) => {

  return (

      <div className="card-main">
        <article>
          <img className="card-icon" src={image}></img>
        </article>
        <article className='text'>
         <strong>{text}</strong> 
        </article>
      </div>
  )
};

Card.propTypes = {
  image:PropTypes.string,
  text:PropTypes.string,
};

export default Card;