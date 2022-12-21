import React from "react";
import  StuBio from "./StuDetails.jsx";
import GetBio from "./GetStudBio.jsx"
import LogArea from "./LogsArea.jsx"
const Footer = ()=>
{
    return ( 
    <footer>
        <p>
            Copyright © {new Date().getFullYear()}
        </p>
    </footer>
        
    )
}
const Headr=()=>{
    return(
    <header>
        <h1>Dashboard</h1>
    </header>)
}

function App(){
    return(
        <div>
            <Headr></Headr>
            <div style={{display:"flex"}}>
                <GetBio/>
                <StuBio/>
                
            </div>
            <LogArea/>
            
            <Footer/>
        </div>
    )
}


export default App