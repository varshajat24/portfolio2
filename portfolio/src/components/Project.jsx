import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        I recently developed a project using React and JavaScript to create a
        dynamic and responsive web application. Leveraging React's
        component-based architecture, I structured the application to
        efficiently manage state and render interactive user interfaces.
        JavaScript was instrumental in handling logic and data manipulation,
        ensuring seamless functionality across different components. By
        integrating modern web development practices like ES6 syntax and JSX,
        the project not only delivered a smooth user experience but also
        showcased my proficiency in front-end development with these powerful
        technologies.My role encompassed designing the user interface, coding
        the frontend features, and integrating the Redux store for state
        management. This project showcases my ability to create dynamic and
        user-friendly web applications with modern technologies.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem title="ToDo-App" detailes='I developed a dynamic Todo app using React and Redux to demonstrate effective state management and user interface design. The app features the ability to add, edit, and delete tasks, with real-time updates and persistent state across session '
           />
        <ProjectItem title="Curruncy-Converter" detailes='I built a Currency Converter web application using JavaScript, HTML, and CSS to provide real-time currency exchange rates and conversion functionalities. The app allows users to easily convert amounts between different currencies by fetching live exchange rates from an API.' 
        />
      </div>
    </div>
  );
};

export default Project;
