import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2024",
    Title: "MIS Excutive",
    duration: "0-3 month",
    details:
      "i have worked as a mis excutive in a capitalVia group in indore. were i have worked on advance Excel .",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20  py-16">
      <h1 className="text-4xl pt-4 font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          Title={item.Title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
