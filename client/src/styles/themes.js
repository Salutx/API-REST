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
    paragraph: "#646464",
    iconBackground: "rgba(15, 25, 35, 0.1)",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    boxShadowCard: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
    banner: `${blackBanner}`,
    border: "1px solid #E7E7E7",
    borderHr: "1px solid #EEEEEE",
    placeholder: "#838383",

    fixedOpacity: "rgba(255, 255, 255, 0.8)",
    inactive: "background: #E9E9E9; color: #949494; cursor: not-allowed;",
    unmarked: "background: white; cursor: pointer; color: black; border: 1px solid #E7E7E7 !important; :hover { border: 1px solid #00CDB4 !important; } ",
    marked: "background: white; border: 1px solid var(--primary-color) !important; color: var(--primary-color); cursor: pointer;",
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
    placeholder: "#6C6C6C",

    fixedOpacity: "rgba(37, 47, 56, .5)",

    inactive: "background: #14151A; color: #4D4D51 !important; cursor: not-allowed;",
    unmarked: "background: linear-gradient(125.69deg, #048273 20%, #134370 80%); cursor: pointer; :hover { border: 1px solid #00CDB4 !important; } ",
    marked: "background: linear-gradient(124.78deg, #022723 0%, #12436F 100%); border: 1px solid #00CDB4 !important; cursor: pointer;",
};
