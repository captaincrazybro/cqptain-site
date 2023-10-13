<script lang="ts">
    import { createImageURL, type Content } from "$lib/util/client/helpers";
    import Container from "./Container.svelte";

    export let content: Content
    export let hostURL: string
    export let imageSize: string
    let imageClass = imageSize == "small" ? "project-image-small" : "project-image-large"
</script>

<style>
    .project-image-large {
        max-height: 300px;
    }
    .project-image-small {
        max-height: 175px;
    }
    .project-table {
        table-layout: fixed;
        height: 100%;
        border-spacing: 10px;  
        margin: auto;
    }
</style>

<Container>
    <table class="project-table">
        <tr>
            {#if content.image }
                <td>
                    <img class={imageClass} src="{createImageURL(hostURL, content.collectionId, content.id, content.image)}" alt="project_image" />
                </td>    
            {/if}
            <td>
                <h3>{content.title}</h3>
                <div>{@html content.description}</div>
                {#if content.link}
                    <a class="project-link" href={content.link} >Project Link</a>
                {/if}
            </td>
        </tr>
    </table>
</Container>
