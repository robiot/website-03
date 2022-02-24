// Only ran at render time
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Post_T } from "../types/post";

const postsDirectory = path.join(process.cwd(), "posts");

export const ensureFolder = (slug: string) => {
    const blogImgPath = path.join(process.cwd(), "public/img/blog", slug);

    if (!fs.existsSync(blogImgPath)) {
        fs.mkdirSync(blogImgPath);
    } else {
        fs.rmSync(blogImgPath, { recursive: true, force: true });
        fs.mkdirSync(blogImgPath);
    }
};
export const copyToPublic = (from: string, slug: string, filename: string) => {
    const blogImgPath = path.join(process.cwd(), "public/img/blog", slug);

    fs.copyFileSync(from, path.join(blogImgPath, filename));
};

export const getPostImagesBySlug = (slug: string) =>
    fs
        .readdirSync(path.join(postsDirectory, slug), { withFileTypes: true })
        .filter((item) => item.isFile() && !item.name.endsWith(".md"))
        .map((item) => {
            return {
                path: path.join(postsDirectory, slug, item.name),
                name: item.name,
            };
        });

export const getPostSlugs = () =>
    fs
        .readdirSync(postsDirectory, { withFileTypes: true })
        .filter((item) => item.isDirectory() && !item.name.startsWith("."))
        .map((dirent) => path.join(dirent.name, "index.md"));

export const getPostBySlug = (slug: string, fields: string[] = []) => {
    const fullPath = path.join(postsDirectory, slug);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items: any = {};

    for (const field of fields) {
        if (field === "slug") {
            items[field] = slug.replace("/index.md", "");
        }

        if (field === "content") {
            items[field] = content;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    }

    return items as Post_T;
};

export const getAllPosts = (fields = [], tag: string = "") => {
    const slugs = getPostSlugs();

    return slugs
        .map((slug) => getPostBySlug(slug, fields))
        .filter((post) => !tag || post.tags.includes(tag))
        .sort((post1, post2) =>
            Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1
        );
};

export const getAllPostTags = () =>
    Array.from(
        new Set(
            getPostSlugs().flatMap(
                (slug) => getPostBySlug(slug, ["tags"] as any).tags
            )
        )
    );
