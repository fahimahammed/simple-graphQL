const productSchema = require('./productSchema');
const rootSchema = `#graphql
  type Query {
    _:Boolean
  }
  type Mutation {
    _:Boolean
  }
`;

module.exports = [rootSchema, productSchema]
