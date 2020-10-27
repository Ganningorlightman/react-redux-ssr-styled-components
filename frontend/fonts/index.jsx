import React from "react";
import { Helmet } from "react-helmet-async";

const Fonts = () => (
    <Helmet>
        <style>{`
            @font-face {
                font-family: "GothamPro";
                src: url("/static/fonts/GothamProRegular/GothamProRegular.eot");
                src: url("/static/fonts/GothamProRegular/GothamProRegular.eot?#iefix") format("embedded-opentype"),
                    url("/static/fonts/GothamProRegular/GothamProRegular.woff") format("woff"),
                    url("/static/fonts/GothamProRegular/GothamProRegular.ttf") format("truetype");
                font-style: normal;
                font-weight: 400;
            }
            
            @font-face {
                font-family: "GothamPro";
                src: url("/static/fonts/GothamProBold/GothamProBold.eot");
                src: url("/static/fonts/GothamProBold/GothamProBold.eot?#iefix") format("embedded-opentype"),
                    url("/static/fonts/GothamProBold/GothamProBold.woff") format("woff"),
                    url("/static/fonts/GothamProBold/GothamProBold.ttf") format("truetype");
                font-style: normal;
                font-weight: 600;
            }
            
            @font-face {
                font-family: "GothamPro";
                src: url("/static/fonts/GothamProBlack/GothamProBlack.eot");
                src: url("/static/fonts/GothamProBlack/GothamProBlack.eot?#iefix") format("embedded-opentype"),
                    url("/static/fonts/GothamProBlack/GothamProBlack.woff") format("woff"),
                    url("/static/fonts/GothamProBlack/GothamProBlack.ttf") format("truetype");
                font-style: normal;
                font-weight: 900;
            }
                       
            @font-face {
                font-family: "GothamPro";
                src: url("/static/fonts/GothamProMedium/GothamProMedium.eot");
                src: url("/static/fonts/GothamProMedium/GothamProMedium.eot?#iefix") format("embedded-opentype"),
                    url("/static/fonts/GothamProMedium/GothamProMedium.woff") format("woff"),
                    url("/static/fonts/GothamProMedium/GothamProMedium.ttf") format("truetype");
                font-style: normal;
                font-weight: 300;
            }
            
            @font-face {
                font-family: "GothamPro";
                src: url("/static/fonts/GothamProLight/GothamProLight.eot");
                src: url("/static/fonts/GothamProLight/GothamProLight.eot?#iefix") format("embedded-opentype"),
                    url("/static/fonts/GothamProLight/GothamProLight.woff") format("woff"),
                    url("/static/fonts/GothamProLight/GothamProLight.ttf") format("truetype");
                font-style: normal;
                font-weight: 200;
            }
        `}</style>
    </Helmet>
);

export default Fonts;

