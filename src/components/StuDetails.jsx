import React from "react";


const StudentBio =()=>{
  const fname = "";
  const lname = "student_name_here";
  const Roll = "rollnumber_here";
  const status = "status_here";
  const imgsrc ="";//"https://picsum.photos/200/300"
  let c = { color: "orange" };
    return(
        <div className = "studentDetails">

          <img
            src= {imgsrc}
            height="150"
            width="120"
            alt="student_image"
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