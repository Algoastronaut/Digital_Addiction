import { motion } from 'framer-motion';

const Interventions = () => {
  const interventions = [
    {
      title: 'School-Based Awareness Programs',
      description: 'Teach students about digital hygiene, dopamine effects, and mindful screen use',
      approach: 'Use storytelling, peer workshops, and interactive modules',
      impact: 'High',
      timeframe: 'Long-term',
    },
    {
      title: 'Parental Digital Literacy',
      description: 'Conduct community-based programs to educate parents on screen limits, app monitoring, and digital role modeling',
      approach: 'Workshops, online resources, and support groups',
      impact: 'Medium',
      timeframe: 'Medium-term',
    },
    {
      title: 'Digital Design Ethics',
      description: 'Push for regulations around app design: limit autoplay, reduce push notifications, encourage "take-a-break" nudges',
      approach: 'Policy advocacy and industry partnerships',
      impact: 'High',
      timeframe: 'Long-term',
    },
    {
      title: 'Improved Access to Mental Health Support',
      description: 'Provide school counselors and anonymous helplines',
      approach: 'School-based programs and digital mental health platforms',
      impact: 'High',
      timeframe: 'Medium-term',
    },
    {
      title: 'Gamified Digital Detox Platforms',
      description: 'Apps that reward time off-screen',
      approach: 'Daily check-ins and reminders to engage offline',
      impact: 'Medium',
      timeframe: 'Short-term',
    },
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center">Proposed Structural-Level Interventions</h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive solutions targeting the root causes of digital addiction through
          systemic changes and long-term behavioral modifications.
        </p>

        <div className="space-y-8">
          {interventions.map((intervention, index) => (
            <motion.div
              key={intervention.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {intervention.title}
                    </h2>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        intervention.impact === 'High'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {intervention.impact} Impact
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {intervention.timeframe}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {intervention.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Implementation Approach:</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {intervention.approach}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 card">
          <h2 className="subsection-title">Implementation Strategy</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              The proposed interventions are designed to work synergistically, addressing
              different aspects of the digital addiction problem. While some solutions
              (like gamified detox platforms) can provide immediate relief, others
              (such as school-based programs and design regulations) will create lasting
              structural changes. The key is to implement these interventions in a
              coordinated manner, with regular monitoring and adjustment based on
              outcomes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Interventions; 