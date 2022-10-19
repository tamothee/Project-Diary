import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function AllProjects({ projects, config }) {
  return (
    <div className="flex flex-wrap justify-center flex-wrap gap-3 pt-3 ">
      {projects.map((project, index) => {
        return (
          <div key={index} className="w-5/12 min-w-[300px] hover:scale-105 pt-2">
            <Link href={"/Projects/" + project.slug} passHref>
              <a>
                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    <Image
                      className="rounded-t-lg"
                      src={project.frontMatter.thumbnailUrl}
                      alt=""
                      height={200}
                      width={400}
                    />
                    <div className="p-6">
                      <h5 className=" text-xl font-medium">
                        {project.frontMatter.title}
                      </h5>
                      <p className="text-sm pt-2 pb-2 italic">
                        Tags: {project.frontMatter.tags.map((tags) => tags + " ")}
                      </p>
                      <p className="text-base mb-4">
                        {project.frontMatter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
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
