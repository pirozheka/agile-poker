import Head from 'next/head';

const MetaTags = ({ title, description, image }) => {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Другие мета-теги OpenGraph */}
    </Head>
  );
};

export default MetaTags;
