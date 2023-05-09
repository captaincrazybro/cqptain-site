<script lang="ts">
    import { createImageURL } from '$lib/util/helpers';
    import type { PageData } from './$types';

    export let data: PageData;
    let projects = data.projects
</script>

<style>
    .project-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: transparent;
    }
    .project-image {
        /* max-width: 30%; */
        max-height: 175px;
    }
    .project-table {
        table-layout: fixed;
        height: 100%;
        border-spacing: 10px;  
        margin: auto;
    }
    .project-grid-item {
        text-align: center;
        background-color: rgb(253, 243, 243);
        border: 2px;
        border-color: rgb(187, 187, 187);
        border-style: solid;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
        padding: 10px;
        margin: 5px;
    }
</style>

<h1>Projects and Accomplishments</h1>
<div class="project-grid">
    {#each projects as project}
        <div class="project-grid-item">
            <table class="project-table">
                <tr>
                    {#if project.image }
                        <td>
                            <img class="project-image" src="{createImageURL(data.hostURL, project.collectionId, project.id, project.image)}" alt="project_image" />
                        </td>    
                    {/if}
                    <td>
                        <h3>{project.title}</h3>
                        <div>{@html project.description}</div>
                        <a class="project-link" href={project.link} >Project Link</a>
                    </td>
                </tr>
            </table>
        </div>
    {/each}
</div>