import { getImage } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalData, PageData } from '../../types/content';
import { Navbar, Footer } from './';

type Props = PageData &  GlobalData &{
  floatingNavbar?: boolean;
  children: ReactNode;
};

export function Layout({
  title,
  description,
  image,
  schema,
  floatingNavbar,
  children,
  facebookUrl,
  messengerUrl,
  host
}: Props) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const imageUrl = host + getImage(image.childImageSharp).images.fallback.src;

  return (
    <>
      <Helmet>
        <html lang="cs" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <title>{title} | Luštěniny</title>
        <link rel="canonical" href={host} />

        <meta name="copyright" content="© 2020 - 2021 Luštěniny" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="14 years" />

        <meta name="title" content={`${title}  | Luštěniny`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={`${title}  | Luštěniny`} />
        <meta property="og:title" content={`${title}  | Luštěniny`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={`${title}  | Luštěniny`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />

        {schema?.map((object) => (
          <script type="application/ld+json" key={object.key}>
            {JSON.stringify(object, null, 4)}
          </script>
        ))}
      </Helmet>
      <div className="min-h-screen flex flex-col bg-indigo-50 ">
        <Navbar facebookUrl={facebookUrl} messengerUrl={messengerUrl} isFixed={floatingNavbar} />
        <main className="flex-grow">{children}</main>
        <Footer
          facebookUrl={facebookUrl}
          messengerUrl={messengerUrl}
        />
      </div>
    </>
  );
}
