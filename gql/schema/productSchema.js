module.exports = `#graphql
  extend type Query {
    name: String
    age: Int
    products(id: ID!): [Product]
    product(id: ID!): Product
    category(id: ID!): Category
  }

  type Product{
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean! 
    catagoryId: ID!
    category(id: ID): Category
  }
  type Category{
    id: ID!
    name: String
  }

  input product {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean! 
    catagoryId: ID!
  }
  extend type Mutation {
    storeProduct(input: product): Product
    deleteProduct(id: ID): Boolean!
  }

`;


