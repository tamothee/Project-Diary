import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import ProjectCard from "../components/Portfolio/ProjectCard";

export default function Home({ featuredProjects }) {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Software Engineering student</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text sm:text-5xl">
            Hi, I&apos;m{" "}
            <span className="heading-gradient">Timothy</span>. I build
            full-stack web applications and IoT dashboards.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 muted-text">
            I&apos;m a Software Engineering student based in Singapore, with
            experience in React, Express, MongoDB, MySQL, MQTT, and
            hardware-integrated systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/Projects" passHref>
              <a className="primary-button">View Projects</a>
            </Link>

            <Link href="https://github.com/tamothee" passHref>
              <a target="_blank" rel="noreferrer" className="secondary-button">
                GitHub
              </a>
            </Link>

            <Link
              href="https://sg.linkedin.com/in/timothy-leong-ming-liang-85ba83255"
              passHref
            >
              <a target="_blank" rel="noreferrer" className="secondary-button">
                LinkedIn
              </a>
            </Link>
          </div>
        </div>

        <aside className="section-card relative overflow-hidden">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-teal/20 blur-3xl dark:bg-brand-cyan/20" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-teal text-2xl font-bold text-white shadow-glow dark:bg-brand-cyan dark:text-brand-dark-bg">
              TL
            </div>

            <div>
              <p className="text-sm font-semibold text-brand-light-text dark:text-brand-dark-text">
                Focus areas
              </p>
              <p className="mt-1 text-sm leading-6 muted-text">
                Full-stack web applications, IoT dashboards, and
                hardware-integrated systems
              </p>
            </div>
          </div>

          <div className="relative mt-8 space-y-4">
            <div className="soft-card">
              <p className="eyebrow text-xs">Tools</p>
              <p className="mt-2 text-base font-medium text-brand-light-text dark:text-brand-dark-text">
                React · Express · MongoDB · MySQL · MQTT
              </p>
            </div>

            <div className="soft-card">
              <p className="eyebrow text-xs">Location</p>
              <p className="mt-2 text-base font-medium text-brand-light-text dark:text-brand-dark-text">
                Singapore
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="section-card">
        <p className="eyebrow">About</p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text">
          Building useful software with real-world impact.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 muted-text">
          I&apos;m Timothy, an aspiring software developer based in Singapore.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 muted-text">
          I enjoy building full-stack applications and IoT systems, especially
          projects that combine hardware, dashboards, and real-world data. I
          graduated from Singapore Polytechnic in Computer Engineering and am
          pursuing Software Engineering at SMU.
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Featured projects</p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text">
              Recent work
            </h2>
          </div>

          <Link href="/Projects" passHref>
            <a className="secondary-button">Browse all projects</a>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.frontMatter.title}
              description={project.frontMatter.description}
              summary={project.frontMatter.summary}
              tags={project.frontMatter.tags}
              href={`/Projects/${project.slug}`}
              featured
            />
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-brand-light-text dark:text-brand-dark-text">
              Let&apos;s build something useful.
            </p>

            <p className="mt-2 text-sm leading-6 muted-text">
              If you have a project idea or need help with a web or IoT system,
              I&apos;d love to connect.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/Projects" passHref>
              <a className="primary-button">Explore projects</a>
            </Link>

            <Link href="https://github.com/tamothee" passHref>
              <a target="_blank" rel="noreferrer" className="secondary-button">
                Message on GitHub
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("components/Projects");

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      `components/Projects/${filename}`,
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  const featuredProjects = projects
    .filter((project) => project.frontMatter.featured === true)
    .slice(0, 3);

  return {
    props: {
      featuredProjects,
    },
  };
}