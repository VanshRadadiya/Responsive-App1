import App from "./App"
import Choose from "./Choose"
import Count from "./Count"
import Destinations from "./Destinations"
import Footer from "./Footer"
import Holiday from "./Holiday"
import Inspire from "./Inspire"
import Menu from "./Menu"
import Popular from "./Popular"
import Seller from "./Seller"
import Sign from "./Sign"
import Slider1 from "./Slider1"
import Travel from "./Travel"

function Home(){
    return(
        <>
            <Menu></Menu>
            <Slider1></Slider1>
            <Destinations></Destinations>
            <Popular></Popular>
            <Holiday></Holiday>
            <Count></Count>
            <Choose></Choose>
            <Seller></Seller>
            <Travel></Travel>
            <Inspire></Inspire>
            <Sign></Sign>
            <Footer></Footer>
        </>
    )
}

export default Home