import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../content/global.yaml";

type Props = {
  isCentered?: boolean;
  isExpanded?: boolean;
  className?: string;
  color?: "primary" | "info" | "dark" | "light" | "success" | "warning";
};

export default function SocialLinks(props: Props) {
  const className =
    "buttons" + (props.isCentered ? " is-centered " : " ") + props.className;

  const color = props.color ? props.color : "primary";
  const buttonClassName = `button is-${color}`;

  return (
    <div className={className}>
      <a href={data.facebookUrl} className={buttonClassName}>
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          className={props.isExpanded ? "mr-2" : ""}
        />
        {props.isExpanded ? "Facebook" : ""}
      </a>
      <a href={data.messengerUrl} className={buttonClassName}>
        <FontAwesomeIcon
          icon={["fab", "facebook-messenger"]}
          className={props.isExpanded ? "mr-2" : ""}
        />
        {props.isExpanded ? "Messenger" : ""}
      </a>
    </div>
  );
}
