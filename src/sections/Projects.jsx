const projects = [
  { 
    title: 'FloraScan', 
    description: 'A mobile application for an image-based classificaition of edible flowers in CBSUA', 
    image: '/florascanapp.png', 
    link: 'https://github.com/deiv-k/florascan',
    distLink: 'https://drive.google.com/drive/folders/1ap5K_JqOgPiU_7P9Uwo4xdewNvrchnj0?usp=sharing'
  },
    { 
    title: 'Aretex JumpCloud Report Generator', 
    description: 'A desktop application transforming raw JumpCloud log data into visual reports for better decision-making', 
    image: '/aretex.png', 
    link: 'https://github.com/deiv-k/aretexjumpcloudgenerator',
    distLink: 'https://drive.google.com/drive/folders/1OXecdkNWyPiwo0BNKcaH1jqWiUBJ8ySu?usp=sharing'
  },
    { 
    title: 'Mambulo Viejo Healthcare Management System', 
    description: 'A comprehensive web system for managing healthcare services in Mambulo Viejo', 
    image: '/pms.png', 
    link: 'https://github.com/deiv-k/mambuloviejohealthcaresystem',
    distLink: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center text-primary-600 mb-10">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-black-600 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-primary-600 hover:text-primary-800 font-medium flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
              Github Link
            </a> <br />
            <a href={project.distLink} className="text-primary-600 hover:text-primary-800 font-medium">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;