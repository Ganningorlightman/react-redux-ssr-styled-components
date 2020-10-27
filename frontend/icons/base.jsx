import styled, { keyframes } from "styled-components";

const Svg = styled.svg`
    object-fit: contain;
    vertical-align: ${p => p.verticalAlign || "baseline"};
    width: ${p => p.width || "20px"};
    height: ${p => p.height || "20px"};
    margin-right: ${p => p.marginRight || "0"};
    margin-left: ${p => p.marginLeft || "0"};
    fill: none;
    transform: rotate(${p => p.rotate || 0});
`;

const getFill = (p) => {
    if (p.primary) {
        return p.theme.colors.primary;
    }
    if (p.error) {
        return p.theme.colors.onError;
    }
    return p.theme.colors.onSurface;
}

const PathFeel = styled.path`
    fill: ${p => getFill(p)};    
`;

const PathStroke = styled.path`
    stroke: ${p => p.theme.colors.onSurface};    
`;

const StrokeAnimation = keyframes`
    0% {
        stroke-dasharray: 0 300;
    }
    100% {
        stroke-dasharray: 300 0;
    }
`;

export { Svg, PathFeel, PathStroke, StrokeAnimation }
