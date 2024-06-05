import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Clients from './components/Clients';
import Modal from './components/Modal/Modal';
import { Projects } from './components/Projects';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className='container my-2 pl-3'>
          <Modal title='Add Client' />
        </div>
        <div className=''>
          <Clients />
          <Projects />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
