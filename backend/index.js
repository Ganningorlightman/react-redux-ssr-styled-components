import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import routing from "../routing.config";
import startLogger from "./core/start-logger";
import { slashRedirect } from "./core/redirector";
import screens from "./screens";

const app = express();
app.disable("x-powered-by");
app.use(cookieParser());
app.use(bodyParser.json({limit: "1024mb"}));
app.use(bodyParser.urlencoded({limit: "1024mb", extended: true }));
app.use(compression());
app.use(express.static("public"));
app.use("/static", express.static("static"));
app.listen(routing.port);

slashRedirect(app);
screens(app);

startLogger();
