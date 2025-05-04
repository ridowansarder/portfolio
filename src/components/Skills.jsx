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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
