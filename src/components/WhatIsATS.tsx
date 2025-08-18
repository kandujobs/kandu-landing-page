import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiX, FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi';
import SEO from './SEO';

const WhatIsATS: React.FC = () => {
  return (
    <>
      <SEO 
        title="What is ATS? Complete Guide to Applicant Tracking Systems 2025"
        description="Learn what ATS (Applicant Tracking System) is, how it works, and how to optimize your resume to pass ATS screening. Get past the robots and reach human recruiters."
        keywords="what is ATS, applicant tracking system, ATS resume optimization, ATS screening, resume parsing, job application tracking, ATS keywords, ATS friendly resume"
        url="https://kandujobs.com/blog/what-is-ats"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "What is ATS? Complete Guide to Applicant Tracking Systems 2025",
          "description": "Learn what ATS (Applicant Tracking System) is, how it works, and how to optimize your resume to pass ATS screening. Get past the robots and reach human recruiters.",
          "image": "https://kandujobs.com/blog/what-is-ats.jpg",
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
          "datePublished": "2025-01-24",
          "dateModified": "2025-01-24",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://kandujobs.com/blog/what-is-ats"
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
              <div className="text-sm font-semibold text-purple-600 mb-4">Job Application Guide</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                What is{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ATS?
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Complete guide to Applicant Tracking Systems. Learn how ATS works, why 75% of resumes get rejected, 
                and how to optimize your resume to pass the robot screening and reach human recruiters.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>14 min read</span>
                <span>•</span>
                <span>ATS Optimization</span>
                <span>•</span>
                <span>Resume Tips</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ATS? The Robot Gatekeeper of Job Applications</h2>
              <p className="text-lg text-gray-700 mb-6">
                ATS stands for <strong>Applicant Tracking System</strong>. It's software that companies use to collect, 
                sort, scan, and rank job applications before they reach human recruiters. Think of it as a digital 
                gatekeeper that decides whether your resume gets seen by a real person or gets tossed into the virtual trash.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                In today's job market, <strong>90% of companies use ATS systems</strong>, and they're responsible for 
                rejecting up to <strong>75% of resumes</strong> before a human ever sees them. Understanding how ATS works 
                is crucial for modern job seekers.
              </p>
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">ATS by the Numbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">90%</div>
                  <div className="text-sm opacity-90">Companies use ATS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">75%</div>
                  <div className="text-sm opacity-90">Resumes rejected by ATS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6s</div>
                  <div className="text-sm opacity-90">Average ATS scan time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">250+</div>
                  <div className="text-sm opacity-90">Applications per job</div>
                </div>
              </div>
            </motion.div>

            {/* How ATS Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How ATS Works: The Step-by-Step Process</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiTarget className="text-purple-600 mr-3" />
                    Step 1: Resume Parsing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you submit your resume, the ATS first "parses" it - meaning it extracts and categorizes 
                    information like your name, contact details, work experience, education, and skills.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What ATS Looks For:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Contact information (name, email, phone)</li>
                      <li>• Work history (job titles, companies, dates)</li>
                      <li>• Education (degrees, institutions, graduation dates)</li>
                      <li>• Skills and keywords</li>
                      <li>• Certifications and licenses</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiTrendingUp className="text-purple-600 mr-3" />
                    Step 2: Keyword Matching
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The ATS compares your resume against the job description, looking for specific keywords, 
                    skills, and qualifications that match what the employer is seeking.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Keyword Matching Process:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Scans for exact keyword matches</li>
                      <li>• Looks for synonyms and related terms</li>
                      <li>• Checks for required qualifications</li>
                      <li>• Evaluates skill relevance</li>
                      <li>• Assigns a match percentage score</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FiUsers className="text-purple-600 mr-3" />
                    Step 3: Ranking and Filtering
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Based on the keyword match and other criteria, the ATS ranks all applicants and filters out 
                    those who don't meet the minimum requirements or score too low.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Ranking Factors:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Keyword match percentage</li>
                      <li>• Years of experience</li>
                      <li>• Education level</li>
                      <li>• Required certifications</li>
                      <li>• Location preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why ATS Rejects Resumes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why ATS Rejects 75% of Resumes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-4">❌ Common ATS Rejection Reasons</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Missing Keywords:</strong> Resume doesn't contain job-specific keywords</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Poor Formatting:</strong> Complex layouts, tables, or graphics confuse ATS</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Wrong File Format:</strong> ATS can't read certain file types properly</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Missing Information:</strong> Required fields not filled or incomplete</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Generic Content:</strong> Resume too generic, not tailored to specific role</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">✅ How to Pass ATS Screening</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Keyword Optimization:</strong> Include relevant keywords from job description</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Simple Formatting:</strong> Use clean, ATS-friendly layouts</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Proper File Type:</strong> Submit as PDF or Word document</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Complete Information:</strong> Fill all required fields thoroughly</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Tailored Content:</strong> Customize resume for each specific job</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ATS Optimization Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">ATS Optimization Strategies</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Keyword Research and Implementation</h3>
                  <p className="text-gray-700 mb-4">
                    The most important factor in ATS optimization is keyword matching. You need to identify and 
                    include the right keywords from the job description.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">How to Find Keywords:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Read the job description carefully</li>
                        <li>• Identify required skills and qualifications</li>
                        <li>• Look for industry-specific terminology</li>
                        <li>• Include both full terms and abbreviations</li>
                        <li>• Use variations of key terms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Where to Place Keywords:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Professional summary section</li>
                        <li>• Skills section</li>
                        <li>• Job descriptions</li>
                        <li>• Education and certifications</li>
                        <li>• Throughout the resume naturally</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. ATS-Friendly Resume Formatting</h3>
                  <p className="text-gray-700 mb-4">
                    ATS systems struggle with complex formatting, graphics, and non-standard layouts. Keep your 
                    resume simple and scannable.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">✅ Do This:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Use standard fonts (Arial, Calibri, Times New Roman)</li>
                        <li>• Keep font size between 10-12pt</li>
                        <li>• Use simple bullet points (• or -)</li>
                        <li>• Include clear section headers</li>
                        <li>• Save as PDF or Word document</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">❌ Avoid This:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Tables, charts, or graphics</li>
                        <li>• Fancy fonts or decorative elements</li>
                        <li>• Text boxes or columns</li>
                        <li>• Images or logos</li>
                        <li>• Complex layouts or designs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Content Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Beyond keywords, your resume content needs to be structured in a way that ATS can easily 
                    parse and understand.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Content Best Practices:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Use standard job titles</li>
                        <li>• Include company names and dates</li>
                        <li>• List education with degree and institution</li>
                        <li>• Use action verbs and quantifiable results</li>
                        <li>• Keep descriptions concise and relevant</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">ATS-Friendly Structure:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Contact Information (top)</li>
                        <li>• Professional Summary</li>
                        <li>• Work Experience</li>
                        <li>• Education</li>
                        <li>• Skills Section</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Popular ATS Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular ATS Systems and Their Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Workday</h3>
                  <p className="text-gray-700 mb-4">
                    Used by large enterprises, known for advanced AI capabilities and comprehensive HR integration.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• AI-powered candidate matching</li>
                      <li>• Advanced keyword analysis</li>
                      <li>• Skills assessment integration</li>
                      <li>• Comprehensive reporting</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">BambooHR</h3>
                  <p className="text-gray-700 mb-4">
                    Popular with small to medium businesses, offers user-friendly interface and good parsing accuracy.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Simple resume parsing</li>
                      <li>• Basic keyword matching</li>
                      <li>• Email integration</li>
                      <li>• Mobile-friendly interface</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Greenhouse</h3>
                  <p className="text-gray-700 mb-4">
                    Favored by tech companies, offers sophisticated candidate scoring and interview scheduling.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Advanced candidate scoring</li>
                      <li>• Structured interview process</li>
                      <li>• Detailed analytics</li>
                      <li>• Integration with job boards</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lever</h3>
                  <p className="text-gray-700 mb-4">
                    Modern ATS with strong focus on candidate experience and team collaboration features.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Candidate relationship management</li>
                      <li>• Team collaboration tools</li>
                      <li>• Advanced search capabilities</li>
                      <li>• Pipeline management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testing Your Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Test Your Resume for ATS Compatibility</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ATS Testing Methods</h3>
                <p className="text-gray-700 mb-4">
                  Before submitting your resume, test it to ensure it will pass ATS screening. Here are several 
                  methods to verify your resume's ATS compatibility.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Free ATS Testing Tools</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Jobscan:</strong> Compares your resume against job descriptions</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>ResumeWorded:</strong> Analyzes keyword optimization and formatting</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Skillroads:</strong> Provides ATS scoring and improvement suggestions</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>ResumeParser:</strong> Tests how well ATS can parse your information</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Testing Checklist</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Copy-Paste Test:</strong> Copy resume text to see if formatting is preserved</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Keyword Density:</strong> Ensure important keywords appear multiple times</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>File Size Check:</strong> Keep file under 2MB for optimal processing</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Readability Test:</strong> Ensure text is clear and well-structured</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Resume for ATS?</h2>
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

            {/* Your Next Read Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Next Read</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                Continue your job search journey with these related articles and guides.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/blog/resume-optimization-ai" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Resume Optimization</h3>
                  <p className="text-gray-600 mb-4">Get your resume past ATS systems with AI-powered optimization techniques.</p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </a>
                
                <a href="/blog/ultimate-resume-guide-students" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimate Resume Guide for Students</h3>
                  <p className="text-gray-600 mb-4">Create a winning student resume with free templates and ATS optimization tips.</p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </a>
                
                <a href="/blog/apply-100-jobs-in-one-day" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How to Apply to 100 Jobs in One Day</h3>
                  <p className="text-gray-600 mb-4">Master high-volume job applications with proven strategies and AI automation.</p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </a>
              </div>
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

export default WhatIsATS;
