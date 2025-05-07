import { motion } from 'framer-motion';

const EPSAnalysis = () => {
  const analysis = {
    events: [
      'Teens using phones/screens excessively',
      'Drop in academic performance',
      'Increased anxiety, sleep issues, mood swings',
    ],
    patterns: [
      'Year-on-year increase in screen time',
      'Increase in app usage time & dopamine-driven scrolling',
      'Less outdoor time, more mental health complaints',
    ],
    structures: [
      'Addictive design of apps (infinite scroll, notifications)',
      'Peer pressure and social comparison',
      'Low awareness about digital hygiene',
      'Weak parental controls and engagement',
      'Lack of school-based mental health education',
    ],
  };

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center">Event → Pattern → Structure Analysis</h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive breakdown of the digital addiction problem across three systemic layers:
          surface symptoms (Events), emerging trends (Patterns), and underlying causes (Structures).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="bg-blue-500 h-2 rounded-t-lg" />
            <h2 className="subsection-title">Events</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Surface-level symptoms and observable behaviors
            </p>
            <ul className="space-y-4">
              {analysis.events.map((event, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">{event}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Patterns Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="bg-green-500 h-2 rounded-t-lg" />
            <h2 className="subsection-title">Patterns</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Emerging trends and recurring behaviors over time
            </p>
            <ul className="space-y-4">
              {analysis.patterns.map((pattern, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">{pattern}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Structures Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="bg-purple-500 h-2 rounded-t-lg" />
            <h2 className="subsection-title">Structures</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Deep systemic causes and underlying mechanisms
            </p>
            <ul className="space-y-4">
              {analysis.structures.map((structure, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">{structure}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 card">
          <h2 className="subsection-title">Key Insights</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              The EPS analysis reveals that while the immediate symptoms (Events) are concerning,
              the underlying Patterns and Structures are what truly drive the digital addiction
              epidemic. The addictive design of apps and social platforms, combined with peer
              pressure and lack of awareness, creates a perfect storm for digital dependency.
              Solutions must address these structural issues rather than just treating the symptoms.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EPSAnalysis; 