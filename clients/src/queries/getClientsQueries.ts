import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      email
      phoneNo
    }
  }
`;
export { GET_CLIENTS };
