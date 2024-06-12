import type { Meta } from "@storybook/react";
import { Box, Center } from "@mantine/core";

import {
  defaultProps,
  ImageZoomPan,
  type ImageZoomPanProps,
} from "./image-zoom-pan";

const meta = {
  component: ImageZoomPan,
  argTypes: {
    src: { control: "text" },
    scaleVector: { control: { type: "range", min: 2, max: 10, step: 1 } },
    duration: { control: { type: "range", min: 0, max: 500, step: 50 } },
    exitDuration: { control: { type: "range", min: 0, max: 500, step: 50 } },
    timingFunction: {
      control: "select",
      options: [
        "linear",
        "ease",
        "ease-in",
        "ease-in-out",
        "ease-out",
        "step-start",
        "step-end",
      ],
    },
  },
  args: defaultProps,
} satisfies Meta<typeof ImageZoomPan>;

export default meta;

export function Usage(props: ImageZoomPanProps) {
  return (
    <Center>
      <Box maw={"50rem"}>
        <ImageZoomPan {...props} />
      </Box>
    </Center>
  );
}
