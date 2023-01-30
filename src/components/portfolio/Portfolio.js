import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";

const Portfolio = () => {
  const data = [
    {
    img: IMG1,
    name: "Cryptoverse",
    live: "https://cryptoverse-for-mct.netlify.app/",
    gethub: "https://github.com/mrraghav9211/cryptoverse"
  },
  {
   img: IMG2,
   name: "WeatherApp",
   live: "https://check-weather-rkraghav.netlify.app/",
   github: "https://github.com/mrraghav9211/MCT/tree/main/14-march",
  }];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map( val =>( 
          <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={val.img} alt="" />
          </div>
          <h3>{val.name}</h3>
          <div className="portfolio__item-cta">
            <a href={val.github} className="btn" target="_blank">
              Github
            </a>
            <a
              href={val.live}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        ))}
        
      </div>
    </section>
  );
};

export default Portfolio;
