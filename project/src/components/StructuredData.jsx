import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "3rd Eye Solutions",
      "url": "https://www.3rdeyesolutions.com",
      "logo": "https://www.3rdeyesolutions.com/logo.png",
      "description": "Leading retail management software provider in India",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      "sameAs": [
        "https://www.facebook.com/3rdeyesolutions",
        "https://www.twitter.com/3rdeyesolutions",
        "https://www.linkedin.com/company/3rdeyesolutions"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "3rd Eye Solutions - Retail Management Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Windows, Android",
      "offers": {
        "@type": "Offer",
        "price": "999",
        "priceCurrency": "INR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "500"
      }
    },
    
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data?.breadcrumbs || []
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas[type] || schemas.organization)}
      </script>
    </Helmet>
  );
};

export default StructuredData;