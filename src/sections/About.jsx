import { useState } from "react";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <img 
            src="/kevin_photo.jpg" 
            alt="Profile"
            className="w-45 h-45 object-cover rounded-full mx-auto shadow-lg"
          />
            <h1 className="text-4xl font-bold text-primary-600 mt-6 mb-4 text-center md:text-left">Kevin Bobis</h1>
            <p className="text-medium font-bold text-black mt-6 mb-4 text-center md:text-left">Software/AI Development | Data Analytics | Cybersecurity</p>
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-primary-600 mb-6">About Me</h2>
          <p className="mb-4">
            I am an IT fresh graduate with hands-on experience in data analysis, cybersecurity, and software development. I am a full stack developer but more focused on the backend. I have a strong foundation in Python, JavaScript, and various web technologies, which I have applied in both academic and professional settings.

            <br /><br />
            I have hands-on experience in software development, having created a mobile application as part of my capstone project. I was responsible for both the frontend and backend development, as well as conducting testing, user acceptance testing (UAT), and deployment.

            In addition, I have experience integrating machine learning, deep learning, and artificial intelligence into practical, real-world solutions.

            <br /><br />
            During my internship, I gained hands-on experience in data analysis by transforming raw log data into meaningful visual insights. I used Python along with libraries such as Pandas, Matplotlib, Seaborn, and others to clean, analyze, and visualize the data effectively.

            <br /><br />
            I am passionate about leveraging technology to solve complex problems, automate processes, and contribute to innovative projects. I am eager to apply my skills and continue learning as I grow my career in the fields of data science, cybersecurity, and intelligent systems development.
          </p>
          <button
            onClick={() => setShowResume(!showResume)}
            className="bg-primary-600 text-white px-4 py-2 rounded-md mt-4 inline-block"
          >
            {showResume ? "Hide" : "Show Resume/CV"}
          </button>
          {showResume && (
            <div className="mt-6">
              <iframe
                src="/Kevin Bobis CV.pdf"
                title="Resume"
                width="100%"
                height="600px"
                className="border rounded"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;