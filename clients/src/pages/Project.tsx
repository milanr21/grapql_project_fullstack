import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_PROJECT_BY_ID } from "../queries/getProjectsById";
import { IoArrowBack } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { DELETE_PROJECT } from "../mutation/DeleteProject";
import { GET_CLIENTS } from "../queries/getClientsQueries";
import { GET_PROJECTS } from "../queries/getProjectsQueries";
import EditProject from "../components/EditProject/EditProject";
import React from "react";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
  });

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    refetchQueries: [
      {
        query: GET_CLIENTS,
      },
      {
        query: GET_PROJECTS,
      },
    ],
  });

  console.log("The Project Id is", data);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded items-center justify-between flex gap-1"
          >
            <IoArrowBack fontSize={22} className="inline-block" />
            Back
          </button>

          {data && data.project && (
            <div className="flex gap-4">
              <button
                onClick={() => [deleteProject(), navigate("/")]}
                className="mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded items-center justify-between flex gap-1"
              >
                <MdDeleteForever fontSize={22} className="inline-block" />
                Delete Project
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded items-center justify-between flex gap-1"
              >
                Edit Project
              </button>
            </div>
          )}
        </div>

        {data && data.project ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden gap-4">
            <div className="p-6">
              <h1 className="text-3xl font-semibold text-gray-900 mb-4 tracking-wider ">
                <span className="font-normal uppercase mr-8">
                  Project Title
                </span>

                {data.project.name}
              </h1>
              <p className="bg-gray-400 py-2 px-2 rounded-lg text-white font-medium mb-6 text-lg">
                {data.project.description}
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Client
                </h2>
                <p className="text-gray-600">
                  <strong>Name: </strong>
                  {data.project.client.name}
                </p>
                <p className="text-gray-600">
                  <strong>Email: </strong>
                  {data.project.client.email}
                </p>
                <p className="text-gray-600">
                  <strong>Phone: </strong>
                  {data.project.client.phoneNo}
                </p>
              </div>

              {isEditing && <EditProject project={data.project} />}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-700">Project not found</div>
        )}
      </div>
    </div>
  );
};

export default Project;
