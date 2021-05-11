import * as React from "react";

type Props = {
    children?: React.ReactNode
}

export default function Section(props: Props){
    return <section className="py-12">
        <div className="container mx-auto px-4">
            {props.children}
        </div>
    </section>
}