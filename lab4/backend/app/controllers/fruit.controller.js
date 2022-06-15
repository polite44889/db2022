const db = require("../models");
const Fruit = db.fruits;


exports.create = (req, res) => {

    if (!req.body.fruitNaming) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const fruit = new Fruit({
        fruitNaming: req.body.fruitNaming,
        weight: req.body.weight,
        country: req.body.country,
        category: req.body.category,
        price: req.body.price
    });

    fruit
        .save(fruit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the entry."
            });
        });
};

exports.findAll = (req, res) => {
    const fruitNaming = req.query.fruitNaming;
    var condition = fruitNaming ? { fruitNaming: { $regex: new RegExp(fruitNaming), $options: "i" } } : {};

    Fruit.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving entrys."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Fruit.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found entry with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving entry with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Fruit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update entry with id=${id}.`
                });
            } else res.send({ message: "Entry was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating entry with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Fruit.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete entry with id=${id}. Maybe entry was not found!`
                });
            } else {
                res.send({
                    message: "Entry was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete entry with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Fruit.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Entrys were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};