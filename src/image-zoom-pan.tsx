import {
  Box,
  Image,
  ScrollArea,
  Transition,
  type TransitionProps,
  type MantineTransition,
} from "@mantine/core";
import { useHover, useMouse, useMergedRef } from "@mantine/hooks";

export interface ImageZoomPanProps
  extends Pick<
    TransitionProps,
    "duration" | "exitDuration" | "timingFunction"
  > {
  src: string;
  scaleVector: number;
}

export function ImageZoomPan({
  src,
  scaleVector,
  duration,
  exitDuration,
  timingFunction,
}: ImageZoomPanProps) {
  const { ref: mouseRef, x, y } = useMouse();
  const { ref: hoverRef, hovered } = useHover();
  const ref = useMergedRef(hoverRef, mouseRef);

  const scaleImage: MantineTransition = {
    in: { transform: `scale(${scaleVector})` },
    out: { transform: `scale(1)` },
    common: { transformOrigin: `${x}px ${y}px` },
    transitionProperty: "transform",
  };

  const logOnEntered = () => {
    console.info("On Entered", x, y);
  };

  return (
    <Box ref={ref}>
      <ScrollArea.Autosize type="never">
        <Transition
          mounted={hovered}
          transition={scaleImage}
          duration={duration}
          exitDuration={exitDuration || duration}
          timingFunction={timingFunction}
          keepMounted={true}
          onEntered={logOnEntered}
        >
          {(transitionStyle) => (
            <Image
              src={src}
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
