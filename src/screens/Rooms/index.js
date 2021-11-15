import { Component } from "react";
import Banner from "../../components/Banner";
import Cover from "../../components/Cover";
import IndividualRoom from "../../components/IndividualRooms";

const roomDetails = [
    {
        id: 1,
        price: '450',
        imageName: 'room-1',
        roomType: 'Standard room',
        detail: "The Standard Room comprises of 1 Double Bed or 2 Twin Beds, 2 Bedside Tables, a Desk & Chair. The room is furnished with wall to wall carpeting, trendy furnishings and a balcony."
            + "Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving and make up mirror as well as all the amenities you could possible need during your stay."
            + "A Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are provided on arrival. Electric current: 220 Volts. Smoking rooms & inter-connecting rooms are also available."
    },
    {
        id: 2,
        price: '500',
        imageName: 'room-2',
        roomType: 'Deluxe room',
        detail: "Deluxe rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub."
    },
    {
        id: 3,
        price: '790',
        imageName: 'room-3',
        roomType: 'Joint room',
        detail: 'An adjoining room is two guest rooms that are located next to each other and are connected by a locked door between them. Adjoining rooms may be booked together by request for one traveling party, or they may be booked separately by two different parties.'
    },
    {
        id: 4,
        price: '820',
        imageName: 'room-4',
        roomType: 'Connecting room',
        detail: 'A connecting room is two guest rooms that are located next to each other and are connected by a locked door between them. Adjoining rooms may be booked together by request for one traveling party, or they may be booked separately by two different parties. These are useful if you are traveling with older children or a larger group and need more space.'
    },
    {
        id: 5,
        price: '1000',
        imageName: 'room-5',
        roomType: 'Suite',
        detail: 'Fit for royalty, every inch of this vast suite with 334 square metres interiors, has been designed with your utmost comfort in mind. Natural light flows through the master bedroom and adjoining twin room, the private dressing room, comfortable living and dining areas, private study and pantry. And for your relaxation, there is a heated outdoor pool and a terrace with views of the Gurgaon skyline. Eclectic modern artworks abound adding a touch of class.'
    },
    {
        id: 6,
        price: '1150',
        imageName: 'room-6',
        roomType: 'Apartment-style',
        detail: 'An apartment hotel complex usually offers a complete fully fitted apartment. These complexes are usually custom built, and similar to a hotel complex containing a varied amount of apartments. The length of stay in these apartment hotels is varied with anywhere from a few days to months or even years. The people who stay in apartment hotels use them as long-term accommodation; therefore, the hotels are often fitted with most things the average home would require.'
    }
]

const showIndividualRooms = roomDetails.map((item) => {
    console.log("Description in home" + item.detail)
    return <IndividualRoom details={item.detail} price={item.price} name={item.imageName} roomType={item.roomType} key={item.id} />
})

export default class Rooms extends Component {

    render() {
        return (
            <div>
                <div className="singleRoomStyle">
                    <Banner
                        title="Featured Rooms"
                        subtitle={"Type of rooms available"}
                    >
                    </Banner>
                </div>
                <div style={{ marginTop: 100 }} />
                <div className="featured-rooms-center">
                    {showIndividualRooms}
                </div>
                <div style={{ marginTop: 100 }} />

            </div>
        )
    }
}