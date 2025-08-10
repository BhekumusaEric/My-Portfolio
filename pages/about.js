import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SkillProgress from '../components/SkillProgress';
import AIChatbot from '../components/AIChatbot';

export default function About() {
  // Skills data with proficiency levels
  const technicalSkills = [
    { name: 'Python', level: 95, color: '#3776AB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'Machine Learning', level: 90, color: '#FF6F00' },
    { name: 'React', level: 80, color: '#61DAFB' },
    { name: 'Django', level: 85, color: '#092E20' },
    { name: 'Flask', level: 90, color: '#000000' },
    { name: 'Azure', level: 75, color: '#0078D4' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
  ];
  
  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 85 },
    { name: 'Adaptability', level: 90 },
    { name: 'Time Management', level: 85 },
  ];
  
  // Education and experience data
  const education = [
    {
      institution: 'WeThinkCode_',
      degree: 'Software Engineering',
      period: '2023 - Present',
      description: 'Intensive software engineering program focusing on practical coding skills and problem-solving.'
    },
    {
      institution: 'Central Johannesburg TVET College',
      degree: 'Information Technology and Computer Science',
      period: 'Expected 2025',
      description: 'Focused on IT fundamentals and computer science theory.'
    },
    {
      institution: 'Believers Care Society Academy',
      degree: 'Office Administration',
      period: '2020',
      description: 'Focused on administrative skills and office management.'
    },
    {
      institution: 'Self-Learning & Online Courses',
      degree: 'SAP Umuzi Educate To Employ - Nemisa Program - IBM - Cisco Netacad',
      period: '2022 - Present',
      description: 'Online courses and self-learning focused on expanding technical and soft skills.'
    }
  ];
  
  const experience = [
    {
      company: 'Freelance Developer',
      position: 'AI & Web Developer',
      period: '2022 - Present',
      description: 'Developing custom AI solutions and web applications for clients. Projects include predictive models, data analysis tools, and responsive websites.'
    },
    {
      company: 'Sappas Hackathon',
      position: 'Winner',
      period: '2024',
      description: 'Won the prestigious Sappas hackathon competition, demonstrating exceptional problem-solving skills and innovative thinking in a competitive environment.'
    },
    {
      company: 'Central Johannesburg TVET College',
      position: 'Software Developer & Technical Instructor',
      period: '2023 - Present',
      description: 'Developed and delivered technical projects and problems for software development. Created educational software solutions. Mentored students in programming concepts, problem-solving methodologies, and technical skills. Implemented technology-enhanced learning solutions to improve educational outcomes.'
    },
    {
      company: 'WeThinkCode_',
      position: 'Student',
      period: '2023 - Present',
      description: 'Studying at prestigious WeThinkCode_ academy, focusing on practical coding skills and industry readiness.'
    },
    {
      company: 'FNB App Academy',
      position: 'Student',
      period: '2025',
      description: 'Studying at FNB App Academy, focusing on fullstack web development.'
    },
  ];
  
  return (
    <Layout title="About Me | Bhekumusa Eric Ntshwenya">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know more about me, my background, and what drives me as a developer.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">My Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Bhekumusa Eric Ntshwenya, a passionate software developer with a focus on AI and machine learning technologies. My journey in tech began with a curiosity about how software could solve real-world problems and make people's lives better.
                </p>
                <p>
                  Currently studying at WeThinkCode_, I'm constantly expanding my knowledge and skills in software development. I have a particular interest in artificial intelligence and its applications across different industries.
                </p>
                <p>
                  What drives me is the opportunity to create innovative solutions that have a meaningful impact. Whether it's developing an AI-powered safety app or building a machine learning model to predict loan approvals, I'm always looking for ways to leverage technology for good.
                </p>
                <p>
                  When I'm not coding, I enjoy learning about new technologies and sharing my knowledge with others in the tech community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Quick Facts</h2>
              <div className="space-y-4">
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Location</h3>
                  <p className="text-gray-300">Johannesburg, South Africa</p>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Focus Areas</h3>
                  <p className="text-gray-300">Systems Development, Web Development, Mobile Apps</p>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Languages</h3>
                  <p className="text-gray-300">English (Fluent), Zulu (Native)</p>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Interests</h3>
                  <p className="text-gray-300">AI Research, Open Source, Continuous Learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical and soft skills.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Technical Skills</h3>
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillProgress skill={skill.name} level={skill.level} color={skill.color} />
                </motion.div>
              ))}
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillProgress skill={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education & Experience */}
      <section className="py-20 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Education</h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass-effect p-6 rounded-lg"
                  >
                    <h4 className="text-xl font-semibold text-primary">{item.institution}</h4>
                    <p className="text-gray-300 font-medium">{item.degree}</p>
                    <p className="text-gray-400 text-sm mb-2">{item.period}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Experience</h3>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass-effect p-6 rounded-lg"
                  >
                    <h4 className="text-xl font-semibold text-primary">{item.company}</h4>
                    <p className="text-gray-300 font-medium">{item.position}</p>
                    <p className="text-gray-400 text-sm mb-2">{item.period}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </Layout>
  );
}
