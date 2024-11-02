import PropTypes from 'prop-types'

const Card = ({name, description, temperament, origin, vcahospitals_url}) => {
  return (
      <div>  
        <p>{name}</p>
        <p>{description}</p>
        <p>{temperament}</p>
        <p>{origin}</p>
        <a>{vcahospitals_url}</a>          
      </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  vcahospitals_url: PropTypes.string.isRequired,

}
export default Card