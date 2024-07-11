import {
  Box,
  Image,
  ScrollArea,
  Transition,
  type TransitionProps,
  type MantineTransition,
  useProps,
} from "@mantine/core";
import { useHover, useMouse, useMergedRef } from "@mantine/hooks";

export interface ImageZoomPanProps
  extends Pick<
    TransitionProps,
    "duration" | "exitDuration" | "timingFunction"
  > {
  src: string;
  scaleVector?: number;
}

export const defaultProps: Partial<ImageZoomPanProps> = {
  scaleVector: 2,
  duration: 300,
  exitDuration: 300,
  timingFunction: "ease-in-out",
};

export function ImageZoomPan(_props: ImageZoomPanProps) {
  const props = useProps("ImageZoomPan", defaultProps, _props);

  const { ref: mouseRef, x, y } = useMouse();
  const { ref: hoverRef, hovered } = useHover();
  const ref = useMergedRef(hoverRef, mouseRef);

  const { src, scaleVector, duration, exitDuration, timingFunction } = props;

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
    <ScrollArea.Autosize ref={ref} type="never">
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
            style={{
              ...transitionStyle,
              display: "block",
              "image-rendering": "-webkit-optimize-contrast",
            }}
          />
        )}
      </Transition>
    </ScrollArea.Autosize>
  );
}
