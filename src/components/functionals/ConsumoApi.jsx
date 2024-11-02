import { useEffect, useState } from "react"
import ContainerCards from "./ContainerCards"

export default function ConsumoApi() {

    const [cats, setCats] = useState([])

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

    useEffect(() => {
        callApi('https://api.thecatapi.com/v1/breeds')        
    }, [])


  return (
    <>
       <ContainerCards cats={cats}></ContainerCards>
    </>
  )
}