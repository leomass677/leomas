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
      {/* ── About section ── */}
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-7 md:gap-6 md:px-6 lg:px-10 xl:px-20 w-full">
        {/* Title */}
        <div className="flex-1 flex flex-col xl:pr-4">
          <h3 className="text-4xl md:text-5xl italic font-medium break-words">
            {about.bio.title.split(" ")[0]}
            <span className="text-grey-600">
              {" "}
              {about.bio.title.split(" ")[1]}
            </span>
          </h3>
        </div>

        {/* Content row: bio text left, image right */}
        <div className="flex flex-col-reverse lg:justify-between lg:flex-row gap-6">
          {/* Bio sections — min-w-0 prevents flex child from overflowing */}
          <div className="w-full lg:w-1/2 xl:w-7/12 flex flex-col gap-5 min-w-0">
            {about.bio.sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-1">
                {/* Section heading — allow long highlights to wrap */}
                <h6 className="text-xl break-words">
                  {section.header}{" "}
                  <span className="text-grey-700">{section.highlight}</span>
                </h6>

                <div className="flex flex-col gap-2">
                  {section.content.map((item, idx) => (
                    <p
                      key={idx}
                      lang="en"
                      className="
                        text-sm sm:text-base
                        leading-relaxed
                        text-left
                        break-words
                        hyphens-auto
                        [overflow-wrap:anywhere]
                      "
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image — constrained so it never pushes layout */}
          <div className="w-full lg:w-5/12 flex lg:justify-end h-fit flex-shrink-0">
            <img
              src={images.about_image}
              alt={about.bio.title}
              className="
                object-cover
                w-full
                lg:max-w-[420px]
                h-auto
                
              "
            />
          </div>
        </div>
      </div>

      <BeyondTheScreen />
      <AboutWebsite />
      <WorkExperience />
    </section>
  );
};

export default About;
