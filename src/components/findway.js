// eslint-disable-next-line
import React from "react";
import CreateMap from './map';

function Findway() {
    return (
        <>
        <div>오시는길</div>
        <CreateMap />
        </>
    );
}

function Address() {
    return (
        <div className="address">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}


export default Findway;

