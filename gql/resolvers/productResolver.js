// A map of functions which return data for the schema.
const { products, categories } = require('../../dbConfig')
const { ObjectId } = require('mongodb');
module.exports = {
    Query: {
        name: () => 'world',
        age: () => 21,
        products: async (parent, { id }, context) => {
            const allProducts = await products.find({}).toArray();
            //const categories = await products.findOne({id: id});

            const catProducts = allProducts.filter(product => product.catagoryId == id)
            return catProducts;
        },
        product: (parent, args, context) => {
            const singleProduct = products.findOne({ id: args.id });
            return singleProduct;
        }
    },
    Mutation: {
        storeProduct: async (_, req) => {
            console.log(req);
            const data = await products.insertOne(req.input);
            console.log(data)
            req.input.id = data.insertedId;
            return req.input;
        },
        deleteProduct: async (_, req) => {
            try {
                console.log(req.id, "deleted id");
                const result = await products.deleteOne({ _id: ObjectId(req.id) });
                return result.deletedCount > 0;
            }
            catch (err) {
                return false;
            }
        },
        updateProduct: async (_, req) => {
            try {
                const filter = { _id: ObjectId(req.input._id) };
                const option = { upsert: true };
                const data = {
                    $set: {
                        name: req.input.name,
                        onSale: req.input.onSale
                    }
                }
                const result = await products.updateOne(filter, data, option);
                console.log(result)
                if(result.modifiedCount>0){
                    return "Data modified...!";
                }
                if(result.upsertedCount>0){
                    return "Data inserted...!";
                }
                return "No update";
            }
            catch (err) {
                console.log(err);
            }
        }
    }
};

