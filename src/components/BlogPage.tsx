import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import SEO from './SEO';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-job-automation',
    title: 'AI Job Automation: The Future of Job Search | Complete Guide 2024',
    description: 'Discover how AI job automation is revolutionizing the job search process. Learn about automated job applications, AI-powered matching, and how to leverage technology for career success.',
    excerpt: 'Artificial intelligence is transforming how we search for jobs. From automated applications to intelligent matching, AI job automation is the future of career advancement.',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/blog/ai-job-automation.jpg',
    url: '/blog/ai-job-automation',
    category: 'AI & Automation',
    featured: true
  },
  {
    id: 'instant-apply-ai',
    title: 'Instant Apply with AI: How to Apply to 100+ Jobs in Minutes',
    description: 'Learn how AI-powered instant apply technology can help you apply to hundreds of jobs automatically. Save time and increase your chances of landing interviews.',
    excerpt: 'Stop spending hours on individual job applications. AI-powered instant apply technology can help you apply to hundreds of jobs in minutes.',
    date: '2024-01-10',
    readTime: '6 min read',
    image: '/blog/instant-apply-ai.jpg',
    url: '/blog/instant-apply-ai',
    category: 'Job Search Tips'
  },
  {
    id: 'ai-job-application-tool',
    title: 'The Ultimate AI Job Application Tool: Complete Review 2024',
    description: 'Comprehensive review of the best AI job application tools available in 2024. Compare features, pricing, and effectiveness for your job search.',
    excerpt: 'Find the perfect AI job application tool for your needs. We review the top platforms and their features to help you make the right choice.',
    date: '2024-01-05',
    readTime: '10 min read',
    image: '/blog/ai-job-application-tool.jpg',
    url: '/blog/ai-job-application-tool',
    category: 'Tool Reviews'
  },
  {
    id: 'linkedin-job-automation',
    title: 'LinkedIn Job Automation: Automate Your LinkedIn Job Search',
    description: 'Learn how to automate your LinkedIn job search process. Discover tools and strategies to find and apply to jobs more efficiently.',
    excerpt: 'LinkedIn is a goldmine for job opportunities. Learn how to automate your LinkedIn job search to find more opportunities faster.',
    date: '2023-12-28',
    readTime: '7 min read',
    image: '/blog/linkedin-job-automation.jpg',
    url: '/blog/linkedin-job-automation',
    category: 'LinkedIn Tips'
  },
  {
    id: 'resume-optimization-ai',
    title: 'AI Resume Optimization: Get Your Resume Past ATS Systems',
    description: 'Learn how AI can help optimize your resume to pass Applicant Tracking Systems (ATS) and get more interviews.',
    excerpt: 'Most resumes never reach human eyes. Learn how AI can help optimize your resume to pass ATS systems and get more interviews.',
    date: '2023-12-20',
    readTime: '9 min read',
    image: '/blog/resume-optimization-ai.jpg',
    url: '/blog/resume-optimization-ai',
    category: 'Resume Tips'
  },
  {
    id: 'job-search-automation',
    title: 'Job Search Automation: Save 20+ Hours Per Week',
    description: 'Discover how job search automation can save you 20+ hours per week while improving your chances of finding the perfect job.',
    excerpt: 'Stop manually searching for jobs. Learn how automation can save you 20+ hours per week while improving your job search results.',
    date: '2023-12-15',
    readTime: '5 min read',
    image: '/blog/job-search-automation.jpg',
    url: '/blog/job-search-automation',
    category: 'Productivity'
  }
];

const BlogPage: React.FC = () => {
  console.log('BlogPage component is rendering!');
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Job Search Blog - AI Automation, Career Tips & Job Search Strategies | Kandu"
        description="Discover the latest insights on AI job automation, career tips, and job search strategies. Learn how to leverage technology for career success with our expert blog."
        keywords="job search blog, AI job automation, career tips, job search strategies, automated job applications, AI career advice, job hunting tips"
        url="https://kandujobs.com/blog"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Kandu Job Search Blog",
          "description": "Expert insights on AI job automation, career tips, and job search strategies",
          "url": "https://kandujobs.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Kandu",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kandujobs.com/logo.png"
            }
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "url": `https://kandujobs.com${post.url}`,
            "author": {
              "@type": "Organization",
              "name": "Kandu"
            }
          }))
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Kandu Blog
                </span>
              </div>
              <a 
                href="/" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Job Search{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Expert insights on AI job automation, career tips, and job search strategies. 
                Learn how to leverage technology for career success.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <span>{blogPosts.length} Articles</span>
                <span>•</span>
                <span>Updated Weekly</span>
                <span>•</span>
                <span>Expert Insights</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-purple-100">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-purple-100 mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-purple-100 mb-6">
                  <div className="flex items-center space-x-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <a 
                  href={featuredPost.url}
                  className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  <span>Read Full Article</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-gray-600">Discover the latest insights on job search automation and career advancement.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <div className="text-4xl text-purple-600">📄</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiClock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <a 
                        href={post.url}
                        className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center space-x-1"
                      >
                        <span>Read</span>
                        <FiArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Job Search Tips
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get the latest insights on AI job automation and career advancement delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Subscribe
                </button>
              </div>
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

export default BlogPage;
