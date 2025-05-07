import { motion } from 'framer-motion';

const SystemArchetypes = () => {
  const archetypes = [
    {
      name: 'Addiction Reinforcement Loop',
      type: 'Reinforcing Loop',
      description: 'More screen time → more dopamine feedback → more screen time',
      impact: 'Apps get more attention, real life gets less',
      color: 'red',
    },
    {
      name: 'Shifting the Burden',
      type: 'Archetype',
      description: 'Teens cope with stress via screens (quick fix), instead of therapy or family interaction (fundamental solution)',
      impact: 'Long-term dependency grows, real issues worsen',
      color: 'yellow',
    },
    {
      name: 'Limits to Growth',
      type: 'Balancing Loop',
      description: 'As addiction increases, academic pressure or parental restrictions may kick in',
      impact: 'These often come too late or are resisted',
      color: 'green',
    },
  ];

  const leveragePoints = [
    {
      name: 'Digital Detox Education',
      effectiveness: 'Increases awareness and breaks the cycle early',
      impact: 'High',
    },
    {
      name: 'App Design Regulations',
      effectiveness: 'Changes incentive structures of attention-based platforms',
      impact: 'High',
    },
    {
      name: 'Parental Involvement',
      effectiveness: 'Directly reduces screen time and improves support',
      impact: 'Medium',
    },
    {
      name: 'Access to Therapy',
      effectiveness: 'Addresses root emotional causes instead of superficial fixes',
      impact: 'High',
    },
    {
      name: 'School Mental Health Programs',
      effectiveness: 'Builds long-term resilience in teens',
      impact: 'Medium',
    },
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center">System Archetypes & Leverage Points</h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Analysis of common system patterns and identification of key intervention points
          for maximum impact in addressing digital addiction.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Archetypes Section */}
          <div className="card">
            <h2 className="subsection-title">System Archetypes</h2>
            <div className="space-y-6">
              {archetypes.map((archetype, index) => (
                <motion.div
                  key={archetype.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      archetype.color === 'red'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : archetype.color === 'yellow'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {archetype.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{archetype.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{archetype.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Impact: {archetype.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leverage Points Section */}
          <div className="card">
            <h2 className="subsection-title">Leverage Points</h2>
            <div className="space-y-6">
              {leveragePoints.map((point, index) => (
                <motion.div
                  key={point.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{point.name}</h3>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      point.impact === 'High'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {point.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{point.effectiveness}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 card">
          <h2 className="subsection-title">Strategic Implications</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              The analysis of system archetypes reveals that digital addiction is maintained by
              multiple reinforcing loops and quick-fix solutions that mask deeper issues. The
              identified leverage points suggest that the most effective interventions will be
              those that address the structural causes of addiction while building resilience
              and awareness. A multi-pronged approach targeting education, regulation, and
              support systems is likely to have the greatest impact.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemArchetypes; 