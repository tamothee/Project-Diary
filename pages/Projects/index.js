import fs from "fs";
import matter from "gray-matter";
import ProjectCard from "../../components/Portfolio/ProjectCard";

export default function AllProjects({ projects }) {
  return (
    <main className="page-shell">
      <section className="content-shell py-12 sm:py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">Portfolio</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text sm:text-5xl">
            Projects
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 muted-text">
            A collection of web, IoT, and software projects I&apos;ve built.
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
      </section>
    </main>
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