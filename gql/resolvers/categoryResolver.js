// A map of functions which return data for the schema.
const { products, categories } = require('../../dbConfig')
module.exports = {
    Query: {
      category:(parent, {id}, context)=> {
        console.log(id)
        const cat = categories.findOne({id: id});
        return cat;
      }
    },
  };

