import { EXPERIENCES } from "../constants";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -
                <span className="text-sm text-pink-500 ml-1">
                  {experience.company}
                </span>
              </h6>
              <div className="mb-4 text-neutral-400">
                {experience.description}
              </div>
              <div className="flex flex-wrap">
                {experience.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-pink-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
