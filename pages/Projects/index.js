import fs from "fs";
import matter from "gray-matter";
import ProjectCard from "../../components/Portfolio/ProjectCard";

export default function AllProjects({ projects }) {
  return (
    <div className="mx-auto rounded-lg max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Projects
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
          A collection of web, IoT, and software projects I’ve built.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.frontMatter.title}
            description={project.frontMatter.description}
            tags={project.frontMatter.tags}
            href={`/Projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("components/Projects");

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync("components/Projects/" + filename);
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      projects,
    },
  };
};
