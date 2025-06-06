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
    <div className="p-8 display flex flex-col items-center max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">News</h1>
      <ul className="space-y-10 mt-10">
        {posts.map((post) => (
          <li  key={post.slug}>
            <Link href={`/news/${post.slug}`} className="text-base sm:text-lg md:text-xl text-gray-200 hover:text-blue-300 hover:underline transition-colors">
              {post.title} <br></br> 
              <span className="text-gray-500 font-mono">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}