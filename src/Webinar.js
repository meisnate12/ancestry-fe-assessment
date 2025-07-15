import React from 'react';
import './Webinar.css';


export default function Webinar({name, timestamp, duration, image, link}) {
    const startTime = new Date(timestamp);
    const endTime = new Date(startTime.getTime() + duration * 60000);
    const now = new Date();
    const disabled = startTime > now || now > endTime;

    let button;
    if (disabled) {
        button = <button className="btn btn-danger" disabled={true}>Webinar Not Open</button>;
    }
    else {
        button = <a href={link}><button className="btn btn-success" >Join Webinar</button></a>;
    }

    return (
        <div className="webinar-container m-3 p-3 rounded-5">
            <h3 className="mb-3 webinar-name">{name}</h3>

            <div className="d-flex justify-content-between">
                <img src={image} className="Webinar-logo" alt="logo" width="150"/>
                <div>
                    <h5>{timestamp}</h5>
                    <h5>{duration} Minutes</h5>
                    {button}
                </div>
            </div>
        </div>
  );
}