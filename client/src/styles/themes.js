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
    cardProfile: "#FFFFFF",
    paragraph: "#949494",
    iconBackground: "rgba(15, 25, 35, 0.1)",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    boxShadowCard: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
    banner: `${blackBanner}`,
    border: "1px solid #E7E7E7",
    borderHr: "1px solid #E7E7E7",
    placeholder: "#838383",
};

export const darkTheme = {
    // START
    background: "#1C1D22",
    backgroundStart: "#1C1D22",
    title: "#FFFFFF",

    // ASSETS
    backgroundAssets: "#0f1d23",
    backgroundStartAssets: "#ffffff",
    body: "#252F38",
    titleAssets: "#FFFFFF",
    card: "#14151A",
    cardProfile: "#2D3339",
    paragraph: "#CBCBCB",
    iconBackground: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 16px 50px 5px rgba(0, 205, 180, 0.2)",
    boxShadowCard: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
    banner: `${whiteBanner}`,
    border: "1px solid #424242",
    borderHr: "1px solid #21222A",
    placeholder: "#6C6C6C"
};
