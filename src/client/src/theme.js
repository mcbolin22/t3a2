export const colorTokens = {
    laurel: {
        50: "#dafde0",
        100: "#b5fcc2",
        200: "#6af984",
        300: "#20f647",
        400: "#08c02a",
        500: "#05761a",
        600: "#056d18",
        700: "#046416",
        800: "#045b14",
        900: "#035212",
        950: "#034e11",
    },
    malachite: {
        50: "#e8feed",
        100: "#d1feda",
        200: "#a4fcb6",
        300: "#76fb91",
        400: "#49f96c",
        500: "#1bf848",
        600: "#07e533",
        700: "#06be2b",
        800: "#059722",
        900: "#037119",
        950: "#035d15",
    }
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                // palette for dark mode
                primary: {
                    dark: colorTokens.laurel[200],
                    main: colorTokens.laurel[500],
                    light: colorTokens.laurel[800]
                },
                neutral: {
                    dark: colorTokens.malachite[100],
                    main: colorTokens.malachite[200],
                    mediumMain: colorTokens.malachite[300],
                    medium: colorTokens.malachite[400],
                    light: colorTokens.malachite[700],
                },
                background: {
                    default: colorTokens.malachite[900],
                    alt: colorTokens.malachite[800]
                }
            } : {
                // palette for light mode
                primary: {
                    dark: colorTokens.laurel[700],
                    main: colorTokens.laurel[500],
                    light: colorTokens.laurel[50]
                },
                neutral: {
                    dark: colorTokens.malachite[700],
                    main: colorTokens.malachite[500],
                    mediumMain: colorTokens.malachite[400],
                    medium: colorTokens.malachite[300],
                    light: colorTokens.malachite[50],
                },
                background: {
                    default: colorTokens.malachite[100],
                    alt: colorTokens.malachite[50]
                }    
            })
        },
        typography: {
            fontFamily: ["Teko", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Teko", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Teko", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Teko", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Teko", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Teko", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Teko", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    };
};