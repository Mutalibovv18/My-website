import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Target, Users2, MessageSquare, Search, Clock, Rocket, Heart, Shield, Zap, Award } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#0A0B1E]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Grow Your Email Revenue.
            <br />
            <motion.span 
              className="text-[#7EE7F1]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Predictably.
            </motion.span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We help eCommerce brands increase their email revenue by up to 40%+
            through high-converting email marketing. No fluff, just results.
          </p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to="/book-demo"
              className="bg-[#7EE7F1] text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Partner With Us
            </Link>
            <a
              href="#process"
              className="border border-[#7EE7F1] text-white px-8 py-4 rounded-full hover:bg-[#7EE7F1]/10 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              icon: <BarChart3 className="w-8 h-8 text-[#7EE7F1]" />,
              title: "Data-Driven Decisions",
              description: "We don't guess. Every strategy is backed by data to maximize results."
            },
            {
              icon: <Target className="w-8 h-8 text-[#7EE7F1]" />,
              title: "ROI-Focused Strategy",
              description: "Our emails don't just look good; they drive real revenue."
            },
            {
              icon: <Users2 className="w-8 h-8 text-[#7EE7F1]" />,
              title: "Partnership Mindset",
              description: "We treat your brand like our own and focus on long-term success."
            },
            {
              icon: <MessageSquare className="w-8 h-8 text-[#7EE7F1]" />,
              title: "Personalized Approach",
              description: "No copy-paste templates. Every email is crafted for your audience."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#0D0E24] p-8 rounded-xl hover:bg-[#0D0E24]/80 transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4" id="values">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: <Heart className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Passion",
                description: "We're passionate about helping brands grow through effective email marketing."
              },
              {
                icon: <Shield className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Trust",
                description: "Building long-term relationships based on transparency and results."
              },
              {
                icon: <Zap className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Innovation",
                description: "Always staying ahead with the latest email marketing strategies."
              },
              {
                icon: <Award className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Excellence",
                description: "Delivering outstanding results through attention to detail."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0E24] p-8 rounded-xl text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="inline-block mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4" id="process">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Path to Success
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: <Search className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Discovery",
                description: "We analyze your current performance and identify opportunities for growth."
              },
              {
                icon: <Clock className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Strategy",
                description: "We create a customized email marketing plan aligned with your goals."
              },
              {
                icon: <Rocket className="w-12 h-12 text-[#7EE7F1]" />,
                title: "Implementation",
                description: "We execute the strategy and optimize for maximum results."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0E24] p-8 rounded-xl text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="inline-block mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="https://i.ibb.co/Qp1DKR8/zuxriddin.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <p className="text-xl text-gray-400 mb-6">
                We're a team of email marketing experts passionate about helping e-commerce brands reach their full potential. With years of experience and a data-driven approach, we've helped numerous brands achieve significant growth through strategic email marketing.
              </p>
              <Link
                to="/book-demo"
                className="bg-[#7EE7F1] text-black font-semibold px-8 py-4 rounded-full inline-block hover:opacity-90 transition-opacity"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" id="faq">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div 
            className="grid gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                question: "You offer so much value, but what's the catch here?",
                answer: "There's absolutely no catch! We've built an incredible team of experts to help e-commerce brands grow. Your brand should be making at least $50,000 MRR to partner with us. We offer lots of free value since we genuinely want to help you grow, even if we don't end up partnering."
              },
              {
                question: "How long does it take to start the partnership?",
                answer: "Less than an hour! It takes us around 40 minutes to onboard you as a new partner client. While it takes most marketing agencies days to start delivering their service, we've created an automated onboarding process that you just need to input some information to start our partnership."
              },
              {
                question: "What does your fee structure look like?",
                answer: "Our fee structure is individual to each client and depends on what you need and what your goal is. You can join our free demo session so we can help identify your email marketing strategy and help you acquire at least 3x more customers for a minimum CAC and maximum ROI."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0E24] p-8 rounded-xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;