import { motion } from 'framer-motion';

const Evaluation = () => {
  const existingSolutions = [
    {
      name: 'Screen time limits via parental controls',
      level: 'Event',
      limitations: 'Often bypassed by teens',
      effectiveness: 'Low',
    },
    {
      name: 'Blocking apps or websites',
      level: 'Event',
      limitations: 'Temporary, doesn\'t address why teens are addicted',
      effectiveness: 'Low',
    },
    {
      name: 'Social media awareness campaigns',
      level: 'Pattern',
      limitations: 'Not interactive or engaging enough',
      effectiveness: 'Medium',
    },
    {
      name: 'Occasional digital detox events in schools',
      level: 'Pattern',
      limitations: 'Not sustained or systemic',
      effectiveness: 'Medium',
    },
  ];

  const proposedSolutions = [
    {
      name: 'Digital hygiene education in schools',
      level: 'Structure',
      impact: 'Long-term behavior change',
      effectiveness: 'High',
    },
    {
      name: 'UX regulation for apps',
      level: 'Structure',
      impact: 'Reduces addictive design at the source',
      effectiveness: 'High',
    },
    {
      name: 'Parental involvement & modeling',
      level: 'Structure',
      impact: 'Builds supportive environment',
      effectiveness: 'High',
    },
    {
      name: 'School therapy access',
      level: 'Structure',
      impact: 'Solves emotional roots, not symptoms',
      effectiveness: 'High',
    },
    {
      name: 'Gamified digital detox platforms',
      level: 'Pattern → Structure',
      impact: 'Engages teens while shifting habits',
      effectiveness: 'Medium',
    },
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center">Evaluating Solutions Across Events, Patterns & Structures</h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive comparison of existing solutions and proposed interventions,
          analyzing their effectiveness across different systemic levels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Existing Solutions */}
          <div className="card">
            <h2 className="subsection-title">Existing Solutions (Mainly Event-Level)</h2>
            <div className="space-y-6">
              {existingSolutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{solution.name}</h3>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      solution.effectiveness === 'High'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : solution.effectiveness === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {solution.effectiveness} Effectiveness
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {solution.level} Level
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Limitations: {solution.limitations}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proposed Solutions */}
          <div className="card">
            <h2 className="subsection-title">Proposed Solutions (Structural-Level)</h2>
            <div className="space-y-6">
              {proposedSolutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{solution.name}</h3>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      solution.effectiveness === 'High'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {solution.effectiveness} Effectiveness
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 rounded text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {solution.level}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Impact: {solution.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 card">
          <h2 className="subsection-title">Key Insights</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              The evaluation reveals that most existing interventions deal with surface-level
              events and have limited effectiveness. For sustainable change, we must tackle
              the system's structure and incentives. The proposed structural-level solutions
              show higher potential for long-term impact by addressing root causes rather
              than symptoms. A combination of education, regulation, and support systems
              appears to be the most promising approach.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Evaluation; 