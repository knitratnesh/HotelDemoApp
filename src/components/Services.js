import { Component } from "react";
import {FaGlassCheers, FaCocktail, FaChargingStation, FaCarAlt} from 'react-icons/fa';
const services = [
    {
        id: 1,
        title: "Breakfast",
        icon: <FaGlassCheers />,
        info: "Free breakfast is included in the price"
    },
    {
        id: 1,
        title: "Free Cocktail",
        icon: <FaCocktail />,
        info: "Free breakfast is included in the price"
    },
    {
        id: 1,
        title: "Electric Charging",
        icon: <FaChargingStation />,
        info: "Free charging for electric cars"
    },
    {
        id: 1,
        title: "Car Parking",
        icon: <FaCarAlt />,
        info: "Ample space for your valuable car parking"
    }
]
export default class Services extends Component{

    render(){
        return(
            <section className="services">
                <div className="section-title">
                    <h4>Our Services</h4>
                </div>
                <div className="services-center">
                    {
                        services.map((item) => {
                            return(
                            <article key={item.id} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>)
                        })
                    }
                {/* <article>
                    <div><FaGlassCheers /></div>
                    <h6>Breakfast</h6>
                    <p>Veg Breakfast</p>
                </article> */}
                </div>
            </section>
        )
    }

}