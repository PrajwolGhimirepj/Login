import React from "react";
import "./Home.css";

const Home = () => {
  const Links = [
    "https://www.tiktok.com/@peaksons/video/7408291275553770785?_r=1&_t=8qgAhTDA9gN",
  ];
  return (
    <>
      <div className="home font-t ">
        <div className="tita-h">
          <h1>Tiktok Links Here !</h1>
        </div>
        <div className="links">
          {Links.map((link, key) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h1 className="h1">Shared tiktok No: {key + 1}</h1>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
