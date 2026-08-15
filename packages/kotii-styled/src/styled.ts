import styled from "styled-components";

// Preserve the precise, complete type of the native styled object
const defaultStyled: typeof styled = typeof styled === "function" ? styled : (styled as any).default;

export default defaultStyled;
