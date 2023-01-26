import Head from "next/head";

function Seo({
  title = "Beydağı İnşaat",
  description = "Beydağı İnşaat",
  url = "https://www.beydaginsaat.com/",
  image = '',
  path=""
}) {
  return (
    <Head>
       <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}

export default Seo;
