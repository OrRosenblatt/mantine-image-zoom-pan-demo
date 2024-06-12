import "@mantine/core/styles.css";

import React from "react";
import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";

export const decorators = [
  (renderStory: any) => <MantineProvider>{renderStory()}</MantineProvider>,
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};

export default preview;
