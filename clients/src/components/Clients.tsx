import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/getClientsQueries";
import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";

interface Client {
  id: string;
  email: string;
  phoneNo: string;
}

const Clients = () => {
  const { data, loading, error } = useQuery<{ clients: Client[] }>(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const tableHeaders = ["Id", "Email", "phoneNo"];
  const tableData = data?.clients || [];

  return (
    <div>
      <table>
        <TableHead headers={tableHeaders} />
        <TableBody<Client> data={tableData} headers={tableHeaders} />
      </table>
    </div>
  );
};

export default Clients;
