import React from 'react'

import '@mantine/core/styles.css';
import {MantineProvider, createTheme, Button, Group, Text} from "@mantine/core";

const theme = createTheme({
    colors: {
        dark: [
            "#36393F",
        ],
        blue: [
            "#5865F2",
        ],
        cyan: [
            "#00AFF4",
        ],
    },
    fontFamily: "sans-serif",
});

const App = () => {
    const textColors = [
        "#4f545c", // ansi-30
        "#dc322f", // ansi-31
        "#859900", // ansi-32
        "#b58900", // ansi-33
        "#268bd2", // ansi-34
        "#d33682", // ansi-35
        "#2aa198", // ansi-36
        "#ffffff", // ansi-37
    ];
    const bgColors = [
        "#002b36", // ansi-40
        "#cb4b16", // ansi-41
        "#586e75", // ansi-42
        "#657b83", // ansi-43
        "#839496", // ansi-44
        "#6c71c4", // ansi-45
        "#93a1a1", // ansi-46
        "#fdf6e3", // ansi-47
    ]

    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <div
                style={{
                    backgroundColor: theme.colors.dark[0],
                    color: "white",
                    textAlign: "center",
                    padding: "0 40px 10px",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1>
                    Rebane's Discord <span style={{color: theme.colors.blue[0]}}>Colored</span> Text Generator
                </h1>

                <h3>
                    About
                </h3>
                <p>
                    This is a simple app that creates colored Discord messages using the ANSI color codes available on
                    the latest Discord desktop versions.<br/><br/>
                    To use this, write your text, select parts of it and assign colors to them, then copy it using the
                    button below, and send in a Discord message.
                </p>

                <h3>
                    Source Code
                </h3>
                <p>
                    This app runs entirely in your browser and the source code is freely available on <a
                    href="https://gist.github.com/rebane2001/07f2d8e80df053c70a1576d27eabe97c"
                    style={{color: theme.colors.cyan[0], textDecoration: "none"}}>GitHub</a>. Shout out to kkrypt0nn
                    for <a href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06"
                           style={{color: theme.colors.cyan[0], textDecoration: "none"}}>this guide</a>.
                </p>

                <h2>
                    Create your text
                </h2>

                <Group position="center" spacing="xs">
                    <Button color="#4f545c">
                        Reset All
                    </Button>
                    <Button color="#4f545c">
                         <span style={{fontWeight: 800}}>
                          Bold
                         </span>
                    </Button>
                    <Button color="#4f545c">
                        <span style={{textDecoration: "underline"}}>
                          Line
                        </span>
                    </Button>
                </Group>

                <div style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Group>
                        <Text fz="md" fw={700}>FG</Text>
                        <Group>
                            {textColors.map((color) => (
                                <Button color={color} ></Button>
                            ))}
                        </Group>
                    </Group>
                    <Group>
                        <Text fz="md" fw={700}>BG</Text>
                        <Group>
                            {bgColors.map((color) => (
                                <Button color={color} ></Button>
                            ))}
                        </Group>
                    </Group>
                </div>

                <textarea
                    className={"textarea"}
                    style={{
                        width: "50%",
                        height: "200px",
                        backgroundColor: "#2F3136",
                        color: "white",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "5px"
                    }}                >

                </textarea>

                <div style={{ paddingTop: "20px" }}>
                    <Button color="#4f545c">
                        Copy text as Discord formatted
                    </Button>
                </div>

                <div style={{ paddingTop: "20px" }}>
                    <Text>This is an unofficial tool, it is not made or endorsed by Discord.</Text>
                </div>
            </div>
        </MantineProvider>
    )
}
export default App
