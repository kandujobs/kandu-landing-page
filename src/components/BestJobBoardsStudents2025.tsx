import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiArrowRight, FiExternalLink, FiStar, FiMapPin, FiDollarSign } from 'react-icons/fi';
import SEO from './SEO';

const BestJobBoardsStudents2025: React.FC = () => {
  return (
    <>
      <SEO 
        title="Best Job Boards for Students in 2025: Complete Guide"
        description="Discover the top job boards for students in 2025. From internships to entry-level positions, find the best platforms for student job search and career opportunities."
        keywords="job boards for students, student job search, internship sites, entry level jobs, student career opportunities, best job sites for students, student employment platforms"
        url="https://kandujobs.com/blog/best-job-boards-students-2025"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Best Job Boards for Students in 2025: Complete Guide",
          "description": "Discover the top job boards for students in 2025. From internships to entry-level positions, find the best platforms for student job search and career opportunities.",
          "image": "https://kandujobs.com/blog/best-job-boards-students-2025.jpg",
          "author": {
            "@type": "Organization",
            "name": "Kandu",
            "url": "https://kandujobs.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Kandu",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kandujobs.com/logo.png"
            }
          },
          "datePublished": "2025-01-20",
          "dateModified": "2025-01-20",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://kandujobs.com/blog/best-job-boards-students-2025"
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Kandu
                  </span>
                </a>
              </div>
              <nav className="flex items-center space-x-6">
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
                <a href="/blog" className="text-purple-600 font-semibold">Blog</a>
                <a href="https://app.kandujobs.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  Try Kandu Free
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-sm font-semibold text-purple-600 mb-4">Student Job Search Guide</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Best Job Boards for{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Students in 2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Navigate the competitive job market with our comprehensive guide to the top job boards 
                for students. From internships to entry-level positions, discover where to find your 
                next opportunity.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>12 min read</span>
                <span>•</span>
                <span>Student Job Search</span>
                <span>•</span>
                <span>Career Guide</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Students Need Specialized Job Boards</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a student entering the job market, you face unique challenges that require specialized 
                resources. Traditional job boards often cater to experienced professionals, making it 
                difficult to find entry-level positions, internships, and opportunities that match your 
                current skill level and schedule.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                The job market for students has evolved significantly in 2025, with remote work opportunities, 
                flexible schedules, and AI-powered matching becoming increasingly important. This guide 
                will help you navigate the best platforms specifically designed for student job seekers.
              </p>
            </motion.div>

            {/* Top Job Boards Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Top 10 Job Boards for Students in 2025</h2>
              
              {/* Job Board 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Handshake</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center"><FiStar className="text-yellow-500 mr-1" /> 4.8/5</span>
                      <span className="flex items-center"><FiUsers className="mr-1" /> 8M+ Students</span>
                      <span className="flex items-center"><FiMapPin className="mr-1" /> 800+ Universities</span>
                    </div>
                  </div>
                  <a href="https://joinhandshake.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Best for:</strong> College students and recent graduates looking for internships and entry-level positions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• University-verified student profiles</li>
                      <li>• Direct employer connections</li>
                      <li>• Career fair integration</li>
                      <li>• Free for students</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Limited to partner universities</li>
                      <li>• Some features require university access</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job Board 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2. LinkedIn</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center"><FiStar className="text-yellow-500 mr-1" /> 4.7/5</span>
                      <span className="flex items-center"><FiUsers className="mr-1" /> 900M+ Users</span>
                      <span className="flex items-center"><FiMapPin className="mr-1" /> Global</span>
                    </div>
                  </div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Best for:</strong> Building professional networks and finding opportunities across all industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Massive job database</li>
                      <li>• Professional networking</li>
                      <li>• Industry insights</li>
                      <li>• Easy apply features</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Can be overwhelming for beginners</li>
                      <li>• Premium features cost money</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job Board 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Indeed</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center"><FiStar className="text-yellow-500 mr-1" /> 4.6/5</span>
                      <span className="flex items-center"><FiUsers className="mr-1" /> 250M+ Monthly Users</span>
                      <span className="flex items-center"><FiMapPin className="mr-1" /> Global</span>
                    </div>
                  </div>
                  <a href="https://indeed.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Best for:</strong> Comprehensive job search with advanced filtering and company reviews.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Largest job database</li>
                      <li>• Company reviews and ratings</li>
                      <li>• Advanced search filters</li>
                      <li>• Salary information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Many low-quality listings</li>
                      <li>• Spam applications</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job Board 4 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Glassdoor</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center"><FiStar className="text-yellow-500 mr-1" /> 4.5/5</span>
                      <span className="flex items-center"><FiUsers className="mr-1" /> 100M+ Users</span>
                      <span className="flex items-center"><FiDollarSign className="mr-1" /> Salary Data</span>
                    </div>
                  </div>
                  <a href="https://glassdoor.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Best for:</strong> Researching companies and understanding salary expectations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Detailed company reviews</li>
                      <li>• Salary transparency</li>
                      <li>• Interview insights</li>
                      <li>• Company culture info</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Smaller job database</li>
                      <li>• Some biased reviews</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job Board 5 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">5. WayUp</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center"><FiStar className="text-yellow-500 mr-1" /> 4.4/5</span>
                      <span className="flex items-center"><FiUsers className="mr-1" /> 1M+ Students</span>
                      <span className="flex items-center"><FiMapPin className="mr-1" /> US Focus</span>
                    </div>
                  </div>
                  <a href="https://wayup.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Best for:</strong> College students and recent graduates seeking internships and entry-level jobs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Student-focused platform</li>
                      <li>• Internship opportunities</li>
                      <li>• Career advice resources</li>
                      <li>• Free to use</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Limited to US market</li>
                      <li>• Smaller job database</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Continue with more job boards... */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Top Platforms:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6. ZipRecruiter</h4>
                    <p className="text-sm text-gray-700 mb-3">AI-powered job matching with one-click apply</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">7. Monster</h4>
                    <p className="text-sm text-gray-700 mb-3">Established platform with career resources</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8. SimplyHired</h4>
                    <p className="text-sm text-gray-700 mb-3">Salary comparison and job search</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">9. Snagajob</h4>
                    <p className="text-sm text-gray-700 mb-3">Hourly and part-time opportunities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">10. College Recruiter</h4>
                    <p className="text-sm text-gray-700 mb-3">Specialized for college students</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips for Student Job Search in 2025</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize Your Profile</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Use relevant keywords in your profile</span>
                    </li>
                    <li className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Include projects and coursework</span>
                    </li>
                    <li className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Add skills and certifications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Leverage AI Tools</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Use AI-powered resume optimization</span>
                    </li>
                    <li className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Automate job applications</span>
                    </li>
                    <li className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Track application status</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Job Search?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of students using Kandu's AI-powered job automation to find their dream opportunities.
              </p>
              <a
                href="https://app.kandujobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Try Kandu Free
                <FiArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold">Kandu</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered job search automation for students and professionals
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                <a href="/about" className="hover:text-white transition-colors">About</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BestJobBoardsStudents2025;
