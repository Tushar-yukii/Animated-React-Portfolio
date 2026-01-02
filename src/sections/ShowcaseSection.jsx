const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper overflow-hidden">
            <div className="image-wrapper">
              <img src="/images/project.png.jpeg" alt="Renex" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Movie Application Made Simple with a Powerful,
                User-Friendly App called Renex.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="image-wrapper bg-[#ffefdb]">
              <img src="/images/project2.2.png" alt="NewsApp Application" />
            </div>
            <h2>News Application</h2>
          </div>
          {/* error */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="image-wrapper bg-[#ffe7eb]">
              <img src="/images/project3.png" alt="" />
            </div>
            <h2>Blog App</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
