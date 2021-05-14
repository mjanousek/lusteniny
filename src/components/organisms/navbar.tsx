import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import * as React from "react";
import logo from "../../images/logo/Logo_name.svg";
import { ExternalLink } from "../atoms";

export default function Navbar() {
  return (
    <nav className="text-gray-800 body-font bg-white border-b-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 relative z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center space-y-4 md-space-y-0">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} alt="Luštěniny" className="h-12" />
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-8">
          <Link to="/" className="hover:text-green-600 transition-all">
            <FontAwesomeIcon icon="home" size="lg" className="mr-2" />
            Domů
          </Link>
          <Link
            to="/udalosti"
            className="hover:text-green-600 transition-all"
          >
            Události
          </Link>
          <ExternalLink
            href="https://www.facebook.com/lusteniny"
            className="hover:text-green-600 transition-all"
            title="Facebook - @lusteniny"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
          </ExternalLink>
          <ExternalLink
            href="https://www.m.me/lusteniny/"
            className="hover:text-green-600 transition-all"
            title="Messenger - @lusteniny"
          >
            <FontAwesomeIcon icon={["fab", "facebook-messenger"]} size="lg" />
          </ExternalLink>
        </div>
      </div>
    </nav>
  );
}
