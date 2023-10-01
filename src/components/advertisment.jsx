import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';

export const Advertisment = () => {
    return <div className="w-100 d-flex justify-content-center position-sticky" style={{zIndex: +4}}>
    <div className="width">
        <div className="w-100 background2">
            <h1 className="h2">
                FREE GUITAR LESSONS!
            </h1>
            <h1 className="h3">
                Purchase any guitar over $499.99 and recieve<br/>
                a one-hour guitar lesson free. 
            </h1>
            <button className="btn-1">
                LEARN MORE
            </button>
        </div>
    </div>
</div>

};