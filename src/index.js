import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// Setup and instantiate Apollo Client
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
// Add provider for use with React Context hook
// This is how Apollo manages state throughout our entire application / component tree
import { ApolloProvider } from '@apollo/client'

// configure endpoint for serverless backend / GraphQL API (Hasura)
const client = new ApolloClient({
  uri: 'https://tight-haddock-21.hasura.app/v1/graphql',
  cache: new InMemoryCache()
})

// client.query({
//   query: gql`
//     query getTodos {
//   todos {
//     done
//     id
//     text
//   }
// }
//   `
// }).then(data => console.log(data))

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
