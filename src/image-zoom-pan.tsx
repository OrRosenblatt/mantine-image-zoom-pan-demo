import {
  Box,
  Image,
  ScrollArea,
  Transition,
  type MantineTransition,
} from "@mantine/core";
import { useHover, useMouse, useMergedRef } from "@mantine/hooks";
import React from "react";

export function ImageZoomPan(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { ref: mouseRef, x, y } = useMouse();
  const { ref: hoverRef, hovered } = useHover();
  const ref = useMergedRef(hoverRef, mouseRef);

  const scaleImage: MantineTransition = {
    in: { transform: "scale(2)" },
    out: { transform: "scale(1)" },
    common: { transformOrigin: `${x}px ${y}px` },
    transitionProperty: "transform",
  };

  const logOnEntered = () => {
    console.info("On Entered", props, hovered, x, y);
  };

  return (
    <Box ref={ref}>
      <ScrollArea.Autosize type="never">
        <Transition
          mounted={hovered}
          transition={scaleImage}
          duration={500}
          exitDuration={500}
          timingFunction="ease-in-out"
          keepMounted={true}
          onEntered={logOnEntered}
        >
          {(transitionStyle) => (
            <Image
              src={props.src}
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              fit="contain"
              style={{ ...transitionStyle, display: "block" }}
            />
          )}
        </Transition>
      </ScrollArea.Autosize>
    </Box>
  );
}
