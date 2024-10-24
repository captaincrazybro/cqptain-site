<script lang="ts">
    import PasswordPage from "$lib/components/PasswordPage.svelte";
    import { getMonthName } from "$lib/util/client/dateUtil";
    import type { PageData } from "./$types";
    import { onMount } from "svelte";
    import { writable, type Writable } from "svelte/store";

    export let data: PageData
    let message = writable("Loading...")
    let books: string[] = []
    let chapters: number[] = []
    let start: Date
    let targetDate: Writable<Date> = writable(new Date())

    const OLD_TEST_DAYS = 237
    const OLD_TEST_CHAPTERS = 929
    const OLD_TEST_CPD = OLD_TEST_CHAPTERS/OLD_TEST_DAYS
    const NEW_TEST_DAYS = 128
    const NEW_TEST_CHAPTERS = 260
    const NEW_TEST_CPD = NEW_TEST_CHAPTERS/NEW_TEST_DAYS

    let book: Writable<string> = writable("")
    let numChaptersToRead: Writable<number> = writable(-1)
    let startingChapter: Writable<number> = writable(1)
    let chapNum: Writable<number> = writable(-1)
    let dayDiff: Writable<number> = writable(-1)

    $: {
        let instDayDiff = start ? Math.floor(($targetDate.getTime() - start.getTime()) / 86400000) : 0
        
        let chaptersReadToDate = calculateTotalChapters(instDayDiff + 1)
        let chaptersReadLastDay = calculateTotalChapters(instDayDiff)
    
        let i = 0
        let totalBookChapters = 0
        let instStartingChapter = 0
        
        while (i < books.length && chaptersReadToDate > totalBookChapters) {
            instStartingChapter = chaptersReadLastDay - totalBookChapters
            totalBookChapters += chapters[i]
            i++
        } 

        book.set(books[i - 1])
        numChaptersToRead.set(chaptersReadToDate - chaptersReadLastDay)
        startingChapter.set(instStartingChapter)
        chapNum.set(i - 1)
        dayDiff.set(instDayDiff)
    }

    function calculateTotalChapters(dayDiff: number): number {
        let numChapters = Math.floor((dayDiff <= OLD_TEST_DAYS ? dayDiff : OLD_TEST_DAYS) * OLD_TEST_CPD)
        numChapters += Math.floor(dayDiff > OLD_TEST_DAYS ? (dayDiff - OLD_TEST_DAYS) * NEW_TEST_CPD : 0)
        return numChapters
    }

    function onLastDayClick() {
        targetDate.update(date => {
            date.setDate($targetDate.getDate() - 1)
            return date
        })
    }

    function onNextDayClick() {
        targetDate.update(date => {
            date.setDate($targetDate.getDate() + 1)
            return date
        })
    }
    
    onMount(async () => {
        const res = await fetch("/bible-reading-plan", {
            method: "POST"
        })
        const jsonRes = await res.json()

        books = jsonRes.books
        chapters = jsonRes.chapters
        start = new Date(jsonRes.startStr)
        message.set('')
    })
</script>

<style>
    .buttons-table {
        margin: auto;
        width: 350px;
    }

    .left-button-row {
        text-align: left;
    }

    .right-button-row {
        text-align: right;
    }
</style>

<h1>Bible Reading Plan</h1>
{#if $message }
    <p>{ $message }</p>
{:else}
    {#if $book }
        <h2>Reading for {getMonthName($targetDate)} {$targetDate.getDate()}, {$targetDate.getFullYear()}</h2>
        <p>Read from <b>{$startingChapter < 0 ? books[$chapNum - 1] : $book} {$startingChapter < 0 ? chapters[$chapNum - 1] + $startingChapter + 1 : $startingChapter + 1}</b> to <b>{$book} {$startingChapter + $numChaptersToRead}</b></p>
        <table class="buttons-table">
            <tr>
                <td class="left-button-row">
                    {#if $dayDiff > 0}
                        <button on:click|preventDefault={onLastDayClick}>Last Day</button>
                    {/if}
                </td>
                <td class="right-button-row">
                    {#if $dayDiff < 364}
                        <button on:click|preventDefault={onNextDayClick}>Next Day</button>
                    {/if}
                </td>
            </tr>
        </table>
    {/if}
{/if}
