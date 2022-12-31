import Head from "next/head";

const NextHeader = ({
  title = "Xtravaganza",
  description = `It is a state level event organised, aimed at enhancing academia and cultural
  knowledge from diverse disciplines filled with excitement and entertainment. It
  intends to build multiple skills and play an integral role in collegiate experience.`,
  image = "/images/extravaganza_dark.webp",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="theme-color" content="#AA7E50" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      <meta property="og:site_name" content="Xtravaganza" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:type" content="article" />}

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}
      {image && <meta name="twitter:card" content="summary_large_image" />}
      {image && <meta name="twitter:image:alt" content={title} />}

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
    </Head>
  );
};

export default NextHeader;
