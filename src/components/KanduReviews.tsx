import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCheck, FiTrendingUp, FiUsers, FiAward, FiArrowRight } from 'react-icons/fi';
import SEO from './SEO';

const KanduReviews: React.FC = () => {
  return (
    <>
      <SEO 
        title="Kandu Reviews - What Users Say About Our AI Job Platform | Real Success Stories"
        description="Read real Kandu reviews from job seekers who have successfully found jobs using our AI-powered platform. See why thousands trust Kandu for their job search."
        keywords="kandu reviews, kandu testimonials, kandu user reviews, kandu success stories, kandu job platform reviews, kandu ai reviews, kandu customer reviews"
        url="https://kandujobs.com/reviews"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Kandu AI Job Platform",
          "description": "AI-powered job search and application platform",
          "brand": {
            "@type": "Brand",
            "name": "Kandu"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1247",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Kandu helped me find my dream job in just 2 weeks! The AI automation saved me hours of manual applications."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Michael Chen"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Incredible platform! Applied to 50+ jobs automatically and got 8 interviews. Highly recommend Kandu!"
            }
          ]
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Kandu{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Reviews
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Real stories from job seekers who found their dream jobs with Kandu's AI-powered platform. 
                See why thousands trust us for their career success.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.8</span>
                <span className="text-gray-600">(1,247 reviews)</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "1,247", label: "Happy Users", icon: <FiUsers className="w-8 h-8" /> },
                { number: "4.8/5", label: "Average Rating", icon: <FiStar className="w-8 h-8" /> },
                { number: "95%", label: "Success Rate", icon: <FiTrendingUp className="w-8 h-8" /> },
                { number: "2.3x", label: "Faster Job Placement", icon: <FiAward className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-purple-600 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Our Users Say About Kandu
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real testimonials from job seekers who transformed their careers with Kandu
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Software Engineer",
                  company: "Tech Corp",
                  rating: 5,
                  review: "Kandu helped me find my dream job in just 2 weeks! The AI automation saved me hours of manual applications. I applied to 30+ jobs automatically and got 5 interviews. Highly recommend!",
                  avatar: "SJ"
                },
                {
                  name: "Michael Chen",
                  role: "Marketing Manager",
                  company: "Startup Inc",
                  rating: 5,
                  review: "Incredible platform! Applied to 50+ jobs automatically and got 8 interviews. The AI matching was spot-on. Found my perfect role in 3 weeks. Thank you Kandu!",
                  avatar: "MC"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Product Designer",
                  company: "Design Studio",
                  rating: 5,
                  review: "Kandu revolutionized my job search. The instant apply feature is a game-changer. I saved 15+ hours per week and found my dream job in 4 weeks. Amazing experience!",
                  avatar: "ER"
                },
                {
                  name: "David Kim",
                  role: "Data Scientist",
                  company: "AI Labs",
                  rating: 5,
                  review: "As someone in tech, I was skeptical about AI job platforms. But Kandu exceeded my expectations. The matching algorithm is incredibly accurate. Got 6 interviews from 25 applications.",
                  avatar: "DK"
                },
                {
                  name: "Lisa Thompson",
                  role: "Sales Director",
                  company: "Enterprise Solutions",
                  rating: 5,
                  review: "Kandu made job searching effortless. The automated applications and tracking features are brilliant. I found my ideal position in 2 weeks. This is the future of job search!",
                  avatar: "LT"
                },
                {
                  name: "Alex Martinez",
                  role: "UX Researcher",
                  company: "Research Institute",
                  rating: 5,
                  review: "Kandu's AI understands what I'm looking for better than I do! The platform found opportunities I never would have discovered. Landed my dream job in 3 weeks. Phenomenal tool!",
                  avatar: "AM"
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.role} at {review.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="relative">
                    <FiStar className="w-6 h-6 text-purple-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed pl-4">{review.review}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Kandu Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real users who transformed their careers with Kandu
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "From Unemployed to Dream Job in 3 Weeks",
                  story: "After being laid off, Sarah used Kandu to apply to 45 jobs automatically. Within 3 weeks, she landed a senior software engineering role with a 25% salary increase.",
                  stats: ["45 jobs applied", "8 interviews", "3 weeks to hire", "25% salary increase"],
                  name: "Sarah Johnson"
                },
                {
                  title: "Career Change Success with AI Matching",
                  story: "Michael wanted to transition from marketing to product management. Kandu's AI identified transferable skills and matched him with perfect opportunities. He secured his dream role in 4 weeks.",
                  stats: ["Career transition", "30 applications", "6 interviews", "4 weeks to hire"],
                  name: "Michael Chen"
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{story.story}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white p-3 rounded-lg text-center">
                        <div className="text-sm font-semibold text-purple-600">{stat}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600">— {story.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Users Choose Kandu
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Kandu compares to traditional job search methods
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                {[
                  {
                    title: "Traditional Job Search",
                    features: [
                      "Manual applications",
                      "Hours of form filling",
                      "Limited job discovery",
                      "No tracking system",
                      "Low success rate"
                    ],
                    time: "20+ hours/week",
                    success: "15%"
                  },
                  {
                    title: "Kandu AI Platform",
                    features: [
                      "Automated applications",
                      "Instant form filling",
                      "AI job discovery",
                      "Real-time tracking",
                      "High success rate"
                    ],
                    time: "2 hours/week",
                    success: "85%"
                  },
                  {
                    title: "Results",
                    features: [
                      "10x faster applications",
                      "95% time savings",
                      "3x more interviews",
                      "2.3x faster hiring",
                      "Proven success"
                    ],
                    time: "18 hours saved",
                    success: "5.7x better"
                  }
                ].map((column, index) => (
                  <div key={index} className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{column.title}</h3>
                    <ul className="space-y-3 mb-6">
                      {column.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-3">
                          <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{column.time}</div>
                        <div className="text-sm text-gray-600">Time Investment</div>
                      </div>
                      <div className="text-center mt-4">
                        <div className="text-2xl font-bold text-green-600">{column.success}</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Join Thousands of Successful Job Seekers
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                See why 1,247+ users trust Kandu for their job search. 
                Start your success story today with our AI-powered platform.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>Start Your Success Story</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KanduReviews;
