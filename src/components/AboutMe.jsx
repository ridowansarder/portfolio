import { Briefcase, Code, User } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-glow text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Passionate <section className="text-glow text-primary">Web Developer</section></h3>
            <p className="text-muted-foreground mt-4">
              I am a passionate web developer with a strong foundation in
              frontend technologies. I love creating beautiful and functional
              websites that provide an excellent user experience. My goal is to
              continuously learn and improve my skills while contributing to
              exciting projects.
            </p>
            <p className="text-muted-foreground">
              Let's work together to bring your ideas to life!
            </p>
            <div className="mt-8">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border rounded-lg p-4 shadow-md card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Web Development</h3>
                  <p className="text-muted-foreground">
                    Creating responsive websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-lg p-4 shadow-md card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">UI Design</h3>
                  <p className="text-muted-foreground">
                    I design modern UIs for websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-lg p-4 shadow-md card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Freelancing</h3>
                  <p className="text-muted-foreground">
                    I work as a freelancer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
