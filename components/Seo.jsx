import Head from "next/head";

export default function Seo({ title = null, description = null, children }) {
  return (
    <Head>
      <title>{title ? `${title} | Dartology` : "Dartology"}</title>
      {description && <meta name="description" content={description} />}
      {children}
    </Head>
  );
}
