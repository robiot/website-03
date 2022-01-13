import matter from "gray-matter";
import fs from "node:fs";
import { join } from "node:path";

import { Post_T } from "../types/post";

const postsDirectory = join(process.cwd(), "posts");

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug: string, fields = []) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items: any = {};

    for (const field of fields) {
        if (field === "slug") {
            items[field] = realSlug;
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
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};

export const getAllPostTags = () =>
    Array.from(
        new Set(
            getPostSlugs().flatMap(
                (slug) => getPostBySlug(slug, ["tags"] as any).tags
            )
        )
    );
