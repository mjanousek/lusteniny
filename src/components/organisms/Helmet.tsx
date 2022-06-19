import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

type Props = {
  title: string;
  description: string;
};

export const Helmet = ({ title, description }: Props) => (
  <ReactHelmet>
    <html lang="cs" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta charSet="utf-8" />
    <title>{title}</title>

    <meta name="copyright" content="© 2020 - 2022 Luštěniny" />
    <meta name="rating" content="14 years" />

    <meta name="title" content={`${title}  | Luštěniny`} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lusteniny.eu" />
    <meta property="og:site_name" content={`${title}  | Luštěniny`} />
    <meta property="og:title" content={`${title}  | Luštěniny`} />
    <meta property="og:description" content={description} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://lusteniny.eu" />
    <meta property="twitter:title" content={`${title}  | Luštěniny`} />
    <meta property="twitter:description" content={description} />
  </ReactHelmet>
);
