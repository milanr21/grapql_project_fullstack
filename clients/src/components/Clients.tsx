import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/getClientsQueries';
import Table from './Table/Table';
import { DELETE_MUTATION } from '../mutation/ClientMutations';

interface Client {
  id: string;
  name: string;
  email: string;
  phoneNo: string;
}

const Clients = () => {
  const { data, loading, error } = useQuery<{ clients: Client[] }>(GET_CLIENTS);

  const [deleteClient] = useMutation(DELETE_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const tableHeaders = ['id', 'name', 'email', 'phoneNo' as 'Phone Number'];
  const tableData = data?.clients || [];

  const handleDelete = async (id: string) => {
    try {
      await deleteClient({
        variables: { id },
        refetchQueries: [{ query: GET_CLIENTS }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Table onDelete={handleDelete} headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default Clients;
