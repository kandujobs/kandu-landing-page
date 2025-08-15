import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Kandu - AI-Powered Job Search & Auto-Apply Platform | Find Your Dream Job",
  description = "Apply to hundreds of jobs automatically with AI. Smart job matching, application tracking, and personalized recommendations. Save hours on your job search with Kandu's intelligent automation.",
  keywords = "job search, auto apply, AI jobs, career automation, job application, LinkedIn jobs, smart job matching, job tracking, career platform, AI assistant, job hunting, automated applications",
  image = "https://kandujobs.com/og-image.jpg",
  url = "https://kandujobs.com",
  type = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Kandu",
    "description": "AI-powered job search and auto-apply platform that helps users find and apply to jobs automatically with intelligent matching and tracking.",
    "url": "https://kandujobs.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free job search and application platform"
    },
    "creator": {
      "@type": "Organization",
      "name": "Kandu",
      "url": "https://kandujobs.com"
    },
    "featureList": [
      "AI-powered job matching",
      "Automatic job applications",
      "Application tracking",
      "Smart job recommendations",
      "LinkedIn integration",
      "Resume optimization"
    ],
    "screenshot": "https://kandujobs.com/screenshot.jpg",
    "softwareVersion": "1.0.0"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Kandu - AI-Powered Job Search Platform" />
      <meta property="og:site_name" content="Kandu" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Kandu - AI-Powered Job Search Platform" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(defaultStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
