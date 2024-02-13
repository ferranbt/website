import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

export default function Index({ posts }: { posts: AllPostsData }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Writing</h2>
      <div className="space-y-4">
        {posts.map((blog) => (
          <div key={blog.id} className="">
            {blog.date} ::{" "}
            <Link
              className="text-lg font-bold underline"
              href={`/posts/${blog.id}`}
            >
              {blog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);

    return {
      id: filePath.replace(/\.mdx?$/, ""),
      ...data,
    };
  });

  return { props: { posts } };
}
