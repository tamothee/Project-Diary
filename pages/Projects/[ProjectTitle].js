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
    <article className="mx-auto w-full max-w-4xl py-8">
      <div className="section-card">
        <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-light-subtle transition hover:text-brand-teal dark:text-brand-dark-subtle dark:hover:text-brand-cyan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span>Back to Projects</span>
        </button>

        <header>
          <p className="eyebrow">Project</p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text sm:text-4xl">
            {frontMatter.title}
          </h1>

          {frontMatter.description && (
            <p className="mt-4 text-lg leading-8 muted-text">
              {frontMatter.description}
            </p>
          )}

          {frontMatter.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-light-muted px-3 py-1 text-sm font-semibold text-brand-light-subtle dark:bg-brand-dark-muted dark:text-brand-dark-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="brand-divider my-8 border-t" />

        <div className="prose prose-lg max-w-none prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline dark:prose-a:text-brand-cyan prose-code:rounded prose-code:bg-brand-light-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-brand-light-text dark:prose-code:bg-brand-dark-muted dark:prose-code:text-brand-dark-text">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </article>
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