import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const episodesDirectory = path.join(process.cwd(), 'src/content/episodes');

export interface Episode {
  slug: string;
  title: string;
  subtitle: string;
  episodeNumber: number;
  publishDate: string;
  excerpt: string;
  duration: string;
  featured: boolean;
  content: string;       // raw markdown
  htmlContent: string;   // rendered HTML
}

function parseDate(dateStr: string): Date {
  // Handle "February 2026" and other formats
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

export function getAllEpisodes(): Episode[] {
  if (!fs.existsSync(episodesDirectory)) return [];
  
  const files = fs.readdirSync(episodesDirectory).filter(f => f.endsWith('.md'));
  
  const episodes = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(episodesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: data.slug || slug,
      title: data.title || slug,
      subtitle: data.subtitle || '',
      episodeNumber: data.episodeNumber || 0,
      publishDate: data.publishDate || '',
      excerpt: data.excerpt || '',
      duration: data.duration || '',
      featured: data.featured || false,
      content,
      htmlContent: marked(content) as string,
    };
  });
  
  // Sort by episode number, newest first
  episodes.sort((a, b) => b.episodeNumber - a.episodeNumber);
  
  return episodes;
}

export function getEpisodeBySlug(slug: string): Episode | null {
  const filePath = path.join(episodesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug: data.slug || slug,
    title: data.title || slug,
    subtitle: data.subtitle || '',
    episodeNumber: data.episodeNumber || 0,
    publishDate: data.publishDate || '',
    excerpt: data.excerpt || '',
    duration: data.duration || '',
    featured: data.featured || false,
    content,
    htmlContent: marked(content) as string,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(episodesDirectory)) return [];
  return fs.readdirSync(episodesDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}