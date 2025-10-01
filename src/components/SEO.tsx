import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title = 'Exclusive - Premium Ghanaian Streetwear',
  description = 'Discover premium Ghanaian streetwear that celebrates culture with bold designs. Shop exclusive collections featuring authentic heritage and modern style.',
  keywords = 'Ghanaian streetwear, African fashion, premium clothing, Ghana fashion, exclusive streetwear, African apparel',
  image = '/src/assets/loggo.jpg',
  type = 'website'
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = 'https://exclusivecpt.vercel.app'; // Update with your actual domain
  const currentUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else if (name) {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });
  }, [title, description, keywords, image, currentUrl, type]);

  return null;
};

export default SEO;

