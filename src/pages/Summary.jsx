import { motion } from 'framer-motion';

const Summary = () => {
  const keyInsights = [
    {
      title: 'System Understanding',
      points: [
        'CLD revealed multiple reinforcing loops that sustain addiction',
        'EPS analysis showed how deep structures drive visible behaviors',
        'System archetypes explained why short-term fixes fail',
      ],
    },
    {
      title: 'Leverage Points',
      points: [
        'Educate teens on digital hygiene',
        'Train parents to monitor and model screen behavior',
        'Regulate addictive design elements in apps',
        'Improve access to mental health services in schools',
      ],
    },
    {
      title: 'Proposed Interventions',
      points: [
        'School-based awareness programs',
        'Digital detox apps with gamified rewards',
        'Government policies on app design ethics',
      ],
    },
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-center">Final Summary & System Insights</h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive overview of the digital addiction problem, its systemic causes,
          and the proposed solutions for sustainable change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyInsights.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <h2 className="subsection-title">{section.title}</h2>
              <ul className="space-y-4">
                {section.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (pointIndex * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-200 mr-3">
                      {pointIndex + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 card">
          <h2 className="subsection-title">Conclusion</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The analysis of digital addiction among Indian teenagers reveals a complex
              system with multiple reinforcing loops and structural issues. While the
              immediate symptoms are concerning, the underlying causes require a more
              comprehensive approach than current solutions provide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The proposed structural-level interventions offer a promising path forward,
              addressing root causes while building resilience and awareness. By combining
              education, regulation, and support systems, we can create sustainable change
              that benefits teenagers' mental health and overall well-being.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              To reverse digital addiction, India must shift from superficial solutions
              to deep structural redesign, focusing on long-term habits, education, and
              system-wide incentives. This requires coordinated efforts from schools,
              parents, policymakers, and technology companies to create a healthier
              digital environment for teenagers.
            </p>
          </div>
        </div>

        <div className="mt-12 card">
          <h2 className="subsection-title">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">Short-term Actions</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Implement pilot programs in selected schools</li>
                <li>Develop digital hygiene curriculum</li>
                <li>Create parent education resources</li>
                <li>Launch awareness campaigns</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">Long-term Goals</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Establish nationwide education programs</li>
                <li>Implement app design regulations</li>
                <li>Build comprehensive mental health support</li>
                <li>Create sustainable monitoring systems</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Summary; 