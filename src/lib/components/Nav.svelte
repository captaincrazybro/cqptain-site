<script lang="ts">
	import { page } from '$app/stores'
	import NavTab from './NavTab.svelte'
    const tabs = [
        {name: "Home", link: "/"},
        {name: "Projects", link: "/projects"},
        {name: "Socials", link: "/socials"},
        {name: "Experience", link: "/experience"},
    ]
</script>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        text-align: center;
        display: inline-block;
        margin-bottom: -4px;
    }
    li {
        float: left;
    }
</style>

<ul>
    {#each tabs as tab}
        <li><NavTab href={tab.link} active={$page.route.id == tab.link}>{tab.name}</NavTab></li>
    {/each}
</ul>