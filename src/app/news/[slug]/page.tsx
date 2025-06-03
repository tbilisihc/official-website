import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

type Params = Promise<{slug: string}>;
export default async function News( slug : Params) {;
  const postPath = path.join(process.cwd(), 'posts', `${slug}.md`);

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);

  const html = marked.parse(content) as string;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-6">{data.date}</p>
      <p
        className=""
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    </div>
  );
}