import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiArrowRight, FiStar, FiTrendingUp, FiZap, FiTarget, FiCheck, FiX } from 'react-icons/fi';
import SEO from './SEO';

const UltimateResumeGuideStudents: React.FC = () => {
  return (
    <>
      <SEO 
        title="The Ultimate Resume Guide for Students: Complete Template & Tips 2025"
        description="Master resume writing for students with our comprehensive guide. Get free templates, ATS optimization tips, and proven strategies to land internships and entry-level jobs."
        keywords="resume guide for students, student resume template, college student resume, internship resume, entry level resume, ATS resume optimization, student resume examples"
        url="https://kandujobs.com/blog/ultimate-resume-guide-students"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Ultimate Resume Guide for Students: Complete Template & Tips 2025",
          "description": "Master resume writing for students with our comprehensive guide. Get free templates, ATS optimization tips, and proven strategies to land internships and entry-level jobs.",
          "image": "https://kandujobs.com/blog/ultimate-resume-guide-students.jpg",
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
          "datePublished": "2025-01-22",
          "dateModified": "2025-01-22",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://kandujobs.com/blog/ultimate-resume-guide-students"
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
              <div className="text-sm font-semibold text-purple-600 mb-4">Student Career Guide</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                The Ultimate Resume Guide for{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Students
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Master resume writing with our comprehensive guide. Get free templates, ATS optimization tips, 
                and proven strategies to land internships and entry-level jobs in 2025.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>18 min read</span>
                <span>•</span>
                <span>Free Templates</span>
                <span>•</span>
                <span>ATS Optimized</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Students Need a Different Resume Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a student, you face unique challenges in the job market. You're competing against experienced 
                professionals while having limited work history. This guide will show you how to leverage your 
                academic achievements, projects, and extracurricular activities to create a compelling resume.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We'll also cover <a href="/blog/resume-optimization-ai" className="text-purple-600 hover:text-purple-700 font-semibold">AI resume optimization</a> techniques to ensure your resume passes 
                Applicant Tracking Systems (ATS) and reaches human recruiters.
              </p>
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Resume Success Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">75%</div>
                  <div className="text-sm opacity-90">Resumes rejected by ATS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6s</div>
                  <div className="text-sm opacity-90">Average recruiter scan time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3x</div>
                  <div className="text-sm opacity-90">More interviews with optimized resume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">90%</div>
                  <div className="text-sm opacity-90">Companies use ATS systems</div>
                </div>
              </div>
            </motion.div>

            {/* Resume Structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Resume Structure: What to Include</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiTarget className="text-purple-600 mr-3" />
                    1. Contact Information & Header
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Include:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Full name (larger, bold font)</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Professional email address</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Phone number</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>LinkedIn profile URL</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Portfolio/website (if relevant)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Avoid:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Unprofessional email addresses</span>
                        </li>
                        <li className="flex items-start">
                          <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Full home address</span>
                        </li>
                        <li className="flex items-start">
                          <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Social media (unless professional)</span>
                        </li>
                        <li className="flex items-start">
                          <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Personal photos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiStar className="text-purple-600 mr-3" />
                    2. Professional Summary
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A compelling 2-3 sentence summary that highlights your key strengths, academic achievements, 
                    and career goals. This is your elevator pitch.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Example:</h4>
                    <p className="text-sm text-gray-700 italic">
                      "Computer Science student at [University] with a 3.8 GPA and strong foundation in Python, 
                      Java, and web development. Completed 3 internships and led a team of 5 students in developing 
                      a mobile app with 1,000+ downloads. Seeking software engineering opportunities to apply 
                      technical skills and passion for innovation."
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiTrendingUp className="text-purple-600 mr-3" />
                    3. Education Section
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Include:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>University name and location</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Degree and major</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Expected graduation date</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>GPA (if 3.0+)</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Relevant coursework</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Academic honors/awards</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Format:</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 font-mono">
                          [University Name], [Location]<br/>
                          Bachelor of [Degree] in [Major]<br/>
                          Expected Graduation: [Month Year]<br/>
                          GPA: [X.XX/4.00]<br/>
                          Relevant Coursework: [Course 1], [Course 2], [Course 3]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiZap className="text-purple-600 mr-3" />
                    4. Experience Section
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For students, this can include internships, part-time jobs, volunteer work, and relevant projects. 
                    Focus on achievements and quantifiable results.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Experience Entry Format:</h4>
                    <p className="text-sm text-gray-700 font-mono">
                      [Job Title] | [Company/Organization]<br/>
                      [Location] | [Start Date] - [End Date]<br/>
                      • [Achievement 1 with quantifiable result]<br/>
                      • [Achievement 2 with quantifiable result]<br/>
                      • [Achievement 3 with quantifiable result]
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Types of Experience:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Internships</li>
                        <li>• Part-time jobs</li>
                        <li>• Volunteer work</li>
                        <li>• Research projects</li>
                        <li>• Freelance work</li>
                        <li>• Campus jobs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Action Verbs:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Developed, Created, Built</li>
                        <li>• Managed, Led, Coordinated</li>
                        <li>• Analyzed, Researched, Evaluated</li>
                        <li>• Improved, Optimized, Enhanced</li>
                        <li>• Collaborated, Partnered, Worked</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiUsers className="text-purple-600 mr-3" />
                    5. Skills Section
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Organize skills into categories and include both technical and soft skills. Be specific and 
                    honest about your proficiency levels.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Programming Languages</li>
                        <li>• Software/Tools</li>
                        <li>• Certifications</li>
                        <li>• Technical Projects</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Soft Skills</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Leadership</li>
                        <li>• Communication</li>
                        <li>• Problem Solving</li>
                        <li>• Teamwork</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• English (Native)</li>
                        <li>• Spanish (Fluent)</li>
                        <li>• French (Intermediate)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ATS Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">ATS Optimization: Pass the Robot Test</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is ATS?</h3>
                <p className="text-gray-700 mb-4">
                  Applicant Tracking Systems (ATS) are software used by 90% of companies to scan and filter 
                  resumes before they reach human recruiters. Learn more about <a href="/blog/resume-optimization-ai" className="text-purple-600 hover:text-purple-700 font-semibold">AI resume optimization</a> 
                  to ensure your resume gets through.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ATS-Friendly Formatting</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use standard fonts (Arial, Calibri, Times New Roman)</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Keep font size between 10-12pt</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use simple bullet points (• or -)</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Avoid tables, images, and graphics</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Save as PDF or Word document</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Keyword Optimization</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Include job-specific keywords naturally</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use industry-standard terminology</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Include both full terms and abbreviations</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Match keywords from job descriptions</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use action verbs and quantifiable results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Free Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Free Student Resume Templates</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Template 1: Clean & Professional</h3>
                  <p className="text-gray-700 mb-4">
                    Perfect for business, finance, and consulting roles. Emphasizes structure and clarity.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Clean typography</li>
                      <li>• Clear section headers</li>
                      <li>• Balanced white space</li>
                      <li>• Professional color scheme</li>
                    </ul>
                  </div>
                  <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Download Template
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Template 2: Creative & Modern</h3>
                  <p className="text-gray-700 mb-4">
                    Ideal for design, marketing, and creative roles. Shows personality while maintaining professionalism.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Modern design elements</li>
                      <li>• Color accents</li>
                      <li>• Creative layout</li>
                      <li>• Portfolio integration</li>
                    </ul>
                  </div>
                  <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Download Template
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Student Resume Mistakes to Avoid</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-4">❌ Don't Do This</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Using generic objectives instead of summaries</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Including high school information (unless recent)</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Listing irrelevant coursework</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Using passive language and weak verbs</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Including personal information (age, marital status)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">✅ Do This Instead</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Write compelling professional summaries</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Focus on relevant academic achievements</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Include only relevant coursework</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Use strong action verbs and quantifiable results</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Keep it professional and relevant</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Resume?</h2>
              <p className="text-xl mb-6 opacity-90">
                Use Kandu's AI-powered resume optimization to ensure your resume passes ATS systems and gets you interviews.
              </p>
              <a
                href="https://app.kandujobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Optimize Your Resume with AI
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

export default UltimateResumeGuideStudents;
