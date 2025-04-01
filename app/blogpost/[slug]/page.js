import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import Head from "next/head"; // Import Head for SEO

const postsDirectory = path.join(process.cwd(), "content"); // Absolute path

// ✅ Generate paths for all markdown files (Runs at Build Time)
export async function getStaticPaths() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("⚠️  Content directory not found!");
    return { paths: [], fallback: false };
  }

  const files = fs.readdirSync(postsDirectory);
  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return { paths, fallback: false }; // Return 404 for unknown pages
}

// ✅ Fetch and parse Markdown data (Runs at Build Time)
export async function getStaticProps({ params }) {
  const filepath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    return { notFound: true }; // Return 404 if file not found
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify);

  const htmlcontent = (await processor.process(content)).toString();

  return {
    props: {
      frontmatter: data,
      htmlcontent,
    },
  };
}

// ✅ Blog Post Component
export default function BlogPost({ frontmatter, htmlcontent }) {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8 py-6">
      <Head>
        <title>{frontmatter.title} - My Blog</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://myblog.com/blog/${frontmatter.slug}`} />
        <meta property="og:image" content={frontmatter.image || '/default-image.jpg'} />
      </Head>

      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 text-gray-900 dark:text-white">
        {frontmatter.title}
      </h1>

      {/* Description */}
      <blockquote className="text-md sm:text-lg md:text-xl mb-4 font-medium border-l-4 border-gray-500 dark:border-gray-400 italic px-4 text-gray-800 dark:text-gray-300">
        &quot;{frontmatter.description}&quot;
      </blockquote>

      {/* Meta Info */}
      <div className="flex flex-col sm:flex-row justify-center text-black dark:text-gray-300 text-sm sm:text-base mb-6 space-y-2 sm:space-y-0 sm:space-x-4 text-center">
        <p>{frontmatter.date}</p>
        <p className="italic">by {frontmatter.author}</p>
      </div>

      {/* Blog Content */}
      <div
        dangerouslySetInnerHTML={{ __html: htmlcontent }}
        className="prose dark:prose-invert"
      ></div>
    </div>
  );
}
