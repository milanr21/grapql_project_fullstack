import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phoneNo: String!) {
    addClient(name: $name, email: $email, phoneNo: $phoneNo) {
      id
      name
      email
      phoneNo
    }
  }
`;

export { ADD_CLIENT };
