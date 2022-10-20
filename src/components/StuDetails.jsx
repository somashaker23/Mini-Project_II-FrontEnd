import React from "react";


const StudentBio =()=>{
  const fname = "R";
  const lname = "Sita";
  const Roll = "XXBBBXXX";
  const status = "IN";
  const imgsrc ="https://picsum.photos/200/300"
  let c = { color: "orange" };
    return(
        <div className = "studentDetails">

          <img
            src= {imgsrc}
            height="150"
            width="120"
            alt="stuimg"
          />
          <div className="textDetails">
            <h1 style={c}>{`${fname} ${lname}`}</h1>
            <h1>{Roll}</h1>
          </div>
          <div className="status">
            <h1>{status}</h1>
          </div>
        </div>
    )
}

export default StudentBio;