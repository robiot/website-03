// "December 5, 2021"
import { format } from "date-fns";
export const stringToDate = (date: string) =>
    format(new Date(date), "MMMM d, yyyy");

export const CutContent = (content: string) =>
    content.length > 114 ? `${content.substring(0, 114)}...` : content;
