import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../components/Layout/Button";

const components = { Button, SyntaxHighlighter };

export default function ProjectPage({ frontMatter, mdxSource }) {
  return (
    <div className="flex justify-center pt-4">
      <div
        className="block p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <button className="mb-4 hover:underline">Back to Project Page</button>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {frontMatter.title}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("components/Projects");

  const paths = files.map((filename) => ({
    params: { ProjectTitle: filename.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { ProjectTitle } }) {
  console.log(ProjectTitle);

  const markdownWithMeta = fs.readFileSync(
    "components/Projects/" + ProjectTitle + ".mdx"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      ProjectTitle,
      mdxSource,
    },
  };
}
