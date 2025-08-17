import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiStar, FiZap, FiShield, FiUsers } from 'react-icons/fi';
import SEO from './SEO';

const KanduFAQ: React.FC = () => {
  return (
    <>
      <SEO 
        title="Kandu FAQ - Frequently Asked Questions About Our AI Job Platform | Complete Guide"
        description="Get answers to all your questions about Kandu's AI-powered job search platform. Learn about AI job matching, auto-apply features, pricing, and how to get started."
        keywords="kandu faq, kandu questions, kandu ai job platform, kandu auto apply, kandu pricing, kandu features, kandu job matching"
        url="https://kandujobs.com/blog/kandu-faq"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Kandu FAQ - Frequently Asked Questions About Our AI Job Platform | Complete Guide",
          "description": "Get answers to all your questions about Kandu's AI-powered job search platform. Learn about AI job matching, auto-apply features, pricing, and how to get started.",
          "image": "https://kandujobs.com/blog/kandu-faq.jpg",
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
          "datePublished": "2024-01-20",
          "dateModified": "2024-01-20",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://kandujobs.com/blog/kandu-faq"
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
              <div className="text-sm font-semibold text-purple-600 mb-4">Kandu FAQ Guide</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Kandu FAQ:{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Everything You Need to Know
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get answers to all your questions about Kandu's AI-powered job search platform. 
                From how our AI works to pricing and features, we've got you covered.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>10 min read</span>
                <span>•</span>
                <span>Kandu Guide</span>
                <span>•</span>
                <span>Getting Started</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#getting-started" className="hover:text-purple-600 transition-colors">1. Getting Started</a></li>
                <li><a href="#ai-features" className="hover:text-purple-600 transition-colors">2. AI Features & How It Works</a></li>
                <li><a href="#auto-apply" className="hover:text-purple-600 transition-colors">3. Auto-Apply & Automation</a></li>
                <li><a href="#pricing" className="hover:text-purple-600 transition-colors">4. Pricing & Plans</a></li>
                <li><a href="#job-matching" className="hover:text-purple-600 transition-colors">5. Job Matching & Filters</a></li>
                <li><a href="#resume-cover-letters" className="hover:text-purple-600 transition-colors">6. Resume & Cover Letters</a></li>
                <li><a href="#safety-privacy" className="hover:text-purple-600 transition-colors">7. Safety & Privacy</a></li>
                <li><a href="#support" className="hover:text-purple-600 transition-colors">8. Support & Troubleshooting</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="getting-started"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Getting Started</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do I sign up for Kandu?</h3>
                  <p className="text-gray-700 mb-4">
                    Signing up for Kandu is simple and free! Just visit our website and click "Get Started." 
                    You'll need to provide your email address and create a password. Once you're signed up, 
                    you can start building your profile and exploring job opportunities.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <FiCheck className="w-5 h-5 mr-2" />
                    <span>Free signup • No credit card required • Instant access</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What information do I need to provide?</h3>
                  <p className="text-gray-700 mb-4">
                    To get the best job matches, we recommend providing:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Your current resume or work experience</li>
                    <li>• Desired job titles and industries</li>
                    <li>• Preferred location (remote, hybrid, or specific cities)</li>
                    <li>• Salary expectations</li>
                    <li>• Skills and certifications</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How long does it take to set up my profile?</h3>
                  <p className="text-gray-700">
                    You can get started in as little as 5 minutes! Upload your resume and our AI will 
                    automatically extract your skills and experience. You can then refine your preferences 
                    and start applying to jobs immediately. The more information you provide, the better 
                    your job matches will be.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="ai-features"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. AI Features & How It Works</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How does Kandu's AI job matching work?</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI uses advanced machine learning to understand your skills, experience, and preferences. 
                    It analyzes thousands of job postings in real-time and matches you with opportunities that 
                    best fit your profile. The more you use the platform, the smarter it gets at finding 
                    relevant jobs.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <FiZap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Real-time Analysis</p>
                    </div>
                    <div className="text-center">
                      <FiStar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Smart Learning</p>
                    </div>
                    <div className="text-center">
                      <FiUsers className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Personalized Matches</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What makes Kandu's AI different from other job platforms?</h3>
                  <p className="text-gray-700 mb-4">
                    Unlike traditional job boards, Kandu's AI doesn't just match keywords. It understands 
                    context, learns from your behavior, and continuously improves its recommendations. 
                    Our AI also handles the entire application process, from finding jobs to submitting 
                    applications with personalized materials.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Context-aware job matching</li>
                    <li>• Automated application process</li>
                    <li>• Personalized resume and cover letter generation</li>
                    <li>• Real-time job market analysis</li>
                    <li>• Continuous learning from user feedback</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Auto-Apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="auto-apply"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Auto-Apply & Automation</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is the auto-apply feature really automatic?</h3>
                  <p className="text-gray-700 mb-4">
                    Yes! Once you set up your preferences and resume, our AI can automatically apply to 
                    hundreds of jobs that match your criteria. You have full control - you can choose to 
                    review applications before they're sent or let the AI handle everything automatically.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">You can choose:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Manual review of each application</li>
                      <li>• Automatic application to pre-approved jobs</li>
                      <li>• Hybrid approach with selective automation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How many jobs can I apply to automatically?</h3>
                  <p className="text-gray-700 mb-4">
                    With our free plan, you can apply to up to 50 jobs per month automatically. Premium 
                    plans offer unlimited applications. Our AI is designed to find high-quality matches, 
                    so you're not just applying to random jobs - each application is targeted and relevant.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I customize the auto-apply settings?</h3>
                  <p className="text-gray-700">
                    Absolutely! You can set specific criteria for automatic applications, including:
                  </p>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Minimum salary requirements</li>
                    <li>• Specific companies to target or avoid</li>
                    <li>• Job title preferences</li>
                    <li>• Location preferences</li>
                    <li>• Required skills and experience level</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="pricing"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Pricing & Plans</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How much does Kandu cost?</h3>
                  <p className="text-gray-700 mb-4">
                    Kandu is currently <strong>free for all users</strong>! We're in beta and want to 
                    help as many job seekers as possible. Our premium plans will launch soon, including 
                    unlimited job applications, advanced AI features, and priority support.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <FiCheck className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-semibold">Currently Free - No Credit Card Required</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What will the premium plans include?</h3>
                  <p className="text-gray-700 mb-4">
                    Our upcoming premium plans will offer:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pro Plan</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Unlimited job applications</li>
                        <li>• Advanced AI features</li>
                        <li>• Priority email support</li>
                        <li>• Detailed analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Enterprise Plan</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• All Pro features</li>
                        <li>• Dedicated account manager</li>
                        <li>• Custom integrations</li>
                        <li>• Team collaboration tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle CTA */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200 mb-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-4">Join thousands of job seekers who are already using Kandu to land their dream jobs.</p>
                  <a 
                    href="https://app.kandujobs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    <span>Start Free Today</span>
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Job Matching */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="job-matching"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Job Matching & Filters</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I use Kandu for remote jobs only?</h3>
                  <p className="text-gray-700 mb-4">
                    Absolutely! You can filter for remote, hybrid, or on-site positions. Our AI understands 
                    location preferences and will prioritize jobs that match your desired work arrangement. 
                    You can also specify multiple locations if you're open to relocation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What if I'm not satisfied with the job matches?</h3>
                  <p className="text-gray-700 mb-4">
                    You can always adjust your preferences, skills, and experience in your profile. The AI 
                    continuously learns from your feedback to provide better matches over time. You can also:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Refine your job preferences</li>
                    <li>• Update your skills and experience</li>
                    <li>• Adjust salary expectations</li>
                    <li>• Modify location preferences</li>
                    <li>• Provide feedback on job suggestions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Resume & Cover Letters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="resume-cover-letters"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Resume & Cover Letters</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How accurate are the AI-generated resumes and cover letters?</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI creates professional, tailored materials that highlight your specific skills and 
                    experience. Each document is optimized for the job requirements and can be customized 
                    before sending. The AI ensures your materials are ATS-friendly and stand out to recruiters.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">AI-generated materials include:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Keyword optimization for ATS systems</li>
                      <li>• Tailored content for each job</li>
                      <li>• Professional formatting and structure</li>
                      <li>• Industry-specific language</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I edit the AI-generated materials?</h3>
                  <p className="text-gray-700">
                    Yes! You have full control over all AI-generated materials. You can edit, customize, 
                    and approve everything before it's sent. The AI provides a strong foundation, but you 
                    can add your personal touch and ensure everything reflects your voice and experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Safety & Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="safety-privacy"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Safety & Privacy</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is my data safe with Kandu?</h3>
                  <p className="text-gray-700 mb-4">
                    Absolutely! We take data security and privacy very seriously. Your personal information 
                    is encrypted and protected using industry-standard security measures. We never share 
                    your data with third parties without your explicit consent.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <FiShield className="w-5 h-5 mr-2" />
                    <span>High-level encryption • GDPR compliant • RLS enabled</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What happens to my data if I delete my account?</h3>
                  <p className="text-gray-700">
                    When you delete your account, we permanently remove all your personal data from our 
                    systems within 30 days. This includes your profile information, resume, and application 
                    history. We retain only anonymized data for improving our AI algorithms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="support"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Support & Troubleshooting</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How can I get help if I have issues?</h3>
                  <p className="text-gray-700 mb-4">
                    We're here to help! You can reach our support team through:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Email: support@kandujobs.com</li>
                    <li>• Help center with detailed guides</li>
                    <li>• Community forum for user discussions</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What if I'm not getting job matches?</h3>
                  <p className="text-gray-700 mb-4">
                    If you're not seeing relevant job matches, try these steps:
                  </p>
                  <ol className="text-gray-700 space-y-2">
                    <li>1. Update your profile with more detailed information</li>
                    <li>2. Expand your job preferences and location settings</li>
                    <li>3. Add more skills and certifications to your profile</li>
                    <li>4. Check that your resume is properly uploaded and parsed</li>
                    <li>5. Contact support for personalized assistance</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started with Kandu?</h2>
              <p className="text-purple-100 mb-6">
                Join thousands of job seekers who are already using Kandu to land their dream jobs.
              </p>
              <a 
                href="https://app.kandujobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                <span>Try Kandu Free</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kandu
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your AI-powered job search assistant
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 mt-6">
              © 2025 Kandu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default KanduFAQ;

