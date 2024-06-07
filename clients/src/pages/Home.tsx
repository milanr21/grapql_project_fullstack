import ClientModal from "../components/Modal/ClientModal";

import ProjectModal from "../components/Modal/ProjectModal";

import Clients from "../components/Clients";
import { Projects } from "../components/Projects";

const Home = () => {
  return (
    <div>
      <div className="container my-2 pl-3">
        <ClientModal title="Add Client" />

        <ProjectModal title="Add Project" />
      </div>
      <div className="">
        <Projects />

        <Clients />
      </div>
    </div>
  );
};

export default Home;
