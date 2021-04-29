import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.WORDPRESS_URL,
    cache: new InMemoryCache(),
});

export default client;