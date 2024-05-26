import { ReactElement } from "react";
import { BaseProps } from "../../../types";
export interface PageHeaderProps
  extends Omit<BaseProps, "children" | "wrap" | "width" | "fill" | "size"> {
  gridArea?: string;
  disabled?: boolean;

  children?: ReactElement;
  onChange?: () => {};
  name?: string;
  id?: string;

  maxSize?: number;
  messages?: {
    browse: string;
    dropPrompt: string;
    dropPromptMultiple: "Drop files here or";
    files: string;
    remove: "remove";
    removeAll: "remove all";
    maxFile: "Attach a maximum of {max} files only.";
  };
  multiple?:
    | boolean
    | {
        aggregateThreshold: number;
        max: number;
      };
  renderFile?: () => {};

  // skeleton?: { width?: { min?: number } };
}
