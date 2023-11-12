import type { MDXComponents } from 'mdx/types'
import Image from "next/image";
import React from "react";

const luma = (hex: string): number => {
    hex = hex.substring(1); // strip leading #
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

function Colour({hex}: {hex: string}): JSX.Element {
    hex = "#" + hex
    const textColour = luma(hex) > 80 ? "#000000" : "#ffffff";
    return (
        <span className="colour" style={{backgroundColor: hex, color: textColour}}>
            {hex}
            <span className={"print-only"}>
                &nbsp;
                <svg className={"colour-rect"}>
                    <rect x={0} y={0} width={"100%"} height={"100%"} fill={hex}/>
                </svg>
            </span>
        </span>
    )
}

const ColourRow = ({name, hex}: {name: string, hex: string}): JSX.Element => (
    <tr>
        <td>{name}</td>
        <td><Colour hex={hex}/></td>
    </tr>
)

const ColourTable = ({elements}: {elements: [string, string][] }): JSX.Element =>  (
    <table className={"colourTable"}>
        <thead>
        <tr>
            <th>Name</th>
            <th>Hex code</th>
        </tr>
        </thead>
        <tbody>
        {
            elements.map(a => ColourRow({name: a[0], hex: a[1]}))
        }
        </tbody>
    </table>
)

const Link = ({href, children}: {href: string, children: React.ReactNode}): JSX.Element => (
    <span><a href={href}>{children}</a><span className={"print-only"}> ({href})</span></span>
)

const ArtistCredit = ({artist, site}: {artist: string, site: string}): JSX.Element => (
    <p className={"centre-text"}><i>Art by <Link href={site}>{artist}</Link>.</i></p>
)

const Refs = (): JSX.Element => (
    <span>
        <div className="reftabs">
            <input type="radio" name="tabset" id="flat-ref" aria-controls="flat-ref" className={"print-hide"}
                   defaultChecked/>
            <label htmlFor="flat-ref" className={"print-hide"}><span>Flat</span></label>

            <input type="radio" name="tabset" id="painted-ref" aria-controls="painted-ref" className={"print-hide"}/>
            <label htmlFor="painted-ref" className={"print-hide"}><span>Painted</span></label>

            <div className="reftab-panels">
                <section id="flat-ref" className="reftab-panel">
                    <img
                        src={"https://imagedelivery.net/nLmn9dzvNkBD5T8WEc0EPw/9616a5b3-af0e-461e-e183-db4770624d00/full"}
                        alt={"A flat reference sheet for Ibzan"}
                        className={"ref"}
                        loading={"eager"}
                    />
                </section>
                <section id="painted-ref" className="reftab-panel">
                    <img
                        src={"https://imagedelivery.net/nLmn9dzvNkBD5T8WEc0EPw/7d8c2a08-c3a3-4c33-da79-fef398cff800/full"}
                        alt={"A painted reference sheet for Ibzan"}
                        className={"ref"}
                        loading={"eager"}
                    />
                </section>
            </div>
        </div>
        <ArtistCredit artist={"Chibity"} site={"https://runtyink.com"}/>
    </span>
)

const SingleRefImage = ({src, artist, artistSite}: {src: string, artist: string, artistSite: string}): JSX.Element => (
    <div className={"no-break"}>
        <h2>Reference sheet</h2>
        <img src={src} className={"ref"}/>
        <ArtistCredit artist={artist} site={artistSite}/>
    </div>
)

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        Colour,
        ColourRow,
        ColourTable,
        Link,
        Refs,
        SingleRefImage,
        ...components,
    }
}
