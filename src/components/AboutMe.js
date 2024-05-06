import React from "react";
function AboutMe() {
  return (
    <div className="container-fluid text-center mt-5 bg-light">
      <div className="col-12 py-5">
        <h2 className="font-weight-light">
          <span className="text-info">About</span> me
        </h2>
        <div className="lead">
          I can develope the front and back end of an app
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 p-3">
          <h2 className="text-black">What I can do?</h2>
          <p className="justify">
            I specialize in full-stack development, which means I'm proficient
            in both frontend and backend technologies. From crafting interactive
            user interfaces to designing robust server-side architectures, I can
            handle every aspect of web development. Whether it's creating
            dynamic frontend experiences or implementing scalable backend
            solutions, I've got the skills to bring your projects to life.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h2 className="text-black">What am I doing currently?</h2>
          <p className="justify">
            I am presently pursuing my master's degree at Pace University,
            immersing myself in a dynamic academic environment. Through rigorous
            coursework and hands-on experience, I am honing my skills and
            expanding my knowledge to excel in my chosen field of study.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 p-3">
          <h2 className="text-black">What do I believe in?</h2>
          <p className="justify">
            I firmly believe that the future of technology lies in web
            development, particularly in the realm of JavaScript. With its
            versatility and widespread adoption, JavaScript continues to drive
            innovation, shaping the digital landscape and paving the way for
            groundbreaking advancements in the years to come.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h2 className="text-black">How I can help you?</h2>
          <p className="justify">
            I possess the expertise to guide beginners in grasping the
            fundamentals of web development. From HTML to CSS and JavaScript and
            more, I can provide comprehensive support, laying a solid foundation
            for aspiring developers to embark on their journey in web
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
