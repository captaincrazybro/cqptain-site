<script lang="ts">
    import PasswordPage from "$lib/components/PasswordPage.svelte";
    import Content from "$lib/components/Content.svelte";
    import type { PageData } from "./$types";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let data: PageData
    let message = writable("Loading...")
    let locations = writable([])
    let hostURL = writable('')
    
    onMount(async () => {
        if (data.passwordCorrect) {
            const res = await fetch("/prague-journey", {
                method: "POST"
            })
            const jsonRes = await res.json()

            locations.set(jsonRes.locations)
            hostURL.set(jsonRes.hostURL)
        }
    })
</script>

<PasswordPage data={data}>
    <h1>Prague Journey</h1>
    {#if $locations.length == 0}
        { $message }
    {:else}
        <div>
            {#each $locations as location}
                <Content content={location} hostURL={$hostURL} imageSize={"large"} />
            {/each}
        </div>
    {/if}
</PasswordPage>