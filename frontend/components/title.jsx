import styled from "styled-components";

const Title = styled.h1`
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 32px;
    color: ${p => p.white ? p.theme.colors.onSurface : p.theme.colors.onBackground};
    margin: 0;
    margin-bottom: ${p => p.marginBottom || "40px"};
    @media print {
      display: none;
    }
`;

export default Title;
