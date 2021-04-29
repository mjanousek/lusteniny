import * as React from "react";
import { Helmet } from "react-helmet";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import logo from "../images/logo/Logo_White_Name.svg";
import SocialLinks from "./socialLinks";

config.autoAddCss = false;
library.add(fab, fas);

type Props = {
  children: JSX.Element;
};

export default function Layout(props: Props) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const host = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet></Helmet>
      <header></header>
      <main>{props.children}</main>
      <footer className="footer has-text-centered has-background-gradient-primary mt-6">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6-tablet is-4-desktop">
              <img src={logo} alt="Luštěniny" className="mb-5" />
              <SocialLinks isCentered color="light" />
              <p className="has-text-white">© Copyright 2020 - {new Date().getFullYear()} Luštěniny.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
