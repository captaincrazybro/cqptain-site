<script lang="ts">
    import PasswordPage from "$lib/components/PasswordPage.svelte";
    import Content from "$lib/components/Content.svelte";
    import type { PageData } from "./$types";
    import { hostURL, locations } from "$lib/util/client/pragueJourney";

    export let data: PageData
    
    if (data.locations.length > 0) {
        locations.set(data.locations)
    }
    if (data.hostURL) {
        hostURL.set(data.hostURL)
    }
</script>

<PasswordPage data={data}>
    <h1>Prague Journey</h1>
    <div>
        {#each $locations as location}
            <Content content={location} hostURL={$hostURL} imageSize={"large"} />
        {/each}
    </div>
</PasswordPage>