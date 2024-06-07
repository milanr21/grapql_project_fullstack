import { useState } from "react";
import STATUS from "../../STATUSES";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../../mutation/UpdateProject";
import { GET_PROJECTS } from "../../queries/getProjectsQueries";

interface ProjectProps {
  id: string;
  name: string;
  description: string;
  status: string;
}

interface EdiProjectProps {
  project: ProjectProps;
}

const EditProject: React.FC<EdiProjectProps> = ({ project }) => {
  const [name, setName] = useState<string>(project.name);
  const [description, setDescription] = useState<string>(project.description);
  const [status, setStatus] = useState<string>("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [
      {
        query: GET_PROJECTS,
        variables: {
          id: project.id,
        },
      },
    ],
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      alert("Please fill in all fields");
      return;
    }

    updateProject({
      variables: {
        id: project.id,
        name,
        description,
        status,
      },
    });
  }

  return (
    <div>
      <div className="relative p-6 flex-auto">
        <h3>Edit Project Details</h3>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              {Object.values(STATUS).map((statusValue) => (
                <option key={statusValue} value={statusValue}>
                  {statusValue}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"></div>

          <div className="flex items-center justify-between">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Cancel{" "}
            </button>

            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Edit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
