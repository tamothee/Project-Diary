import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../components/Layout/Button";
import Link from "next/link";

const components = { Button, SyntaxHighlighter };

export default function ProjectPage({ frontMatter, mdxSource }) {

  const router = useRouter();

  return (
    <div className="flex justify-center pt-4">
      <div className="block max-w-[95%]  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <button onClick={()=>router.back()} className="pt-3 pl-2 hover:underline flex gap-2 text-sm">
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
          <div>Back to Project Page</div>
        </button>
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {frontMatter.title}
        </h5>
        <div className="text-gray-400 italic">
          Tags: {frontMatter.tags.map(tags=>tags+" ")}
        </div>
        <br/>
        <div className="font-normal text-gray-700 dark:text-gray-200">
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
