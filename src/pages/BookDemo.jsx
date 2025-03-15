import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { CheckCircle } from 'lucide-react';

const BookDemo = () => {
  return (
    <div className="pt-20">
      <section className="min-h-screen px-4">
        <div className="max-w-7xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#7EE7F1] to-[#6B7CFF] bg-clip-text text-transparent">
                Book Your Strategy Call
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              8 Out of 10 Brand Owners Partner With Us After The Call
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-[#12132D] p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
                <ul className="space-y-4">
                  {[
                    'Deep dive analysis of your current email marketing',
                    'Custom strategy tailored to your business',
                    'Quick wins you can implement immediately',
                    'ROI projection based on your numbers',
                    'Clear action plan for the next 90 days'
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#7EE7F1]" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#12132D] p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Limited Availability</h2>
                <p className="text-gray-400">
                  We only accept 10 new clients per month to ensure we can provide the highest level of service and attention to each partner.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
              <InlineWidget
                url="https://calendly.com/mutaliboventrepreneur/mutalibov_zuxriddin"
                styles={{
                  height: '700px'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;