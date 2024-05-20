import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <div className="w-full lg:w-3/4 m-10">
              <h6 className="mb-2 font-semibold">{project.title} </h6>
              <p className="mb-4 text-neutral-400">{project.description} </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-pink-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
