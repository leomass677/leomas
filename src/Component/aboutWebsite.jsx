import React from "react";
import about from "../data/about";
import { VscDash } from "react-icons/vsc";

const aboutWebsite = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-2 md:px-6 lg:px-10 xl:px-20 w-full">
      <h6>{about.website.title}</h6>
      <div className="flex flex-col gap-1">
        <p className="flex flex-wrap gap-0.5 items-center">
          {about.website.version} <VscDash />{" "}
          <span>{about.website.built.secondsInMaking()}</span>
          <span>{about.website.built.readableTime}</span>
        </p>
        <p>{about.website.designPhilosophy}</p>
      </div>
    </div>
  );
};

export default aboutWebsite;
