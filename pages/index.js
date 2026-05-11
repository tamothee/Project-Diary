import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Software Engineering student
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              Hi, I&apos;m Timothy. I build full-stack web applications and IoT dashboards.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              I&apos;m a Software Engineering student based in Singapore, with experience in React,
              Express, MongoDB, MySQL, MQTT, and hardware-integrated systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/Projects" passHref>
                <a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:text-slate-950 dark:hover:bg-slate-600">
                  View Projects
                </a>
              </Link>
              <Link href="https://github.com/tamothee" passHref>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  GitHub
                </a>
              </Link>
              <Link
                href="https://sg.linkedin.com/in/timothy-leong-ming-liang-85ba83255"
                passHref
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  LinkedIn
                </a>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-[#F8C2B1] p-6 shadow-lg dark:bg-slate-800">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-900 dark:bg-slate-700" />
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Focus areas
                </p>
                <p className="mt-1 text-base text-slate-900 dark:text-slate-100">
                  Full-stack web applications, IoT dashboards, hardware-integrated systems
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Tools
                </p>
                <p className="mt-2 text-base text-slate-800 dark:text-slate-200">
                  React · Express · MongoDB · MySQL · MQTT
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-base text-slate-800 dark:text-slate-200">
                  Singapore
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">About</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Im Timothy, an aspiring software developer based in Singapore.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              I enjoy building full-stack applications and IoT systems, especially projects
              that combine hardware, dashboards, and real-world data. I graduated from
              Singapore Polytechnic in Computer Engineering and am pursuing Software
              Engineering at SMU.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Featured projects
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Recent work
              </h2>
            </div>
            <Link href="/Projects" passHref>
              <a className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                Browse all projects
              </a>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Singapore Polytechnic Internship",
                summary:
                  "A practical internship project focused on embedded software and system integration.",
                tags: ["Embedded C", "IoT", "Hardware"],
              },
              {
                title: "Smart Door Lock with IoT Security",
                summary:
                  "A security-focused access system with remote control and sensor monitoring.",
                tags: ["MQTT", "React", "Node.js"],
              },
              {
                title: "Project Diary",
                summary:
                  "A portfolio-style web app showcasing projects, updates and development progress.",
                tags: ["Next.js", "Tailwind", "Web"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/Projects" passHref>
                  <a className="mt-6 inline-flex text-sm font-medium text-slate-900 underline dark:text-slate-100">
                    View details
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">Let&apos;s build something useful.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                If you have a project idea or need help with a web or IoT system, I&apos;d love to connect.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/Projects" passHref>
                <a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:text-slate-950 dark:hover:bg-slate-600">
                  Explore projects
                </a>
              </Link>
              <Link href="https://github.com/tamothee" passHref>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  Message on GitHub
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
