import * as React from "react";
import { Footer, Navbar } from "../organisms";

type Props = {
  children?: React.ReactNode;
};

export default function Page(props: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-900 flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
}
