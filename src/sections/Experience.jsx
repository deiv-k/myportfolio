const experiences = [
  {
    id: 1,
    jobTitle: 'Software Developer/Data Analyst Intern',
    company: 'Aretex Philippines Outsource Inc.',
    duration: 'Feb 2025 - May 2025',
    location: 'Makati City, Philippines',
    description: 'Developed a JumpCloud report generator that converts raw log data into meaningful visual reports, supporting data-driven decision-making. Utilized Python and its robust libraries for data processing and visualization. Integrated machine learning models to analyze user behavior patterns and enhance system efficiency. Additionally, I was part of the Digital Workspace team, where I was trained and assigned to various cybersecurity tasks, including vulnerability assessments, penetration testing, and incident response.',
    images: ['/internaretex.png','/internaretex2.png', '/internaretex3.png', '/internaretex4.png'],
  },
  {
    id: 2,
    jobTitle: 'Mobile App Developer',
    company: 'Office of the Vice President of Research and Innovation, CBSUA',
    duration: 'September 2024 - Dec 2024',
    location: 'Pili, Camarines Sur, Philippines',
    description: 'Developed a mobile application for image-based classification of edible flowers at CBSUA. The app utilizes machine learning and deep learning technologies, including Convolutional Neural Networks (CNN), TensorFlow Lite, and the EfficientNet B2 architecture, to accurately identify various edible flower species. It aims to enhance users’ knowledge and appreciation of local flora by providing informative insights about each identified flower. The project was part of my capstone project, showcasing my ability to integrate advanced technologies into practical applications.',
    images: ['/florascan1.jpg', '/florascan2.jpg',],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-bold text-center text-primary-600 mb-10">
        Professional Experience
      </h2>
      
      <div className="container px-6 mx-auto space-y-10">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black">{experience.jobTitle}</h3>
            <p className="text-primary-600 font-medium">{experience.company}</p>
            <p className="text-gray-600">{experience.duration} • {experience.location}</p>
            <p className="mt-4 text-gray-700">{experience.description}</p>
            {experience.images && (
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {experience.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Proof ${idx + 1} for ${experience.jobTitle}`}
                    className="w-full max-w-xs rounded shadow"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;