import * as React from "react";
import Layout from "../components/layout";

export default function EventPage({ pageContext: event }) {
  return (
    <Layout>
      <article>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6">
                <header className="has-text-centered mb-6">
                  <time className="tag is-rounded" dateTime={event.date}>
                    {new Date(event.date).toLocaleDateString("cs")}
                  </time>
                  <h1 className="title is-1">{event.title}</h1>
                  <p className="subtitle is-6">{event.description}</p>
                </header>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
            <div className="container">
                
            </div>
        </section>
      </article>
    </Layout>
  );
}
