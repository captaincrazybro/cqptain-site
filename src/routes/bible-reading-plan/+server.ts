import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import * as fs from "fs";

export const POST: RequestHandler = async () => {
    let fileStr = fs.readFileSync("./static/books_and_chapters.csv", { encoding: 'utf8', flag: 'r'})
    let fileLines = fileStr.split("\n")

    let books: string[] = []
    let chapters: number[] = []

    fileLines.forEach(line => {
        let data = line.split(",")
        books.push(data[0])
        chapters.push(Number(data[1]))
    })

    return json({
        startStr: new Date("2023/10/15"),
        books: books,
        chapters: chapters,
    })
}