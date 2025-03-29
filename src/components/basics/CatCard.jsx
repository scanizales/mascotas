import PropTypes from 'prop-types'
import {Card, CardHeader, CardBody, Image, Link, Button} from "@heroui/react";

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
    <>
      <Card className="card">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Life span: {vida} years.</p>
          <small className="text-default-500">Origin:{origin}</small>
          <h4 className="font-bold text-large">Breed: {name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
        <Image
            isBlurred
            alt="HeroUI Album Cover"
            className="m-5"
            src={img}
            width={240}
          />
          <p><strong>Description: </strong>{description}</p> 
          <p><strong>Character: </strong>{textWithEnd}</p>
          <Button showAnchorIcon as={Link} color="primary" href={vcahospitals_url} target='_blank' variant="solid">Learn more here</Button>       
        </CardBody>
    </Card>
    </>
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