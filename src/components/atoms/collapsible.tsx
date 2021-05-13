import React, { useState } from "react";

type Props = {
  toggleRenderer: (isExpanded: boolean) => React.ReactNode;
  content: React.ReactNode;
  ariaId: string;
};

export default function Collapsible(props: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const className = isExpanded ? "" : "h-0 overflow-hidden";

  return (
    <div className="w-full">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={props.ariaId}
      >
        {props.toggleRenderer(isExpanded)}
      </div>
      <div className={className} role="region" id={props.ariaId}>
        {props.content}
      </div>
    </div>
  );
}
