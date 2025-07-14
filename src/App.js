import React from "react";
import ReactDOM from 'react-dom/client';
import blackhawks_logo from './images/blackhawks.png';
import flyers_logo from './images/flyers.png';
import redwings_logo from './images/redwings.png';
import Webinar from "./Webinar";
//import './Webinar.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'Blackhawks Webinar', timestamp: '7/15/2025 8:30 AM', duration: 60, image: blackhawks_logo, link: "https://webinar-blackhawks.com"},
                {name: 'Flyers Webinar', timestamp: '7/16/2025 8:30 AM', duration: 60, image: flyers_logo, link: "https://webinar-flyers.com"},
                {name: 'Red Wings Webinar', timestamp: '7/14/2025 4:30 PM', duration: 600, image: redwings_logo, link: "https://webinar-redwings.com"}
            ]
        };
    }
    render() {
        let items = this.state.data.map((item) => (
            <Webinar
                name={item.name}
                timestamp={item.timestamp}
                duration={item.duration}
                image={item.image}
                link={item.link}
            />
        ));
        return (
            <div className="outer-container">
                {items}
            </div>
        );
    }
}