<script>
    import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'
    import { writable } from 'svelte/store'
    import Fa from 'svelte-fa';

    const discordId = "cqptain#6787"; 
    const linkedInURL = "https://www.linkedin.com/in/levi-wenger-741a9a230/";

    function onDiscordClick() {
        navigator.clipboard.writeText(discordId);
        alert("Successfully copied discord id!")
    }
</script>

<style>
    .socials-icon {
        color: black;
        margin: 20px;
    }
    .socials-icon:hover {
        color: rgb(65, 65, 65);
        cursor: pointer;
    }
</style>

<div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={onDiscordClick} class="socials-icon">
        <Fa icon={faDiscord} size="10x"/> 
    </span>
    <a class="socials-icon" href={linkedInURL}>
        <Fa icon={faLinkedin} size="10x"/> 
    </a>
</div>