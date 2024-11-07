import PropTypes from 'prop-types'

import './containerCatCards.css'

import CatCard from '../basics/CatCard'

//componente que contiene todos los datos que se utilizan de la api
function ContainerCatCards({cats}) {
   
  //función para validar que sea una url correcta
  function getUrl(cat){
    return cat.vetstreet_url? cat.vetstreet_url: cat.wikipedia_url
  }

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
        vcahospitals_url = {getUrl(cat)}
         />
    ))}
   </div>
  )
}

ContainerCatCards.propTypes = {
  cats : PropTypes.array.isRequired
}

export default ContainerCatCards
