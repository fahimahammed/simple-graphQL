// A map of functions which return data for the schema.
const { products, categories } = require('../dbConfig/index')
const resolvers = {
    Query: {
      name: () => 'world',
      age: () => 21,
      products: async(parent, {id}, context) => {
        const allProducts = await products.find({}).toArray();
        //const categories = await products.findOne({id: id});
        
        const catProducts = allProducts.filter(product => product.catagoryId == id)
        return catProducts;
      },
      product:  (parent, args, context)=>{
        const singleProduct = products.findOne({id: args.id});
        return singleProduct;
      },
      category:(parent, {id}, context)=> {
        console.log(id)
        const cat = categories.findOne({id: id});
        return cat;
      }
    },
  };

  module.exports=resolvers;