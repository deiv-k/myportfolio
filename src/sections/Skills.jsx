import { useState, useEffect } from "react";

const skills = [
  {
    name: "AI/ML Development",
    image: "/ai.png",
    proficiency: 75,
  },
  {
    name: "Mobile App Development",
    image: "/mobile-development.png",
    proficiency: 75,
  },
  {
    name: "Web Development",
    image: "/web-programming.png",
    proficiency: 50,
  },
  {
    name: "Data Analysis",
    image: "/exploration.png",
    proficiency: 75,
  },
];

const backEnd = [
  { backTech: "Python", image: "/python.png" },
  { backTech: "JavaScript", image: "/js.png" },
  { backTech: "NodeJS", image: "/node-js.png" },
  { backTech: "Java", image: "/java.png" },
  { backTech: "PHP", image: "/php.png" },
];

const frontEnd = [
  { frontTech: "React", image: "/react.png" },
  { frontTech: "HTML", image: "/html.png" },
  { frontTech: "CSS", image: "/css-3.png" },
  { frontTech: "Bootstrap", image: "/bootstrap.png" },
  { frontTech: "Tailwind", image: "/tailwind.png" },
  { frontTech: "XML (Java)", image: "/xml.png" },
  { frontTech: "PyQt (Python)", image: "/qt.png" },
];

const mlFramework = [
    {mlTech: "TensorFlow Lite", image: "/TensorFlowLogo.svg"},
    {mlTech: "PyTorch", image: "/pytorch.svg"}
];

const Skill = () => {
  const [current, setCurrent] = useState(0);

  const prevSkill = () => {
    setCurrent((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const nextSkill = () => {
    setCurrent((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold text-center text-primary-600 mb-10">
        My Skills
      </h2>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevSkill}
          className="bg-primary-600 text-white px-4 py-2 rounded-full shadow"
          aria-label="Previous Skill"
        >
          &#8592;
        </button>
        <div className="overflow-hidden w-72">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${skills.length * 18}rem`,
              transform: `translateX(-${current * 18}rem)`,
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center w-72 shrink-0 z-10"
                style={{ position: "relative" }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-2xl font-bold text-black-600">
                  {skill.name}
                </h3>
                <div className="w-full mt-4">
                  <div className="h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 bg-primary-600 rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {skill.proficiency}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSkill}
          className="bg-primary-600 text-white px-4 py-2 rounded-full shadow"
          aria-label="Next Skill"
        >
          &#8594;
        </button>
      </div>

      <div className="techstack">
        <h3 className="text-2xl font-bold text-center text-pink-600 mb-5 mt-10">Tech Stack</h3>
        <h4 className="text-medium font-bold text-center text-gray-600 mb-2"> Backend </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {backEnd.map((back, index) => (
            <div 
              key={index}
              className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-center flex items-center justify-center gap-2"
            >
              <img src={back.image} alt={back.backTech} className="w-6 h-6" />
              <span>{back.backTech}</span>
            </div>
          ))}
        </div>
        <br />
        <h4 className="text-medium font-bold text-center text-gray-600 mb-2"> Frontend </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {frontEnd.map((front, index) => (
            <div 
              key={index}
              className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-center flex items-center justify-center gap-2"
            >
              <img src={front.image} alt={front.frontTech} className="w-6 h-6" />
              <span>{front.frontTech}</span>
            </div>
          ))}
        </div>
        <br />
        <h4 className="text-medium font-bold text-center text-gray-600 mb-2">Machine Learning Framework</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mlFramework.map((ml, index) => (
            <div 
              key={index}
              className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-center flex items-center justify-center gap-2"
            >
              <img src={ml.image} alt={ml.mlTech} className="w-6 h-6" />
              <span>{ml.mlTech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;