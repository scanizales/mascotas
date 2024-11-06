import PropTypes from 'prop-types'


const CatCard = ({name, img,  description, vida , temperament, origin, vcahospitals_url}) => {
  
  let list = temperament.split(',') //convertir a lista temperament
  
  //función para que en el texto antes del último elemento sea 'and', ya que viene solo separado por comas
  function showListWithEnd(list){
    let out = ''
    for (let i = 0; i < list.length; i++){
        if(i == list.length-1){
            out += ('and '+ list[i]+'.') 
        }
        else if (i == list.length-2) {
            out += list[i] + ' ' 
        }
        else{
            out += list[i] + ', '
        }
    }
    return out
  }
  
  //obtener el texto con el 'and' para que sea un poco más agra
  const textWithEnd = showListWithEnd(list)

  return (
      <div className='card'>  
        <article>
          <section>
            <h3>Breed: {name}</h3>
            <p><strong>Origin: </strong>{origin}</p> 
            <p><strong>Life span: </strong>{vida} years.</p>         
            <p><strong>Character: </strong>{textWithEnd}</p>
          </section>
          <section className='img-cat'>
            <img src={img}></img>
          </section> 
        </article>
        <p><strong>Description: </strong>{description}</p>      
        <a href={vcahospitals_url} target='_blank'>Learn more here</a>       
      </div>
  )
}

CatCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  vcahospitals_url: PropTypes.string,

}
export default CatCard