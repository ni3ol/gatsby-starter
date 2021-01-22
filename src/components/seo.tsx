import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
      }
    }
  }
`;

export const SEO = ({
  title,
  description,
  image,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
}) => {
  const { site } = useStaticQuery(query);
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: siteUrl,
  };

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'og:title',
          content: seo.title,
        },
        {
          name: 'description',
          content: seo.description,
        },
        {
          name: 'og:description',
          content: seo.description,
        },
        {
          name: 'og:image',
          content: seo.image,
        },
        {
          name: 'og:url',
          content: seo.url,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        ...(keywords
          ? [
              {
                name: 'keywords',
                content: keywords.join(', '),
              },
            ]
          : []),
      ]}
    />
  );
};
