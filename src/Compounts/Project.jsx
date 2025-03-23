import React from "react";
import project from "./data/projects.json";
const Project = () => {
  return (
    <>
      <div className="container porjects my-3">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-contant-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3"
              >
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem" }}
                >
                  <img src={data.imageSrc} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text ">{data.description}</p>
                    <a href="#" className="btn btn-primary">
                      Show More
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
