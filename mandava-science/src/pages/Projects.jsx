import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Free Comprehensive Health Checkup Camps",
    description: "Conducted 11 lakh free eye screenings across government schools, agencies (BMTC, BWSSB, BESCOM, etc.), corporate corridors, and slums. Provided free spectacles, surgeries, and subsidized medical services to promote eye health and reduce visual impairment.",
    image: "https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=1200",
    report: "./report/Report.pdf"
  },
  {
    title: "Free Mass Transportation Policy",
    description: "Collaborated with the Government of Delhi to develop a free mass transport policy, reducing traffic congestion, pollution, and enhancing social inclusivity through research, advocacy, and policy recommendations.",
    image: "https://images.pexels.com/photos/29639330/pexels-photo-29639330/free-photo-of-bustling-new-delhi-street-in-morning-light.jpeg?auto=compress&cs=tinysrgb&w=1200",
    report: "./report/Report.pdf" 
  },
  {
    title: "Technical Education for Girls",
    description: "Sponsored girls in technical education to bridge the gender gap in STEM, empowering women with skills to contribute to science and technology, fostering equality and innovation.",
    image: "https://www.shutterstock.com/image-photo/group-rural-school-girls-student-260nw-2436140121.jpg",
    report: "./report/Report.pdf"
  },
  {
    title: "Incubation Center at CHRIST University",
    description: "Launched India’s first incubation center in the Humanities & Social Sciences Department at Christ University, Bangalore, fostering innovation and entrepreneurship with Delhi Deputy CM Manish Sisodia.",
    image: "https://ruas-incubator.com/wp-content/uploads/2019/01/slide3.jpg",
    report: "./report/Report.pdf"
  },
  {
    title: "Entrepreneurship Mindset Curriculum",
    description: "Contributed to the Entrepreneurship Mindset Curriculum in Delhi schools, equipping students with skills to drive economic self-respect and innovation.",
    image: "https://media.istockphoto.com/id/625705672/photo/human-resources-concept-on-blackboard.jpg?s=612x612&w=0&k=20&c=ztRzwaSyCDxu55bgZ7azgbU0kaDTU46VGVXtmc2_E58=",
    report: "./report/Report.pdf" 
  },
  {
    title: "State Sovereign Wealth Fund Advocacy",
    description: "Advocated for Tamil Nadu to create a state-level sovereign wealth fund to support startups, renewable energy, and economic resilience, promoting financial empowerment.",
    image: "https://i0.wp.com/gokulamseekias.com/wp-content/uploads/2023/09/02-9.jpg?fit=870%2C489&ssl=1", 
    report: "./report/Report.pdf"
  },
  {
    title: "Distribution of Constitution Copies",
    description: "Distributed 1 million copies of the Constitution of India to households, educating citizens on their rights and duties to foster national pride and civic participation.",
    image: "https://media.istockphoto.com/id/1296965095/photo/selective-focus-on-flag-indian-constitution-or-bharatiya-savidhana-preamble-old-scattered.jpg?s=612x612&w=0&k=20&c=tPCDkcPGUDE9VHwWj_1paZvN-SHHinLiyo_1BYISJ5Q=",
    report:"./report/Report.pdf" 
  },
  {
    title: "NewGen Cities Initiative",
    description: "Organized an event at Christ University to promote tech-driven urban development, featuring speakers like Dr. Ezhilan Naganathan, advocating for inclusive growth and sustainable infrastructure.",
    image: "https://img.freepik.com/free-vector/india-skyline-with-panorama-sky-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-collage-from-largest-cities-india_596401-484.jpg",
    report: "./report/Report.pdf"
  },
  {
    title: "Silambam Preservation",
    description: "Promoted Silambam, an ancient Indian martial art, to preserve cultural heritage, enhance physical and mental well-being, and empower individuals, especially women, with self-defense skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3pRUBMRNhrD_EscnP_S3DOi7zUzopXhJWQ&s", 
    report: "./report/Report.pdf"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Our Impactful Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.report} target="_blank" rel="noopener noreferrer" className="report-btn">View Report</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
