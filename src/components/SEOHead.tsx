import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  author?: string;
  schema?: object;
}

export default function SEOHead({
  title = 'Nereu Lima Advogados — Mais de 50 anos de advocacia criminal',
  description = 'Sociedade de Advogados especializada exclusivamente em Direito Penal e Processo Penal em Porto Alegre e Tribunais Superiores (OAB/RS 2828). Sede na Praça da Matriz.',
  canonicalPath = '/',
  ogType = 'website',
  ogImage = '/assets/official/banner_vistaescritorionereulima_principal.jpg',
  publishedTime,
  author,
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes('Nereu Lima Advogados')
      ? title
      : `${title} | Nereu Lima Advogados`;

    document.title = fullTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const fullUrl = `https://nereulima.com.br${canonicalPath}`;
    canonical.setAttribute('href', fullUrl);

    // Open Graph
    const updateOg = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    updateOg('og:title', fullTitle);
    updateOg('og:description', description);
    updateOg('og:url', fullUrl);
    updateOg('og:type', ogType);
    updateOg('og:image', ogImage.startsWith('http') ? ogImage : `https://nereulima.com.br${ogImage}`);

    // JSON-LD Structured Data
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: 'Nereu Lima Advogados Associados',
      description: 'Escritório de advocacia criminal tradicional de Porto Alegre fundado pelo Dr. Nereu Lima. Atuação em Direito Penal e Tribunais Superiores.',
      url: 'https://nereulima.com.br',
      telephone: '+55-51-3224-6966',
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Praça Mal. Deodoro nº 130 Cj. 1001',
        addressLocality: 'Porto Alegre',
        addressRegion: 'RS',
        postalCode: '90010-300',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -30.0336,
        longitude: -51.2312,
      },
      founder: {
        '@type': 'Person',
        name: 'Dr. Nereu Lima',
        jobTitle: 'Advogado Criminalista, Ex-Presidente da OAB/RS',
      },
      member: [
        { '@type': 'Person', name: 'Dr. Nereu Lima', jobTitle: 'Sócio Fundador' },
        { '@type': 'Person', name: 'Dr. Nereu Lima Filho', jobTitle: 'Sócio' },
        { '@type': 'Person', name: 'Dr. Cristiano Kruel', jobTitle: 'Sócio' },
      ],
    };

    const targetSchema = schema || defaultSchema;

    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'jsonld-schema');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(targetSchema);
  }, [title, description, canonicalPath, ogType, ogImage, publishedTime, author, schema]);

  return null;
}
