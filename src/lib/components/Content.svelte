<script lang="ts">
    import { createImageURL, type Content } from "$lib/util/client/helpers";

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

<div class="project-grid-item">
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
</div>
