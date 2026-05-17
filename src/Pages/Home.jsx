import React from "react";
import Hero from "../Component/hero";
import WorkDetailCard from "../Component/WorkDetailCard";
import GoalAndOutcome from "../Component/goalAndOutcome";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
        {" "}
        <WorkDetailCard />
        <GoalAndOutcome />
      </div>
    </div>
  );
};

export default Home;
