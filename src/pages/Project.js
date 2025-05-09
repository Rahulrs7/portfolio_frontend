import React from "react";
import "./Project.css";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import image from "../assets/images/image.jpg";
import img6 from "../assets/images/img6.png"
import img7 from "../assets/images/img7.png"
import img8 from "../assets/images/img8.png"

const projectsData = [
  {
    title: "Shows Reviewing",
    imgSrc: img5,
    badges: ["Node.js", "Express.js", "React"],
    link: "https://box-office-react.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    imgSrc: img4,
    badges: ["React.js", "vite"],
    link: "https://tictactoe-game-gamma.vercel.app/",
  },
  {
    title: "Campgrounds",
    imgSrc: image,
    badges: ["React", "Nodejs","Mongodb"],
    link: "https://campinfo.onrender.com/campgrounds",
  },
  {
    title: "QuickDel",
    imgSrc: img7,
    badges: ["React", "Nodejs","Mongodb"],
    link: "https://quick-del-topaz.vercel.app/",
  },
  {
    title: "DreamPlanner",
    imgSrc: img6,
    badges: ["React", "Nodejs","Mongodb"],
    link: "https://dreamplanner-frontend.vercel.app/",
  },
  {
    title: "Vmegle",
    imgSrc: img8,
    badges: ["Nextjs", "Nodejs"],
    link: "https://vmegle-frontend.vercel.app/",
  },
  // Additional projects can be added here...
];

const Projects = () => {
  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        In my journey as a web developer, I’ve created several exciting projects...
      </p>
      <div className="row" id="ads">
        {projectsData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">{project.title}</span>
                <img className="pro1" src={project.imgSrc} alt={project.title} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                {project.badges.map((badge, idx) => (
                  <span className="card-detail-badge" key={idx}>{badge}</span>
                ))}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">{project.title}</h5>
                </div>
                <a
                  className="ad-btn"
                  href={project.link}
                  aria-label={`View ${project.title} Project`}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
