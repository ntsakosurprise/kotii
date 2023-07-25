export type animationType = {
  type?: string;
  delay?: number;
  duration?: number;
  size?: "xsmall" | "small" | "medium" | "large";
};

export type borderType = {
  color?: string;
  size?: "small" | "medium" | "large";
};

export type borderSidesType = {
  color?: string;
  size?: string;
  style?: string;
  side?: string;
}[];

export type backgroundType = {
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

export type backgroundAltType = { dark: string; light: string };
