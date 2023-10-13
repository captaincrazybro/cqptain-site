<script>
    import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa';

    const discordId = "cqptain#6787"; 
    const email = "dev@cqptain.tk";
    const linkedInURL = "https://www.linkedin.com/in/levi-wenger-741a9a230/";

    function onDiscordClick() {
        navigator.clipboard.writeText(discordId);
        alert("Successfully copied discord id!")
    }

    function onMailClick() {
        navigator.clipboard.writeText(email)
        alert("Successfully copied email address!")
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
        <Fa icon={faDiscord} size="10x" /> 
    </span>
    <a class="socials-icon" href={linkedInURL}>
        <Fa icon={faLinkedin} size="10x" /> 
    </a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={onMailClick} class="socials-icon">
        <Fa icon={faEnvelope} size="10x" />
    </span>
</div>