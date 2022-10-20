import React from "react";
import Log from "./log";
const logArea = ()=>{

    return(
        <div className = "logDetails">
            
           
            <div className = "logHeading">
                <div><span><b>Date</b></span></div>
                <div><span><b>IN Time</b></span></div>
                <div><span><b>OUT Time</b></span></div>
            </div>
            <Log></Log>
            <Log></Log>
            <Log></Log>
            <Log></Log>
            

        </div>
    )
}

export default logArea;