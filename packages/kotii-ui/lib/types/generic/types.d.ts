export type Align = "start" | "center" | "end" | "stretch";
export type AlignBase = Align | "baseline";
export type AlignAroundBetween = Align | "around" | "between";
export type Justify = AlignAroundBetween | "evenly";
export type AnimationT = "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "rotateLeft" | "rotateRight" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut";
export type Size = "small" | "medium" | "large";
export type SizeNoneXs = "none" | "xsmall" | Size;
export type Basis = "full" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto";
export type HorizVert = "horizontal" | "vertical";
export type GrowShrink = "grow" | "shrink";
export type Direction = "row" | "column" | "row-responsive" | "row-reverse" | "column-reverse";
export type Border = "top" | "left" | "bottom" | "right" | "start" | "end" | "horizontal" | "vertical" | "all" | "between";
export type Overflow = "auto" | "hidden" | "scroll" | "visible";
export type Corners = "top" | "left" | "bottom" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type OverflowViewPorts = {
    vertical?: string;
    horizontal?: string;
};
export interface Skeleton {
    animation: boolean;
    color?: string;
    depth?: number;
    message?: Message;
}
type Message = {
    start: string;
    end: string;
};
export type animationType = {
    type?: string;
    delay?: number;
    duration?: number;
    size?: "xsmall" | Size;
};
export type BorderType = {
    color?: string;
    size?: Size;
};
export type BorderSidesType = {
    color?: string;
    size?: string;
    style?: string;
    side?: string;
}[];
export type BorderCorners = {
    size?: string;
    corners?: Corners;
};
export type BackgroundType = {
    color?: string;
    dark?: boolean;
    opacity?: boolean;
    position?: string;
    repeat?: string;
    size?: string;
    image?: string;
    clip?: string;
    rotate?: number;
};
export type BackgroundAltType = {
    dark: string;
    light: string;
};
export type HoverIndicator = {
    color: string;
    dark: string;
    image: string;
    position: string;
    opacity: string;
    repeat: string;
    size: string;
    light: string;
};
export type HoverIndicatorElevation = {
    background?: HoverIndicator;
    elevation?: string;
};
export type Spacings = {
    vertical: string;
    horizontal: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
};
export {};
