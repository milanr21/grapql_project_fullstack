import { gql } from '@apollo/client';

const GET_PROJECT_BY_ID = gql`
  query getProject($id: ID) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        id
        name
        email
        phoneNo
      }
    }
  }
`;

export { GET_PROJECT_BY_ID };
