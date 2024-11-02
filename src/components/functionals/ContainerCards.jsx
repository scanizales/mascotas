import PropTypes from 'prop-types'
import Card from '../basics/Card'

function ContainerCards({cats}) {
  return (
    <div className="container-cards">
    {cats.map((cat, index) => (
        <Card key={index}
        name ={cat.name}
        description = {cat.description}
        temperament = {cat.temperament} 
        origin = {cat.origin} 
        vcahospitals_url = {cat.vcahospitals_url} 
         />
    ))}
   </div>
  )
}

ContainerCards.propTypes = {

}

export default ContainerCards
