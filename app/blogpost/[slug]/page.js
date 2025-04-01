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
import Head from "next/head";

const postsDirectory = path.join(process.cwd(), "content");

// ✅ Server Component to Fetch Data
export default async function BlogPost({ params }) {
  const { slug } = params;

  const filepath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filepath)) {
    return <h1>404 - Post Not Found</h1>;
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

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8 py-6">
      <Head>
        <title>{data.title} - My Blog</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://myblog.com/blog/${data.slug}`} />
        <meta property="og:image" content={data.image || '/default-image.jpg'} />
      </Head>

      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 text-gray-900 dark:text-white">
        {data.title}
      </h1>

      <blockquote className="text-md sm:text-lg md:text-xl mb-4 font-medium border-l-4 border-gray-500 dark:border-gray-400 italic px-4 text-gray-800 dark:text-gray-300">
        &quot;{data.description}&quot;
      </blockquote>

      <div className="flex flex-col sm:flex-row justify-center text-black dark:text-gray-300 text-sm sm:text-base mb-6 space-y-2 sm:space-y-0 sm:space-x-4 text-center">
        <p>{data.date}</p>
        <p className="italic">by {data.author}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: htmlcontent }} className="prose dark:prose-invert"></div>
    </div>
  );
}
