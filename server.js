const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        hello: String
        name: String
    }
`);

const rootValue = { 
    hello: () => "Hello",
    name: () => "Dave" 
};

const source = "{ name }";

graphql({ schema, source, rootValue }).then((response) => {
	console.log(response);
});
