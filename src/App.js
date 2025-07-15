import React from "react";
import blackhawks_logo from './images/blackhawks.png';
import flyers_logo from './images/flyers.png';
import redwings_logo from './images/redwings.png';
import Webinar from "./Webinar";
import './Webinar.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'Blackhawks Webinar', timestamp: '7/16/2025 8:30 AM', duration: 60, image: blackhawks_logo, link: "https://webinar-blackhawks.com"},
                {name: 'Flyers Webinar', timestamp: '7/17/2025 8:30 AM', duration: 60, image: flyers_logo, link: "https://webinar-flyers.com"},
                {name: 'Red Wings Webinar', timestamp: '7/15/2025 4:30 PM', duration: 60, image: redwings_logo, link: "https://webinar-redwings.com"}
            ]
        };
    }
    render() {
        let sortItems = [...this.state.data]
        sortItems.sort((a, b) => {
            return new Date(a.timestamp) > new Date(b.timestamp);
        });
        let found = false;
        const now = new Date()
        let items = sortItems.map((item, index) => {
            if (!found && now < new Date(new Date(item.timestamp).getTime() + item.duration * 60000)) {
                found = true
                return (
                    <Webinar
                        key={index}
                        name={item.name}
                        timestamp={item.timestamp}
                        duration={item.duration}
                        image={item.image}
                        link={item.link}
                    />
                )
            }
        });
        return (
            <div className="outer-container">
                {items}
            </div>
        );
    }
}