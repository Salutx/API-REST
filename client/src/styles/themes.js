import whiteBanner from '../assets/images/cps-branco.png';
import blackBanner from '../assets/images/cps-preto.png';

export const lightTheme = {
    // START
    background: "#F3F2F7",
    backgroundStart: "#FFFFFF",
    title: "#0F1923",

    // ASSETS
    backgroundAssets: "#F3F2F7",
    backgroundStartAssets: "#252F38",
    body: "#FFFFFF",
    titleAssets: "var(--primary-color-dark)",
    card: "#FFFFFF",
    paragraph: "#949494",
    iconBackground: "rgba(15, 25, 35, 0.1)",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    boxShadowCard: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    banner: `${blackBanner}`,
    border: "1px solid #E7E7E7",
};

export const darkTheme = {
    // START
    background: "#0F1923",
    backgroundStart: "#0F1923",
    title: "#FFFFFF",

    // ASSETS
    backgroundAssets: "#0f1d23",
    backgroundStartAssets: "#ffffff",
    body: "#252F38",
    titleAssets: "#FFFFFF",
    card: "#252F38",
    paragraph: "#CBCBCB",
    iconBackground: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 16px 50px 5px rgba(0, 205, 180, 0.2)",
    boxShadowCard: "",
    banner: `${whiteBanner}`,
    border: "1px solid #303030",
};
