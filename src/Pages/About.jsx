import React from "react";
import IconMapper from "../Component/IconMapper";
import about from "../data/about";
import images from "../data/images";
import BeyondTheScreen from "../Component/beyondTheScreen";
import AboutWebsite from "../Component/aboutWebsite";
import WorkExperience from "../Component/workExperience";

/* ── Tiny reusable atoms ── */

const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-5">
    <h2 className="font-playfair text-[22px] font-bold text-[#0F0E0E] tracking-tight whitespace-nowrap">
      {children}
    </h2>
    <div className="flex-1 h-px bg-[#6B6B59]/[0.15]" />
  </div>
);

const Pill = ({ children, variant = "default" }) => {
  const styles = {
    default: "text-[#6B6B59] bg-[#6B6B59]/[0.07] border-[#6B6B59]/[0.18]",
    tech: "text-[#6B6B59] bg-[#6B6B59]/[0.07] border-[#6B6B59]/[0.18]",
    website: "text-[#6B6B59] bg-[#6B6B59]/[0.07] border-[#6B6B59]/[0.18]",
  };
  return (
    <span
      className={`inline-block text-[12px] font-medium border rounded-full px-[11px] py-[3px] ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

const About = () => {
  return (
    <section className="flex flex-col gap-5 justify-center mt-10">
      {/* about us */}
      <div className="flex flex-col-reverse lg:flex-row max-w-[1200px] mx-auto px-4 gap-5 md:gap-6 md:px-6 lg:px-10 xl:px-20 w-full">
        {/* text section */}
        <div className="flex-1 flex flex-col gap-5 xl:pr-4">
          <h3 className="text-4xl md:text-5xl italic font-medium">
            {about.bio.title.split(" ")[0]}
            <span className="text-grey-600">
              {" "}
              {about.bio.title.split(" ")[1]}
            </span>
          </h3>
          <div className="flex flex-col gap-5">
            {about.bio.sections.map((section) => (
              <div id={section.id} className="flex flex-col gap-1">
                <h6 className="text-xl">
                  {section.header}{" "}
                  <span className="text-grey-700">{section.highlight}</span>
                </h6>
                <div className="flex flex-col gap-2">
                  {section.content.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* imag section */}
        <div className="flex-1">
          <img src={images.about_image} alt={about.bio.title} />
        </div>
      </div>
      <BeyondTheScreen />
      <AboutWebsite />
      <WorkExperience />
    </section>
  );
};

export default About;
