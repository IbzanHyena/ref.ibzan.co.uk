import Head from 'next/head'

const luma = (hex: string): number => {
    hex = hex.substring(1); // string leading #
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const link = (href: string, contents: string | JSX.Element): JSX.Element => (
    <span><a href={href}>{contents}</a><span className={"print-only"}> ({href})</span></span>
);

const colour = (hex: string): JSX.Element => {
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
};

const colourRow = (name: string, hex: string): JSX.Element => (
    <tr>
        <td>{name}</td>
        <td>{colour(hex)}</td>
    </tr>
);

const colourTable = (): JSX.Element => (
    <span>
            <h2 className={"centre-text"}>Colours</h2>
            <div className={"centre-margin"}>
                <table className={"colourTable"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Hex code</th>
                    </tr>
                    </thead>
                    <tbody>
                    {colourRow("Brown 1", "90654a")}
                    {colourRow("Brown 2", "886c58")}
                    {colourRow("Tan", "c5a68d")}
                    {colourRow("Pastel blue", "5c5baa")}
                    {colourRow("Dark blue", "2f1e82")}
                    {colourRow("Dark brown", "302222")}
                    </tbody>
                </table>
            </div>
        </span>
);

const refs = (): JSX.Element => (
    <span>
            <h2 className={"centre-text"}>Reference Sheet</h2>
            <div className="reftabs">
                <input type="radio" name="tabset" id="flat-ref" aria-controls="flat-ref" className={"print-hide"}
                       defaultChecked/>
                <label htmlFor="flat-ref" className={"print-hide"}>Flat</label>
                <input type="radio" name="tabset" id="painted-ref" aria-controls="painted-ref"
                       className={"print-hide"}/>
                <label htmlFor="painted-ref" className={"print-hide"}>Painted</label>

                <div className="reftab-panels">
                    <section id="flat-ref" className="reftab-panel">
                        <img
                            src={"https://imagedelivery.net/nLmn9dzvNkBD5T8WEc0EPw/9616a5b3-af0e-461e-e183-db4770624d00/full"}
                            alt={"A flat reference sheet for Ibzan"} className={"ref"}/>
                    </section>
                    <section id="painted-ref" className="reftab-panel">
                        <img
                            src={"https://imagedelivery.net/nLmn9dzvNkBD5T8WEc0EPw/7d8c2a08-c3a3-4c33-da79-fef398cff800/full"}
                            alt={"A painted reference sheet for Ibzan"} className={"ref"}/>
                    </section>
                </div>
            </div>
            <p className={"centre-text"}><i>Art by {link("https://runtyink.com", "Chibity")}.</i></p>
        </span>
);

const gotchas = (): JSX.Element => {
    function item(brief: string, long: string) {
        return <li><b>{brief}</b> &mdash; {long}</li>
    }

    return (
        <span>
            <h3>Some gotchas</h3>
            <p>
                These are some common things to look out for in Ibzan's design.
            </p>
            <ul>
                {
                    [
                        ["Ears", "Ibzan's ears are round, not pointy."],
                        ["Muzzle", "Ibzan's muzzle is relatively flat. It slopes downwards from his forehead quickly and then continues almost flat until his nose."],
                        ["Spots", "Ibzan's spots are mostly circular in shape, not too long in any particular direction"],
                        ["Fur", "Most of Ibzan's fur is relatively short. It shouldn't be visibly hanging (unless wet), save for the longer bits of fur he has around his neck and back."],
                    ].map(a => item(a[0], a[1]))}
            </ul>
        </span>
    )
};

export default (): JSX.Element => (
    <>
        <Head>
            <title>Ibzan Reference</title>
        </Head>
        <main>
            <h1 className={"centre-text"}>Ibzan Reference</h1>
            <p className={"centre-text"}><i>he/him, ish</i></p>
            <p>
                Ibzan is a spotted hyena (<i>Crocuta crocuta</i>).
                Most of his fur is of a natural colour, save for some blue highlights &mdash; notably, his hair, paw
                pads, and tail.
            </p>
            <p>
                Physically, Ibzan is typically of regular proportions.
                Around 180cm or 5'11" tall, and weighing about 80kg or 12.5 stones.
                His musculature is generally either reasonably well-toned or androgynous; Ibzan is rarely extremely
                muscled or chubby.
                His legs are almost always digitigrade, rather than plantigrade.
            </p>
            <p>
                Ibzan's muzzle is dark brown, transitioning to the tan fur all over his belly and inner legs by the
                time it reaches his face proper.
                The muzzle's shape is also fairly boxy &mdash; it's not especially pointy or rounded.
                <br/>
                His ears, however, are quite round, and his eyes are brown.
            </p>
            <p>
                Ibzan's hair is usually scruffy and unkempt.
                Occasionally, he combs it nicely.
                When growing long, his hair develops slight waves to it.
                His hair continues along the back of his neck, leading to a wider "V"-shaped patch of blue fur on
                his back.
            </p>
            <p>
                As a <i>spotted</i> hyena, Ibzan is naturally covered in spots.
                They are dark brown and appear all over his arms, legs, tail, neck, and back.
                Notably, the spots only appear on his darker fur &mdash; not on his belly.
            </p>
            <p>
                The blue highlight on Ibzan's tail can be depicted as either a dipstick style or as travelling all
                the way along the underside to the base of the tail.
                A dipstick tail is a safe bet, though.
            </p>
            <p>
                Ibzan wears a variety of clothing, but his most common outfit is a khaki shirt worn loosely, a black
                leather jacket, and some blue jeans.
                Well-worn, but not ripped.
            </p>
            {gotchas()}
            {refs()}
            {colourTable()}
        </main>
    </>
)
