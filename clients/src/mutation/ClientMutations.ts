import { gql } from '@apollo/client';

const DELETE_MUTATION = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phoneNo
    }
  }
`;

export { DELETE_MUTATION };
