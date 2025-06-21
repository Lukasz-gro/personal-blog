import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default async function Post() {
  const filePath = path.join(process.cwd(), 'posts', 'article.md');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { content } = matter(fileContents);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}