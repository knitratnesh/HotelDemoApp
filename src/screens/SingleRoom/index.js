import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImage from '../../assets/images/room-1.jpeg'
import Banner from "../../components/Banner";
import Cover from "../../components/Cover";
import room1 from '../../assets/images/room-1.jpeg';
import room2 from '../../assets/images/room-2.jpeg';
import room3 from '../../assets/images/room-3.jpeg';
import room4 from '../../assets/images/room-4.jpeg';
import room5 from '../../assets/images/room-5.jpeg';
import room6 from '../../assets/images/room-6.jpeg';
import room7 from '../../assets/images/room-7.jpeg';
import room8 from '../../assets/images/room-8.jpeg';
import room9 from '../../assets/images/room-9.jpeg';
import room10 from '../../assets/images/room-10.jpeg';
import room11 from '../../assets/images/room-11.jpeg';
import room12 from '../../assets/images/room-12.jpeg';

export default class SingleRoom extends Component{



    gerRoomDetails(roomType){
        let roomDetails = {};
        switch (roomType) {
            case "Standard Room":
                roomDetails.Price = "500/-";
                roomDetails.Size = "300 sqft";
                roomDetails.MaxCapacity = 2;
                roomDetails.freeBreakfastIncluded = "No";
                roomDetails.imageFirst = room1;
                roomDetails.imageSecond = room2;
                roomDetails.imageThird = room3;
                return roomDetails;

                case "Deluxe room":
                roomDetails.Price = "650/-";
                roomDetails.Size = "350 sqft";
                roomDetails.MaxCapacity = 2;
                roomDetails.freeBreakfastIncluded = "No";
                roomDetails.imageFirst = room2;
                roomDetails.imageSecond = room3;
                roomDetails.imageThird = room5;
                return roomDetails;

                case "Joint room":
                roomDetails.Price = "700/-";
                roomDetails.Size = "400 sqft";
                roomDetails.MaxCapacity = 4;
                roomDetails.freeBreakfastIncluded = "Yes";
                roomDetails.imageFirst = room3;
                roomDetails.imageSecond = room4;
                roomDetails.imageThird = room5;
                return roomDetails;

                case "Connecting room":
                roomDetails.Price = "800/-";
                roomDetails.Size = "450 sqft";
                roomDetails.MaxCapacity = 3;
                roomDetails.freeBreakfastIncluded = "Yes";
                roomDetails.imageFirst = room12;
                roomDetails.imageSecond = room11;
                roomDetails.imageThird = room10;
                return roomDetails;

                case "Suite":
                roomDetails.Price = "850/-";
                roomDetails.Size = "500 sqft";
                roomDetails.MaxCapacity = 3;
                roomDetails.freeBreakfastIncluded = "Yes";
                roomDetails.imageFirst = room10;
                roomDetails.imageSecond = room12;
                roomDetails.imageThird = room9;
                return roomDetails;

                case "Apartment-style":
                roomDetails.Price = "1150/-";
                roomDetails.Size = "700 sqft";
                roomDetails.MaxCapacity = 5;
                roomDetails.freeBreakfastIncluded = "No";
                roomDetails.imageFirst = room10;
                roomDetails.imageSecond = room11;
                roomDetails.imageThird = room12;
                return roomDetails;

            default:
                return roomDetails;
        }
    }
    render(){
        console.log("params " + JSON.stringify(this.props));
        var roomDetails = this.gerRoomDetails(this.props.location.query.roomType);
        return(
            <React.Fragment>
                <div className="singleRoomStyle">
                <Banner
                        title={this.props.match.params.slugs}
                        subtitle={this.props.location.query.price}
                        >
                        <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                    </Banner>
                </div>
                <div style={{marginTop:50}}/>

            <div className="single-room-images">
                <img key={1} src={roomDetails.imageFirst} art=" "/>
                <img key={2} src={roomDetails.imageSecond} art=" "/>
                <img key={3} src={roomDetails.imageThird} art=" "/>
            <div>
                <section className="single-room">
                    <div className="single-room-info">
                <article>
                    <h3>Details</h3>
                    <p>{this.props.location.query.description}</p>
                </article>
                <article>
                    <h3>Information</h3>
                    <h6>Size : {roomDetails.Size}</h6>
                    <h6>Price : {roomDetails.Price}</h6>
                    <h6>Max Capacity : {roomDetails.MaxCapacity}</h6>
                    <h6>Free breakfast included : {roomDetails.freeBreakfastIncluded}</h6>
                </article>
                </div>
                </section>
            </div>

            </div>
            </React.Fragment>
        )
    }
}