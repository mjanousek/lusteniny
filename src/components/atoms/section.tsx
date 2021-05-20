import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  id?: string;
};

export default function Section(props: Props) {
  return (
    <section className="py-12" id={props.id}>
      <div className="container mx-auto px-4">{props.children}</div>
    </section>
  );
}
