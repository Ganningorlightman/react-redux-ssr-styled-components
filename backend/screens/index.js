import render from "../core/ssr";
import main from "./main";
import account from "./account";

export default (app) => {
    main(app);
    account(app);

    app.get("*", (req, res) => {
        res.status(404).send(render(req));
    });
}
