import * as React from 'react';

export default function ExternalLink(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) {
  return (
    <a {...props} rel="external noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
}
