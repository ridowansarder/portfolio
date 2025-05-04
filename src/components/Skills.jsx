import { useState } from "react";
const skillsData = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Bootstrap", level: 80, category: "Frontend" },
  { name: "Typescript", level: 75, category: "Frontend" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "VSCODE", level: 90, category: "Tools" },
];

const categories = ["All", "Frontend", "Tools"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredSkills = skillsData.filter(
    (skill) => selectedCategory === "All" || skill.category === selectedCategory
  );
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="skills">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-glow text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "border-primary text-primary"
              } hover:bg-primary/10 transition duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="gradient-border rounded-lg p-4 shadow-md card-hover"
            >
              <div className="text-left mb-4">
                <div className="p-3 rounded-full">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="text-left flex-grow">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className={`bg-primary h-2.5 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-muted-foreground text-sm mt-3 text-right">
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
