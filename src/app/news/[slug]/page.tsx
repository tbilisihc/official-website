import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { marked } from 'marked';


export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(postsDir);
    const slugs = files.map((filename) => {
      return {
        slug: filename.replace(/\.md$/, ''),
      };
    });
    return slugs;
}

export default async function News( props: {
  params: Promise<{ slug: string }>}) {;
    const params = await props.params;
  const postPath = path.join(process.cwd(), 'posts', `${params.slug}.md`);

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);

  const html = marked.parse(content) as string;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm sm:text-base text-gray-400 mb-6">{data.date}</p>
      <p
        className="prose prose-invert max-w-none text-sm sm:text-base"
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    </div>
  );
}