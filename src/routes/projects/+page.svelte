<script lang="ts">
    import Content from '$lib/components/Content.svelte';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let projects = writable([])
    let hostURL = writable('')
    let message = writable("Loading...")

    onMount(async () => {
        const res = await fetch("/projects", {
            method: "POST"
        })
        const jsonRes = await res.json()

        projects.set(jsonRes.projects)
        hostURL.set(jsonRes.hostURL)
    })
</script>

<style>
    .project-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: transparent;
    }

</style>

<h1>Projects and Accomplishments</h1>
{#if $projects.length == 0 }
    <p>{ $message }</p>
{:else}
    <div class="project-grid">
        {#each $projects as project}
            <Content content={project} hostURL={$hostURL} imageSize={"small"} />
        {/each}
    </div>
{/if}