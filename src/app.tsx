import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";

import { BasicAppShell } from "./shell";
import { ImageZoomPan } from "./image-zoom-pan";

export function App() {
  const exampleImage = new URL("./assets/preview.jpg", import.meta.url);

  return (
    <MantineProvider theme={createTheme({})}>
      <BasicAppShell>
        <ImageZoomPan src={exampleImage.href} />
      </BasicAppShell>
    </MantineProvider>
  );
}
