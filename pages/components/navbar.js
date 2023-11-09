import link from "next/link"

const navbar = () => {
    return {
        <nav>
        <div className={styles.links}
        <link href="/"><a>info</a></link>
        <link href="gallery"><a>gallery</a></link>
        <link href="contact"><a>contact</a></link>
        </div>
        </nav>

    };
};
export default navbar; 