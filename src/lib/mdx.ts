import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

export async function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            frontmatter: data,
            content
        };
    } catch (e) {
        return null;
    }
}

export async function getAllPosts() {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    const posts = files
        .filter((filename) => filename.endsWith('.mdx'))
        .map((filename) => {
            const slug = filename.replace(/\.mdx$/, '');
            const fullPath = path.join(contentDirectory, filename);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                frontmatter: data,
            };
        })
        .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));

    return posts;
}
