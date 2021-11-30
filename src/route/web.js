import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getController);
    router.get('/getcrud', homeController.getCrud);

    router.get('/hello', (req, res) => {
        return res.send("hello anh em 1 lan nua")
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;