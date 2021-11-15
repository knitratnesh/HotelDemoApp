import React, { Component } from "react";
import room1 from '../assets/images/room-1.jpeg'
import room2 from '../assets/images/room-7.jpeg'
import room3 from '../assets/images/room-3.jpeg'
import room4 from '../assets/images/room-4.jpeg'
import room5 from '../assets/images/room-5.jpeg'
import room6 from '../assets/images/room-6.jpeg'
import defaultImage from '../assets/images/room-7.jpeg'
import { Link } from "react-router-dom";

export default class IndividualRoom extends Component{

    getImageURL(name) {
        switch (name) {
            case "room-1":
                return room1;
            case "room-2":
                return room2;
            case "room-3":
                return room3;
            case "room-4":
                return room4;
            case "room-5":
                return room5;
            case "room-6":
                return room6;
            default:
                return defaultImage;
        }

    }
    
    render(){
        var imageURL = this.getImageURL(this.props.name);
        console.log("Description props:" + JSON.stringify(this.props));
        return(
            <>
            <article className="room">
                <div className="img-container">
                    <img src={imageURL} alt=" "/>
                    <div className="price-top">
                        <h6>{"INR "+ this.props.price+"/-"}</h6>
                        <p>Per day</p>
                    </div>
                </div>
                <div className="room-info">
                    <Link to={{pathname: `/rooms/${this.props.roomType}`, 
                    query:{description: this.props.details, roomType:this.props.roomType,
                        price:this.props.roomType+' Starting At INR '+this.props.price+'/-'}}}>{this.props.roomType}</Link>
                </div>
            </article>
            </>
        )
    }

}