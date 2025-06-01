import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

// Helper to read and parse posts
function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    const slug = filename.replace(/\.md$/, '');

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1)); // Newest first
}

export default function NewsPage() {
  const posts = getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">News</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li  key={post.slug}>
            <Link href={`/news/${post.slug}`} className="text-xl text-white-700 hover:text-600,  hover:underline">
              {post.title} — <span className="text-gray-500">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}