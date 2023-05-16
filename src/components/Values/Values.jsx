import React from "react";
import "./values.css";

const Values = () => {
  return (
    <div className="values-card">

      <div className="values-points">
        <h2>Core Values</h2>
      </div>

      <div className="values-content-envelope">
        <span className="value-content">
          <b>Performance</b> As a frontend engineer i understands that web
          application performance is critical to the user experience,
          optimizing the code and assets to ensure that the application loads
          quickly and runs smoothly as very essential to me.
        </span>
        <span className="value-content">
          <b>Accessibility</b> Understanding the importance of accessibility
          in web applications simply means ensure that the application is
          accessible to all users, making it responsive on all devices, by
          using appropriate coding practices and adhering to accessibility
          standards.
        </span>

        <span className="value-content">
          <b>Collaboration</b> As an industry best practice frontend engineer
          always require of me working closely with designers, developers, and
          other stakeholders to ensure that the web application meets the
          needs of all parties involved. They communicate effectively and are
          always willing to collaborate and share their knowledge.
        </span>


      </div>

    </div>
  );
};

export default Values;
