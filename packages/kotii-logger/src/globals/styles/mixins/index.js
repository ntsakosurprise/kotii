import { Color } from 'color';
import { css } from 'styled-components';
import { Abstracts } from '../abstracts/variables';
const { font } = Abstracts;

export const Mixin = {
    darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
    lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
    rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
    boxShadowMedium: css`
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    `,
    boxShadowDropdown: css`
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
            rgba(9, 30, 66, 0.31) 0px 0px 1px;
    `,
    truncateText: css`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
    clickable: css`
        cursor: pointer;
        user-select: none;
    `,
    hardwareAccelerate: css`
        transform: translateZ(0);
    `,
    cover: css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    `,
    placeholderColor: (colorValue) => css`
        ::-webkit-input-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
        :-moz-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
        ::-moz-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
        :-ms-input-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
    `,
    scrollableY: css`
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    `,
    customScrollbar: ({
        width = 8,
        background = color.backgroundMedium,
    } = {}) => css`
        &::-webkit-scrollbar {
            width: ${width}px;
        }
        &::-webkit-scrollbar-track {
            background: none;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 99px;
            background: ${background};
        }
    `,
    backgroundImage: (imageURL) => css`
        background-image: url('${imageURL}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: ${color.backgroundLight};
    `,
    link: (colorValue = color.textLink) => css`
        cursor: pointer;
        color: ${colorValue};
        ${font.medium}
        &:hover, &:visited, &:active {
            color: ${colorValue};
        }
        &:hover {
            text-decoration: underline;
        }
    `,
    tag: (
        background = color.backgroundMedium,
        colorValue = color.textDarkest
    ) => css`
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        color: ${colorValue};
        background: ${background};
        ${font.bold}
        ${font.size(12)}
      i {
            margin-left: 4px;
        }
    `,
};
