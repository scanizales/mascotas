import "../styles/global.css";
import imageOrigin from "../assets/icons/origen.png";
import imageSalud from "../assets/icons/salud.png";
import imageDatos from "../assets/icons/datos-curiosos.png";
import Card from "../components/basics/Card";
import ConsumoApi from '../components/functionals/ConsumoApi'
import './home.css'

const Home = () => {
    return (
        <>
        <h3 className="subtitle-main">What will you know here?</h3>
        <div className="container-cards">
           <Card image={imageOrigin} text="Know its origin" />
           <Card className="middle-card" image={imageSalud} text="More about your health" />
           <Card image={imageDatos} text="Curious facts" />
        </div>
        <ConsumoApi></ConsumoApi>
        </>
    );
}

export default Home;