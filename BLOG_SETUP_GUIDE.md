# Blog Setup Guide for Kandu Landing Page

This guide explains how the blog system is set up and how to add new blog posts for SEO optimization.

## 🏗️ Current Blog Structure

### Blog Components Created

1. **`BlogPage.tsx`** - Main blog listing page (`/blog`)
2. **`AIJobAutomationBlog.tsx`** - AI Job Automation article (`/blog/ai-job-automation`)
3. **`InstantApplyWithAI.tsx`** - Instant Apply with AI article (`/blog/instant-apply-ai`)
4. **`AIJobApplicationTool.tsx`** - AI Job Application Tool review (`/blog/ai-job-application-tool`)
5. **`LinkedInJobAutomation.tsx`** - LinkedIn Job Automation guide (`/blog/linkedin-job-automation`)

### Routing Setup

The blog uses React Router for client-side routing:

```tsx
// src/App.tsx
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/blog" element={<BlogPage />} />
  <Route path="/blog/ai-job-automation" element={<AIJobAutomationBlog />} />
  <Route path="/blog/instant-apply-ai" element={<InstantApplyWithAI />} />
  <Route path="/blog/ai-job-application-tool" element={<AIJobApplicationTool />} />
  <Route path="/blog/linkedin-job-automation" element={<LinkedInJobAutomation />} />
</Routes>
```

### Vercel Configuration

The `vercel.json` file includes specific rewrites for blog routes:

```json
{
  "source": "/blog",
  "destination": "/index.html"
},
{
  "source": "/blog/(.*)",
  "destination": "/index.html"
}
```

## 📝 How to Add New Blog Posts

### Step 1: Create the Blog Post Component

Create a new file in `src/components/` with the naming convention: `[TopicName].tsx`

Example: `ResumeOptimizationAI.tsx`

### Step 2: Use the Blog Post Template

Use this template structure for new blog posts:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SEO from './SEO';

const [ComponentName]: React.FC = () => {
  return (
    <>
      <SEO 
        title="[SEO Title] | Kandu"
        description="[SEO Description]"
        keywords="[SEO Keywords]"
        url="https://kandujobs.com/blog/[slug]"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "[Article Title]",
          "description": "[Article Description]",
          "image": "https://kandujobs.com/blog/[image-name].jpg",
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
          "datePublished": "[YYYY-MM-DD]",
          "dateModified": "[YYYY-MM-DD]",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://kandujobs.com/blog/[slug]"
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-sm font-semibold text-purple-600 mb-4">[Category] Guide</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                [Article Title]
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                [Article Description]
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>Published: [Date]</span>
                <span>•</span>
                <span>[X] min read</span>
                <span>•</span>
                <span>Updated: [Date]</span>
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
                <li><a href="#section-1" className="hover:text-purple-600 transition-colors">1. [Section Title]</a></li>
                <li><a href="#section-2" className="hover:text-purple-600 transition-colors">2. [Section Title]</a></li>
                {/* Add more sections */}
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            {/* Add your content sections here */}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          {/* Footer content */}
        </footer>
      </div>
    </>
  );
};

export default [ComponentName];
```

### Step 3: Add the Route

Add the new route to `src/App.tsx`:

```tsx
import [ComponentName] from './components/[ComponentName]';

// In the Routes section:
<Route path="/blog/[slug]" element={<[ComponentName] />} />
```

### Step 4: Update BlogPage.tsx

Add the new blog post to the `blogPosts` array in `BlogPage.tsx`:

```tsx
const blogPosts: BlogPost[] = [
  // ... existing posts
  {
    id: '[slug]',
    title: '[Article Title]',
    description: '[SEO Description]',
    excerpt: '[Short excerpt for the blog listing]',
    date: '[YYYY-MM-DD]',
    readTime: '[X] min read',
    image: '/blog/[image-name].jpg',
    url: '/blog/[slug]',
    category: '[Category]',
    featured: false // Set to true if you want it featured
  }
];
```

## 🎯 SEO Best Practices

### 1. Title Tags
- Include primary keyword
- Keep under 60 characters
- Make it compelling and clickable

### 2. Meta Descriptions
- Include primary and secondary keywords
- Keep under 160 characters
- Include a call-to-action

### 3. Keywords
- Primary keyword in title and first paragraph
- Secondary keywords throughout the content
- Use long-tail keywords for better targeting

### 4. Structured Data
- Always include Article schema markup
- Add relevant dates and author information
- Include proper image URLs

### 5. Content Structure
- Use H1, H2, H3 headings properly
- Include internal links to other blog posts
- Add external links to authoritative sources
- Use bullet points and numbered lists

## 📊 Blog Post Categories

Current categories used:
- **AI & Automation** - AI-related job search topics
- **Job Search Tips** - General job search advice
- **Tool Reviews** - Reviews of job search tools
- **LinkedIn Tips** - LinkedIn-specific advice
- **Resume Tips** - Resume optimization advice
- **Productivity** - Time-saving and efficiency tips

## 🔗 Internal Linking Strategy

### Link to Other Blog Posts
Include relevant internal links within your blog posts:

```tsx
<a href="/blog/ai-job-automation" className="text-purple-600 hover:text-purple-700">
  Learn more about AI job automation
</a>
```

### Link to Main Landing Page
Always include a CTA back to the main landing page:

```tsx
<a 
  href="/"
  className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
>
  <span>Get Started with Kandu</span>
  <FiArrowRight className="w-4 h-4" />
</a>
```

## 📈 Analytics and Tracking

### Google Analytics
The blog posts include proper tracking through the SEO component.

### Search Console
Submit new blog posts to Google Search Console for indexing.

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deploy to Vercel
The blog will automatically deploy when you push to the main branch.

## 📝 Content Guidelines

### Writing Style
- Write in a conversational, helpful tone
- Use clear, concise language
- Include practical examples and actionable tips
- Target job seekers at different career stages

### Content Length
- Aim for 1,500-3,000 words per article
- Include at least 3-5 main sections
- Use subheadings to break up content

### Visual Elements
- Use emojis sparingly but effectively
- Include code blocks for technical content
- Use tables for comparisons
- Add callout boxes for important information

## 🔍 Keyword Research

### Primary Keywords to Target
- "AI job automation"
- "automated job applications"
- "LinkedIn job search"
- "resume optimization"
- "job search automation"
- "instant apply jobs"
- "AI job matching"

### Long-tail Keywords
- "how to automate LinkedIn job search"
- "best AI job application tools 2024"
- "automated job application software"
- "LinkedIn job automation strategies"

## 📱 Mobile Optimization

All blog posts are mobile-responsive and include:
- Responsive typography
- Touch-friendly buttons
- Optimized images
- Fast loading times

## 🎨 Brand Consistency

### Colors
- Primary: Purple (#7C3AED) to Blue (#2563EB) gradient
- Text: Gray (#374151)
- Background: White and light grays

### Typography
- Headings: Bold, large
- Body: Regular weight, readable
- Links: Purple with hover effects

### Logo Usage
- Include Kandu logo in headers
- Use consistent branding throughout

This blog system is designed for maximum SEO impact while maintaining a professional, user-friendly experience for job seekers.
