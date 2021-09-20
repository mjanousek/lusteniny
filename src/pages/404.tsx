import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { Button, Section, SectionHeader } from '../components/atoms';
import { HomePageQuery } from '../types/content';
import { Layout } from '../components/organisms/Layout';

// markup
const NotFoundPage = () => {
  const query = useStaticQuery<HomePageQuery>(graphql`
    {
      file(name: { eq: "index" }) {
        childContentYaml {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [PNG], width: 1400, aspectRatio: 1.5)
            }
          }
        }
      }
      global: file(name: { eq: "global" }) {
        childContentYaml {
          facebookUrl
          messengerUrl
          host
        }
      }
    }
  `);

  return (
    <Layout {...query.file.childContentYaml} {...query.global.childContentYaml}>
      <Section>
        <SectionHeader
          level={1}
          title="Stránka nenalezena"
          subtitle="404"
          description="Omlouváme se, ale vámi požadovaná stránka nebyla nalezena"
          align="center"
        />
        <div className="flex justify-center">
          <Link to="/">
            <Button icon="home">Zpět na úvodní stránku</Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
