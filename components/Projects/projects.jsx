import React from "react";

const Projects = ({ text }) => {
  return (
    <div className="relative">
      <p className="segoe text-6xl sm:text-7xl md:text-8xl text-blue-200 capitalize">
        {text}
      </p>
    </div>
  );
};

export default Projects;
