import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import * as fs from "fs";

export const POST: RequestHandler = async (event) => {
    let res = await event.fetch('./books_and_chapters.csv')
    // let fileStr = fs.readFileSync(".vercel_build_output/static/books_and_chapters.csv", { encoding: 'utf8', flag: 'r'})
    let fileStr = await res.text()
    let fileLines = fileStr.split("\n")

    let books: string[] = []
    let chapters: number[] = []

    fileLines.forEach(line => {
        let data = line.split(",")
        books.push(data[0])
        chapters.push(Number(data[1]))
    })

    return json({
        startStr: new Date(1729709717435),
        books: books,
        chapters: chapters,
    })
}
