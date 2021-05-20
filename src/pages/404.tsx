import * as React from "react";
import { Link } from "gatsby";

import data from "../content/index.yaml";
import Page from "../components/templates/page";
import { Button, Section, SectionHeader } from "../components/atoms";

// markup
const NotFoundPage = () => {
  return (
    <Page title={data.title} description={data.description}>
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
    </Page>
  );
};

export default NotFoundPage;
