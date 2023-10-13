<script lang="ts">
    import PasswordPage from "$lib/components/PasswordPage.svelte";
    import Content from "$lib/components/Content.svelte";
    import type { PageData } from "./$types";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let data: PageData
    let message = writable("Loading...")
    let items = writable([])
    let hostURL = writable('')
    
    onMount(async () => {
        if (data.passwordCorrect) {
            const res = await fetch("/prague-music-tour", {
                method: "POST"
            })
            const jsonRes = await res.json()

            items.set(jsonRes.items)
            hostURL.set(jsonRes.hostURL)
        }
    })
</script>

<PasswordPage data={data}>
    <h1>Prague Journey</h1>
    {#if $items.length == 0}
        <p>{ $message }</p>
    {:else}
        <div>
            {#each $items as location}
                <Content content={location} hostURL={$hostURL} imageSize={"large"} />
            {/each}
        </div>
    {/if}
</PasswordPage>