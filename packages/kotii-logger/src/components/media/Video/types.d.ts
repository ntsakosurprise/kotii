import { ReactElement, ReactNode } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps extends Omit<BaseProps, "children" | "wrap" | "fill" | "width"> {
    gridArea?: string;
    disabled?: boolean;
    children: ReactNode;
    wrap?: boolean;
    fill?: boolean;
    autoPlay?: boolean;
    controls?: false | "over" | "below" | VideoControls;
}
type Position = false | "over" | "below";
type ArrayItems = "captions" | "fullScreen" | "play" | "pause" | "volume";
type ItemObject = {
    icon?: ReactElement;
    allyTitle?: string;
    onClick?: (...args: any[]) => any;
};
type Items = Array<ArrayItems | ItemObject>;
type VideoControls = {
    position?: Position;
    items?: Items;
};
export {};
