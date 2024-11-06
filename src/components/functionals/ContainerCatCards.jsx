import PropTypes from 'prop-types'

import './containerCatCards.css'

import CatCard from '../basics/CatCard'

function ContainerCatCards({cats}) {
  return (
    <div className="container-cards-cats">
    {cats.map((cat, index) => (
        <CatCard key={index}
        name ={cat.name}
        img ={cat.img}
        description = {cat.description}
        vida ={cat.life_span}
        temperament = {cat.temperament} 
        origin = {cat.origin} 
        vcahospitals_url = {cat.vcahospitals_url} 
         />
    ))}
   </div>
  )
}

ContainerCatCards.propTypes = {
  cats : PropTypes.array.isRequired
}

export default ContainerCatCards
