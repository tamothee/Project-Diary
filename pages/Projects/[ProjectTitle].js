import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../components/Layout/Button";

const components = { Button, SyntaxHighlighter };

export default function ProjectPage({ frontMatter, mdxSource }) {
  const router = useRouter();

  return (
    <div className="flex justify-center py-8 px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <button
          onClick={() => router.back()}
          className="pt-6 pl-6 hover:underline flex gap-2 text-sm text-gray-600 dark:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <div>Back to Projects</div>
        </button>
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              {frontMatter.description}
            </p>
          )}
          <div className="mb-6 flex flex-wrap gap-2">
            {frontMatter.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <MDXRemote {...mdxSource} components={components} />
          </div>
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
