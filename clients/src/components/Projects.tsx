// components/Projects.js
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/getProjectsQueries";
import ProjectCard from "./ProjectCard/ProjectCard";

interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
}

interface ProjectsData {
  projects: Project[];
}

interface ProjectsVars {}

export const Projects = () => {
  const { data, loading, error } = useQuery<ProjectsData, ProjectsVars>(
    GET_PROJECTS
  );

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  console.log("The final data is", data);

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.projects.map((project) => (
            <ProjectCard key={project.id}>
              <div className="bg-red-500 p-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-200 space-x-2">
                  <span className="text-xl font-semibold mr-3 uppercase ">
                    Status
                  </span>

                  {project.status}
                </p>
              </div>
              <div className="p-4">
                <p className="text-gray-700">{project.description}</p>
              </div>
              <div className="p-4 bg-gray-100">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};
