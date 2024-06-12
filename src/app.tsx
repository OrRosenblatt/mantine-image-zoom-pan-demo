import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import { BasicAppShell } from "./shell";

import { ImageZoomPan } from "./image-zoom-pan";

export function App() {
  return (
    <MantineProvider theme={createTheme({})}>
      <BasicAppShell>
        <ImageZoomPan src={"http://localhost:5001/preview.jpg"} />
      </BasicAppShell>
    </MantineProvider>
  );
}
