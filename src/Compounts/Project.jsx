import React from "react";
import project from "./data/projects.json";
const Project = () => {
  return (
    <>
      <div className="container porjects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-contant-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                   
                  }}
                   data-aos="flip-right"
      data-aos-duration="1000"
                >
                  <div className="img justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "250px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />

                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text" style={{ fontWeight: "bolder" }}>
                      {data.description}
                    </p>
                    <a href={data.demo} className="btn btn-primary mx-4">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning mx-4">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
