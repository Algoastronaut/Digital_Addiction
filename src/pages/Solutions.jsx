import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaSchool, FaMobileAlt, FaHeart } from 'react-icons/fa';

const Solutions = () => {
  const solutions = [
    {
      title: 'Cognitive Behavioral Therapy (CBT) Integration',
      icon: <FaBrain className="w-8 h-8 text-purple-500" />,
      description: 'Implement CBT techniques in schools to help teens develop healthy digital habits',
      features: [
        'Mindfulness training for digital awareness',
        'Cognitive restructuring for screen time management',
        'Behavioral activation for offline activities',
        'Stress management techniques'
      ],
      impact: 'High',
      timeframe: 'Medium-term'
    },
    {
      title: 'Community-Based Support Groups',
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
      description: 'Create peer support networks for teens and parents to share experiences and strategies',
      features: [
        'Weekly group sessions',
        'Peer mentoring programs',
        'Parent-teen workshops',
        'Success story sharing'
      ],
      impact: 'High',
      timeframe: 'Long-term'
    },
    {
      title: 'School Digital Wellness Program',
      icon: <FaSchool className="w-8 h-8 text-green-500" />,
      description: 'Comprehensive digital wellness curriculum integrated into school programs',
      features: [
        'Digital literacy classes',
        'Screen time management workshops',
        'Online safety education',
        'Digital citizenship training'
      ],
      impact: 'High',
      timeframe: 'Long-term'
    },
    {
      title: 'Smart Technology Solutions',
      icon: <FaMobileAlt className="w-8 h-8 text-yellow-500" />,
      description: 'Develop and implement smart technology solutions to monitor and manage screen time',
      features: [
        'AI-powered usage analytics',
        'Smart scheduling tools',
        'Focus mode features',
        'Family dashboard'
      ],
      impact: 'Medium',
      timeframe: 'Short-term'
    },
    {
      title: 'Mental Health Integration',
      icon: <FaHeart className="w-8 h-8 text-red-500" />,
      description: 'Integrate mental health support with digital wellness programs',
      features: [
        'School counseling services',
        'Online therapy platforms',
        'Crisis intervention programs',
        'Wellness check-ins'
      ],
      impact: 'High',
      timeframe: 'Medium-term'
    }
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Comprehensive Solutions
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A holistic approach combining technology, education, and community support to address
          digital addiction among teenagers in India.
        </p>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700">
                  {solution.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </h2>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        solution.impact === 'High'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {solution.impact} Impact
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {solution.timeframe}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <h2 className="subsection-title text-primary-600 dark:text-primary-400">Implementation Strategy</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              These solutions are designed to work synergistically, creating a comprehensive
              support system for teenagers. The implementation should be phased, starting with
              immediate interventions like smart technology solutions and community support
              groups, while gradually introducing longer-term programs like school-based
              wellness initiatives and mental health integration.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Success will depend on collaboration between schools, parents, mental health
              professionals, and technology providers. Regular monitoring and feedback
              mechanisms will ensure continuous improvement and adaptation to changing needs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Solutions; 