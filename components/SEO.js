import Head from "next/head";

function SEO({ title }) {
  // customize meta properties
  // you can pass them as an argument like title in case you want to change for each page
  const description = process.env.siteDescription;
  const keywords = process.env.siteKeywords;
  const siteURL = process.env.siteUrl;
  const twitterHandle = process.env.twitterHandle;
  const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={siteURL} key="ogurl" />
      <meta property="og:image" content={imagePreview} key="ogimage" />
      <meta property="og:site_name" content={siteURL} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>

      <meta name="theme-color" content="#DB2777" />
    </Head>
  );
}

export default SEO;
