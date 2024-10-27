import React from "react";

interface SEOProps {
  title: string;
  name: string;
  content: string;
  lang: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  name,
  content,
  lang = "pl",
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name={name} content={content} lang={lang} />
    </>
  );
};
