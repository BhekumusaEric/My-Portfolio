import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SkillProgress from '../components/SkillProgress';
import TechStackModel from '../components/TechStackModel';
import AIChatbot from '../components/AIChatbot';

export default function Skills() {
  // Skills categories
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, color: '#3776AB' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'HTML', level: 90, color: '#E34F26' },
        { name: 'CSS', level: 85, color: '#1572B6' },
        { name: 'SQL', level: 80, color: '#4479A1' },
      ]
    },
    {
      name: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85, color: '#FF6F00' },
        { name: 'Scikit-Learn', level: 90, color: '#F7931E' },
        { name: 'Natural Language Processing', level: 80, color: '#8BC34A' },
        { name: 'Computer Vision', level: 75, color: '#9C27B0' },
        { name: 'Data Analysis', level: 85, color: '#03A9F4' },
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'React', level: 80, color: '#61DAFB' },
        { name: 'Django', level: 85, color: '#092E20' },
        { name: 'Flask', level: 90, color: '#000000' },
        { name: 'RESTful APIs', level: 85, color: '#FF5722' },
        { name: 'Responsive Design', level: 80, color: '#9C27B0' },
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90, color: '#F05032' },
        { name: 'Azure', level: 75, color: '#0078D4' },
        { name: 'Docker', level: 70, color: '#2496ED' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Linux', level: 80, color: '#FCC624' },
      ]
    }
  ];
  
  // Soft skills
  const softSkills = [
    { name: 'Problem Solving', description: 'Analytical approach to breaking down complex problems into manageable components.' },
    { name: 'Communication', description: 'Clear and effective communication of technical concepts to both technical and non-technical audiences.' },
    { name: 'Teamwork', description: 'Collaborative mindset with experience working in diverse teams on various projects.' },
    { name: 'Adaptability', description: 'Quick to learn new technologies and adapt to changing project requirements.' },
    { name: 'Time Management', description: 'Efficient prioritization of tasks to meet deadlines and deliver high-quality work.' },
    { name: 'Critical Thinking', description: 'Ability to evaluate information objectively and make sound decisions.' },
  ];
  
  return (
    <Layout title="Skills | Bhekumusa Eric Ntshwenya">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* 3D Tech Stack Visualization */}
      <section className="py-10 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Tech Stack</h2>
              <p className="text-gray-300 mb-4">
                My technology stack is diverse and constantly evolving. I focus on modern technologies that enable me to build efficient, scalable, and user-friendly applications.
              </p>
              <p className="text-gray-300">
                With a strong foundation in Python and JavaScript, I specialize in AI/ML development while maintaining proficiency in web and mobile application development.
              </p>
            </motion.div>
            <div className="md:w-1/2">
              <TechStackModel className="h-[500px]" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A detailed breakdown of my technical skills across different domains.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">{category.name}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillProgress 
                    key={skillIndex} 
                    skill={skill.name} 
                    level={skill.level} 
                    color={skill.color} 
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Soft Skills */}
      <section className="py-20 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Soft Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Beyond technical expertise, these professional skills enhance my effectiveness as a developer.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{skill.name}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning & Growth */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm committed to continuous growth and staying current with emerging technologies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-effect p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Currently Learning</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Advanced Deep Learning Techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cloud Architecture on Azure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Blockchain Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Next.js and Modern React Patterns</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-effect p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Future Interests</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Quantum Computing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Augmented Reality Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Edge Computing and IoT</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Advanced Natural Language Processing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </Layout>
  );
}
