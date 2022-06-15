module.exports = mongoose => {
    var schema = mongoose.Schema({
        fruitNaming: String,
        weight: String,
        country: String,
        category: String,
        price: String
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Fruit = mongoose.model("fruit", schema);
    return Fruit;
};