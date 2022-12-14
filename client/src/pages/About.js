import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <nav>
          <ul className="flexnav">
            <div>
              {" "}
              <Link
                to="/"
                style={{
                  color: "#29E7CD",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  fontWeight: "300",
                  textDecoration: "none",
                  fontSize: "16px",
                  padding: "18px 10px",
                  border: "#FFFFFF",
                  textTransform: "uppercase",
                  fontFamily: "Manrope",
                }}
              >
                Home
              </Link>{" "}
            </div>
          </ul>
        </nav> */}

<div className="mainLogo">VIBE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        <a style={{
          width: "500px",
          color: "#29E7CD",
          backgroundColor:"#fff",
          textAlign: "center",
          fontWeight: "300",
          textDecoration: "none",
          fontSize: '16px',
          padding: "10px 8px",
          marginTop: "20px",
          border: "#FFFFFF",
          textTransform: "uppercase",
          fontFamily: "Manrope",
          borderRadius: "5px"
        }} href='/'>Home</a>
        </div>
        <div
          class="aboutMe"
          style={{
            opacity: "0.9",
            transition: "0.3s",
            color: "#ffffff",
            backgroundColor: "transparent",
            fontFamily: "Titan One",
            fontSize: "32px",
            letterSpacing: "1",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Storm and Tyler did a project
          <div
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              border: "2px white solid",
              width: "500px",
              fontSize: "18px",
              fontFamily: "Manrope",
              padding: "15px",
            }}
          >
            This is the final project for Code301. This project focused on using
            a MERN stack to complete an application.
          </div>
        </div>
      </div>
    );
  }
}
