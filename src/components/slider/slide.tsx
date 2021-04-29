import * as React from "react";

type Props = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function Slide(props: Props) {
  return (
    <div>
      <div className="hero is-fullheight">
        <div
          className="hero-body"
          style={{
            backgroundImage: `url("${props.image}")`,
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <h1 className="title is-1 is-centered">{props.title}</h1>
            <p className="subtitle">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
