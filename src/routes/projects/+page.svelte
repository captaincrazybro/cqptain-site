<script lang="ts">
    import Content from '$lib/components/Content.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<style>
    .project-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: transparent;
    }

</style>

<h1>Projects and Accomplishments</h1>
<div class="project-grid">
    {#each data.projects as project}
        <Content content={project} hostURL={data.hostURL} imageSize={"small"} />
    {/each}
</div>