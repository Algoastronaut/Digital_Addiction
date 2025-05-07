import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaChartBar, FaCogs, FaLightbulb, FaBalanceScale, FaListAlt, FaPuzzlePiece } from 'react-icons/fa';

const pages = [
  {
    title: 'Causal Loop Diagram',
    description: 'Visualize the interconnected variables that influence digital addiction',
    path: '/cld',
    color: 'bg-blue-500',
    icon: <FaProjectDiagram className="w-8 h-8 text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />,
  },
  {
    title: 'EPS Analysis',
    description: 'Break down the problem into Events, Patterns, and Structures',
    path: '/eps-analysis',
    color: 'bg-green-500',
    icon: <FaChartBar className="w-8 h-8 text-green-400 group-hover:text-green-600 transition-colors duration-300" />,
  },
  {
    title: 'System Archetypes',
    description: 'Analyze common patterns and leverage points in the system',
    path: '/system-archetypes',
    color: 'bg-purple-500',
    icon: <FaCogs className="w-8 h-8 text-purple-400 group-hover:text-purple-600 transition-colors duration-300" />,
  },
  {
    title: 'Interventions',
    description: 'Proposed structural-level solutions and their impact',
    path: '/interventions',
    color: 'bg-yellow-500',
    icon: <FaLightbulb className="w-8 h-8 text-yellow-400 group-hover:text-yellow-600 transition-colors duration-300" />,
  },
  {
    title: 'Evaluation',
    description: 'Compare existing and proposed solutions across different levels',
    path: '/evaluation',
    color: 'bg-red-500',
    icon: <FaBalanceScale className="w-8 h-8 text-red-400 group-hover:text-red-600 transition-colors duration-300" />,
  },
  {
    title: 'Solutions',
    description: 'Comprehensive solutions combining technology, education, and community support',
    path: '/solutions',
    color: 'bg-indigo-500',
    icon: <FaPuzzlePiece className="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 transition-colors duration-300" />,
  },
  {
    title: 'Summary',
    description: 'Key insights and conclusions from the analysis',
    path: '/summary',
    color: 'bg-pink-500',
    icon: <FaListAlt className="w-8 h-8 text-pink-400 group-hover:text-pink-600 transition-colors duration-300" />,
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pointer-events-none" />
      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Digital Addiction Among Teenagers in India
          </h1>
          <motion.p
            className="text-xl text-center mb-12 text-gray-700 dark:text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            A comprehensive system analysis exploring the causes, patterns, and potential solutions for the growing issue of digital addiction among Indian teenagers.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {pages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <Link to={page.path}>
                  <div className={
                    `card group hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`
                  }>
                    <div className={`absolute top-0 left-0 w-full h-2 ${page.color} rounded-t-lg`} />
                    <div className="flex items-center justify-center mb-4 mt-2">
                      {page.icon}
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-center gradient-text drop-shadow">
                      {page.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-2 min-h-[56px]">{page.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 