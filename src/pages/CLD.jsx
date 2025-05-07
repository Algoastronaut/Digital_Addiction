import { motion } from 'framer-motion';
import { useState } from 'react';

const CLD = () => {
  const [zoomed, setZoomed] = useState(false);

  const variables = [
    'Academic Pressure', 'Stress', 'Online Gaming Engagement', 'Social Media Engagement',
    'Screen Time', 'Dopamine Release', 'Social Isolation', 'Craving for Validation',
    'Parental Supervision', 'Digital Wellness', 'Age Restricted Access',
    'Digital Wellness Laws', 'Peer Pressure', 'Instant Achievement', 'Reduced Boredom Driven Screen Use'
  ];

  const loops = [
    {
      type: 'Reinforcing',
      name: 'Social Media Engagement Loop',
      description: 'More screen time → more social media engagement → more craving for validation → more screen time.'
    },
    {
      type: 'Reinforcing',
      name: 'Dopamine Loop',
      description: 'More gaming → more dopamine release → more craving for gaming → more gaming.'
    },
    {
      type: 'Reinforcing',
      name: 'Peer Pressure Loop',
      description: 'Peer pressure → more social media/gaming → more screen time → more peer pressure.'
    },
    {
      type: 'Balancing',
      name: 'Parental Supervision Loop',
      description: 'More parental supervision → less screen time use → less instant achievement → less online gaming engagement.'
    },
    {
      type: 'Balancing',
      name: 'Digital Wellness Loop',
      description: 'Digital wellness initiatives (workshops, laws, age restrictions) → reduced late-night usage, reduced gaming among minors, reduced boredom-driven screen use.'
    }
  ];

  const leveragePoints = [
    'Parental Supervision Workshops',
    'Digital Wellness Laws',
    'Age Restricted Access',
    'School/Community Interventions'
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center gradient-text">Causal Loop Diagram</h1>
        <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Visualize the interconnected variables and feedback loops that influence digital addiction among teenagers. Explore the main reinforcing and balancing loops, and discover key leverage points for intervention.
        </p>

        {/* CLD Image Card with Zoom */}
        <div className="flex justify-center mb-10">
          <motion.div
            className={`card p-2 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 shadow-xl cursor-pointer ${zoomed ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80' : ''}`}
            style={zoomed ? { maxWidth: '90vw', maxHeight: '90vh' } : { width: '100%', maxWidth: 700 }}
            onClick={() => setZoomed(!zoomed)}
            whileHover={{ scale: zoomed ? 1 : 1.03 }}
            title={zoomed ? 'Click to minimize' : 'Click to zoom'}
          >
            <img
              src="/cld-digital-addiction.png"
              alt="Causal Loop Diagram - Digital Addiction"
              className={`rounded-lg transition-all duration-300 ${zoomed ? 'w-full h-full object-contain' : 'w-full h-auto'}`}
              style={zoomed ? { maxHeight: '80vh' } : {}}
            />
            <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
              {zoomed ? 'Click anywhere to minimize' : 'Click to zoom'}
            </div>
          </motion.div>
        </div>

        {/* Analysis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="subsection-title gradient-text">Key Variables</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
              {variables.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </motion.div>
          <motion.div
            className="card bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="subsection-title gradient-text">Main Feedback Loops</h2>
            <ul className="space-y-3">
              {loops.map((loop, i) => (
                <li key={i}>
                  <span className={`font-semibold ${loop.type === 'Reinforcing' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{loop.type}:</span> <span className="font-medium">{loop.name}</span>
                  <div className="text-gray-600 dark:text-gray-300 text-sm ml-2">{loop.description}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="subsection-title gradient-text">Key Leverage Points</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
            {leveragePoints.map((lp, i) => <li key={i}>{lp}</li>)}
          </ul>
        </motion.div>

        <div className="text-center text-xs text-gray-400">(Diagram and analysis based on system mapping of digital addiction among teenagers in India)</div>
      </motion.div>
    </div>
  );
};

export default CLD; 