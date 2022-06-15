module.exports = app => {
    const fruits = require("../controllers/fruit.controller.js");

    var router = require("express").Router();

    router.post("/", fruits.create);

    router.get("/", fruits.findAll);

    router.get("/:id", fruits.findOne);

    router.put("/:id", fruits.update);

    router.delete("/:id", fruits.delete);

    router.delete("/", fruits.deleteAll);

    app.use("/api/fruits", router);
};