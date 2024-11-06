
//importación de los hooks
import { useEffect, useState } from "react"

//importación de componentes
import ContainerCatCards from "./ContainerCatCards"
import Button from "../basics/Button"
import Input from "../basics/Input"

//importación del icono cuando no se encuentre la raza
import cry from '../../assets/icons/cry.png'

import './consumoApi.css'

export default function consumoApi() {
 
    //creación de estados
    const [cats, setCats] = useState([]) //estado para almacenar los datos de la API
    const [buscador, setBuscador] = useState('') //estado alamcenar la raza a buscar
 

    //función para hacer llamado a la API
    const callApi = async(url) => {
        try{
            const data = await fetch(url)
            const response = await data.json()  
            setCats(response.slice(0,15))      
        }
        catch(error){
            console.log(error)
        }
    }
    
    //hacer llamado a la api
    useEffect(() => {
        callApi('https://api.thecatapi.com/v1/breeds')        
    }, [])


    //función para el formulario
    const handleBuscar = (e) => {
      e.preventDefault()
      setBuscador(e.target.elements.buscador.value) //poner el buscador el dato del input
      e.target.elements.buscador.value = '' //limpiar el input
    }
    
    //variable que almacena los datos de los gatos agregándole la imágen y filtrar el dato que se de en buscador
    //nota: si no hay nada en buscador va a devolver todos los elementos de cats
    const datos = cats.map((gato) =>
      ({...gato, img: new URL(`../../assets/cats/${gato.id}.png`, import.meta.url).href})).filter((item) => item.name.toLowerCase().includes(buscador.toLowerCase()))
  
  return (
    <>
      <div className="results-api">
          <form onSubmit={handleBuscar}>
            <Input type="text" placeholder="Enter the breed..." name='buscador'></Input>
            <Button type="submit"></Button>       
          </form> 
          {datos.length === 0 && buscador !== ''?(
              <section className="not-found">
                <p>Soorry, no results found for your kitten's breed.</p>
                <img src={cry}></img>
              </section>
          ):(
            <ContainerCatCards cats={datos}></ContainerCatCards>
          )}   
      </div>
    </>
  )
}

