import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import logo from "../../images/logo/Logo_name.svg";
import { ExternalLink } from "../atoms";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-white border-t-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} alt="Luštěniny" className="h-12" />
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 border-gray-200 dark:border-gray-600 sm:py-2 sm:mt-0 mt-4 space-x-2">
          <span>© 2020 Luštěniny </span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start  space-x-8">
          <ExternalLink href="https://www.facebook.com/lusteniny">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
          </ExternalLink>
          <ExternalLink href="https://www.m.me/lusteniny/">
            <FontAwesomeIcon icon={["fab", "facebook-messenger"]} size="lg" />
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
}
