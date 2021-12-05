import {remark} from "remark";
import html from "remark-html";
import prism from "remark-prism";

export async function markdownToHtml(markdown: any) {
    const result = await remark().use(html, {sanitize: false}).use(prism).process(markdown);
    return result.toString();
}
