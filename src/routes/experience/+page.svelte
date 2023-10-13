<script>
    import Container from "$lib/components/Container.svelte";
    import Language from "$lib/components/Language.svelte";
    import Skill from "$lib/components/Skill.svelte";
    import { formatExperienceDate } from "$lib/util/client/dateUtil";
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let workExperiences = writable([])
    let skills = writable([])
    let languages = writable([])
    let hostURL = writable('')
    let message = writable("Loading...")

    onMount(async () => {
        const res = await fetch("/experience", {
            method: "POST"
        })
        const jsonRes = await res.json()

        workExperiences.set(jsonRes.workExperiences)
        skills.set(jsonRes.skills)
        languages.set(jsonRes.languages)
        message.set('')
        hostURL.set(jsonRes.hostURL)
    })
</script>

<style>
    .experience-table {
        width: 100%;
    }

    .experiences-row {
        text-align: left;
        width: 60%;
        vertical-align: top;
    }

    .skills-row {
        width: 40% !important;
        vertical-align: top;
    }

    .work-experience-table {
        width: 100%;
    }

    .work-experience-name {
        width: 60%;
        text-align: left;
        vertical-align: top;
    }

    .work-experience-date {
        width: auto;
        text-align: right;
        vertical-align: top;
    }

    .work-experience-details {
        width: 100%;
        text-align: left;
    }

    .allcaps {
        text-transform: uppercase;
    }
</style>

<h1>Experience</h1>
<table class="experience-table">
    <tr>
        <td class="experiences-row">
            <Container>
                <h2>Work Experiences</h2>
                {#if $message }
                    <p>{ $message }</p>
                {:else}
                    {#each $workExperiences as workExp}
                        <table class="work-experience-table">
                            <tr>
                                <td class="work-experience-name">
                                    <b>{ workExp.company }{ workExp.location ? ", " + workExp.location : "" }</b> - <i>{workExp.role}</i>
                                </td>
                                <td class="work-experience-date">
                                    <div class="allcaps">{formatExperienceDate(workExp.startDate)} - {workExp.isCurrentlyWorking ? "present" : formatExperienceDate(workExp.endDate)}</div>
                                </td>
                            </tr>
                        </table>
                        <table class="work-experience-table">
                            <tr>
                                <td class="work-experience-details">
                                    {@html workExp.description}
                                </td>
                            </tr>
                        </table>
                    {/each}
                {/if}
            </Container>
        </td>
        <td class="skills-row">
            <Container>
                <h2>Languages</h2>
                {#if $message }
                    <p>{ $message }</p>
                {:else}
                    { #each $languages as language }
                        <Language isProficient={language.isProficient}>{language.name}</Language>
                    {/each}
                {/if}
                <h2>Skills</h2>
                {#if $message }
                    <p>{ $message }</p>
                {:else}
                    { #each $skills as skill }
                        <Skill>{skill.name}</Skill>
                    {/each}
                {/if}
            </Container>
        </td>
    </tr>
</table>