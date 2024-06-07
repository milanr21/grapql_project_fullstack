import { gql } from "@apollo/client";

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectUpdateStatus!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phoneNo
      }
    }
  }
`;

export { UPDATE_PROJECT };
