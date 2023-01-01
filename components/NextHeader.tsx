import Head from "next/head";

const NextHeader = ({
  title = "Xtravaganza",
  description = `SSA Govt. College Pernem, Department Of Commerce Organises 1 Day Inter Collegiate Event Xtravaganza.`,
  image = "https://www.xtravaganza.in/images/xtravaganza_dark.webp",
  siteUrl = "https://www.xtravaganza.in",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="theme-color" content="#40434e" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={image} />

      <meta property="og:site_name" content={"Xtravaganza"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="article" />

      {image && <meta name="twitter:card" content="summary_large_image" />}
      <meta name="twitter:site" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title} />}

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
    </Head>
  );
};

export default NextHeader;
