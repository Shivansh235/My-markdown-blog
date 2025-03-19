import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const getBlogs = async () => {
  const contentDir = path.join(process.cwd(), "content");

  if (!fs.existsSync(contentDir)) {
    return []; // Return an empty array if directory is missing
  }

  const dirContent = fs.readdirSync(contentDir, "utf-8");
  const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: data.slug || file.replace(".md", ""), // Ensure slug exists
    };
  });

  return blogs;
};

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog) => (
          <div
            key={blog.slug} // Use slug as key instead of index
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 dark:bg-black rounded-lg"
          >
            <img
              className="w-full h-60 object-cover"
              src={blog.image || "/default.jpg"} // Handle missing images
              alt={blog.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {blog.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{`By ${blog.author} on ${blog.date}`}</p>
            </div>

            <Link
              href={`/blogpost/${blog.slug}`}
              className={`${buttonVariants({ variant: "outline" })} mb-4 mx-5.5`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
