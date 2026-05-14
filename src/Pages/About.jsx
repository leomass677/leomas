import React from "react";
import IconMapper from "../Component/IconMapper";
import about from "../data/about";

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

/* ── Main Component ── */

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      <main className="font-dm bg-[#FCFCFD] min-h-screen px-5 sm:px-8 lg:px-0">
        <div className="max-w-[820px] mx-auto py-14 lg:py-20 mt-10">
          {/* ━━━ Hero ━━━ */}
          <header className="text-center mb-14">
            <h1 className="font-playfair text-[40px] sm:text-[48px] font-bold text-[#0F0E0E] tracking-[-0.025em] leading-[1.1] mb-2">
              {about.personal.name}
            </h1>
            <p className="text-[15.5px] text-[#6B6B59] font-medium mb-1">
              {about.personal.title}
            </p>
            <p className="text-[12.5px] text-[#9A9A82] tracking-[0.03em] mb-4">
              {about.personal.location}
            </p>

            {/* Email */}
            <div className="inline-flex items-center gap-1.5 text-[13.5px] text-[#808080] mb-5">
              <IconMapper name={about.personal.emailIcon} size={15} />
              <a
                href={`mailto:${about.personal.email}`}
                className="text-[#6B6B59] font-medium hover:underline"
              >
                {about.personal.email}
              </a>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-2.5">
              {about.personal.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-full border border-[#6B6B59]/20 flex items-center justify-center text-[#6B6B59] hover:bg-[#6B6B59]/[0.07] hover:border-[#6B6B59]/40 transition-all"
                >
                  <IconMapper name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </header>

          {/* ━━━ Bio ━━━ */}
          <section className="mb-12">
            <SectionHeading>{about.bio.title}</SectionHeading>
            <div className="flex flex-col gap-3">
              {about.bio.sections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl px-6 py-5"
                >
                  <h3 className="text-[15.5px] font-semibold text-[#0F0E0E] mb-2.5">
                    {section.header}{" "}
                    <span className="text-[#6B6B59]">{section.highlight}</span>
                  </h3>
                  {section.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-[14.5px] text-[#555] leading-[1.75] mb-2 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ Skills ━━━ */}
          <section className="mb-12">
            <SectionHeading>Skills & Technologies</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Design", skills: about.skills.design },
                { label: "Frontend", skills: about.skills.frontend },
                { label: "Backend", skills: about.skills.backend },
                { label: "Tools", skills: about.skills.tools },
              ].map(({ label, skills }) => (
                <div
                  key={label}
                  className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl px-5 py-4"
                >
                  <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-3">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <Pill key={skill}>{skill}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ Experience ━━━ */}
          <section className="mb-12">
            <SectionHeading>{about.experience.title}</SectionHeading>
            <div className="flex flex-col gap-3">
              {about.experience.items.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white border border-[#6B6B59]/[0.13] border-l-2 border-l-[#6B6B59] rounded-r-2xl px-6 py-5"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1.5">
                    <div>
                      <p className="text-[15px] font-semibold text-[#0F0E0E]">
                        {exp.role}
                      </p>
                      <p className="text-[13px] text-[#808080] mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-[11.5px] text-[#9A9A82] font-medium whitespace-nowrap">
                      {exp.dateDisplay}
                    </span>
                  </div>

                  <ul className="mt-3 flex flex-col gap-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[13.5px] text-[#555] leading-[1.65]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B6B59] flex-shrink-0 mt-[6px]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {exp.technologies.map((t) => (
                      <Pill key={t} variant="tech">
                        {t}
                      </Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ Education ━━━ */}
          <section className="mb-12">
            <SectionHeading>{about.education.title}</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.education.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl px-5 py-4"
                >
                  <p className="text-[14px] font-semibold text-[#0F0E0E] mb-1">
                    {item.degree || item.title}
                  </p>
                  <p className="text-[13px] text-[#808080]">
                    {item.institution || item.issuer}
                    {item.location && ` · ${item.location}`}
                  </p>
                  <p className="text-[12px] text-[#9A9A82] mt-1">
                    {item.dateDisplay || item.date}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] text-[#6B6B59] font-medium no-underline hover:underline mt-2"
                    >
                      View Certificate
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      >
                        <path d="M2 8L8 2M8 2H4M8 2v4" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ Beyond Work ━━━ */}
          <section className="mb-12">
            <SectionHeading>{about.beyondWork.title}</SectionHeading>
            {about.beyondWork.description && (
              <p className="text-[14.5px] text-[#808080] leading-relaxed mb-5">
                {about.beyondWork.description}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {about.beyondWork.activities.map((act) => (
                <div
                  key={act.id}
                  className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl px-5 py-5 text-center"
                >
                  <div className="text-3xl mb-2.5">{act.icon || "🎯"}</div>
                  <p className="text-[13.5px] font-semibold text-[#0F0E0E] mb-1">
                    {act.name}
                  </p>
                  <p className="text-[12px] text-[#808080] leading-[1.55]">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ Website Info ━━━ */}
          <section className="mb-0">
            <SectionHeading>{about.website.title}</SectionHeading>
            <div className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl px-6 py-6">
              <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
                <span className="font-mono text-[11.5px] text-[#6B6B59] bg-[#6B6B59]/[0.08] border border-[#6B6B59]/[0.18] rounded-full px-3 py-1">
                  {about.website.version}
                </span>
                <span className="text-[12px] text-[#9A9A82]">
                  {about.website.built.readableTime}
                </span>
              </div>
              <p className="text-[14px] text-[#555] leading-[1.72] mb-4">
                {about.website.designPhilosophy}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {about.website.technologies.map((tech) => (
                  <Pill key={tech.name} variant="website">
                    {tech.name} · {tech.role}
                  </Pill>
                ))}
              </div>
              <p className="text-[12.5px] text-[#9A9A82] italic">
                {about.website.nextVersion}
              </p>
            </div>
          </section>

          {/* ━━━ Downloads ━━━ */}
          <div className="flex justify-center gap-3 flex-wrap mt-12 pt-8 border-t border-[#6B6B59]/[0.13]">
            <a
              href={about.downloads.cv.url}
              download
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white bg-[#6B6B59] rounded-full px-6 py-[11px] hover:bg-[#5a5a4a] transition-colors no-underline"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.5 1v9M4 7l3.5 3.5L11 7" />
                <path d="M1 13h13" />
              </svg>
              {about.downloads.cv.title} ({about.downloads.cv.fileSize})
            </a>
            <a
              href={about.downloads.resume.url}
              download
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#6B6B59] bg-[#6B6B59]/[0.07] border border-[#6B6B59]/30 rounded-full px-6 py-[11px] hover:bg-[#6B6B59]/[0.13] transition-colors no-underline"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.5 1v9M4 7l3.5 3.5L11 7" />
                <path d="M1 13h13" />
              </svg>
              {about.downloads.resume.title} ({about.downloads.resume.fileSize})
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
