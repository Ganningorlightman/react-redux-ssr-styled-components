import { Helmet } from "react-helmet-async";

const globalStyles = `
    html {
        height: 100%;
    }
    
    body {
        display: block;
        position: relative;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100%;
        -webkit-font-smoothing: antialiased;
    }
    
    .root {
        min-height: 100%;
        height: 1px;
    }
    .root * {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

const Meta = () => (
    <Helmet>
        <html lang="ru" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#688CFE" />
        <meta name="description" content="Pub react" />
        <title>Title</title>
        <style>{globalStyles}</style>
    </Helmet>
);

export default Meta;
