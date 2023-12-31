const colorNames = {
    white: "#ffffff",
    whiteLilac: "#fbfbfe",
    scienceBlueMoreTransparent: "rgba(3, 102, 214, 0.2)",
    scienceBlueTransparent: "rgba(3, 102, 214, 0.5)",
    scienceBlue: "#0366d6",
    anakiwa: "#8cc2ff",
    dodgerBlue: "#2188ff",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    ironMoreTransparent: "rgba(209, 213, 218, 0.1)",
    parsleyTransparent: "rgba(20, 70, 32, 0.2)",
    shipCove: "#6d93be",
    mercury: "#e5e5e5",
    slateGrey: "#6e7e91",
    mineShaftTransparent: "rgba(54, 54, 54, 0.72)",
    mineShaft: "#252525",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0,03)",
    borderRadius: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineShaft,
        global: {
            background: colorNames.whiteLilac,
            textSecondary: colorNames.slateGrey,
        },
        button: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
        },
        headerLine: colorNames.ironTransparent,
        boxBackground: colorNames.white,
        tile: {
            header: colorNames.scienceBlue,
            border: colorNames.ironTransparent,
            borderHover: colorNames.scienceBlueMoreTransparent,
        },
        themeSwitch: {
            icon: colorNames.white,
            background: colorNames.mercury,
            border: colorNames.ironMoreTransparent,
        }
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        global: {
            background: colorNames.mineShaft,
            textSecondary: colorNames.white,
        },
        button: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.shipCove,
        },
        headerLine: colorNames.mercury,
        boxBackground: colorNames.mineShaftTransparent,
        tile: {
            header: colorNames.white,
            border: colorNames.ironMoreTransparent,
            borderHover: colorNames.scienceBlueTransparent,
        },
        themeSwitch: {
            icon: colorNames.mineShaft,
            background: colorNames.mineShaftTransparent,
            border: colorNames.white,
        }
    },
};