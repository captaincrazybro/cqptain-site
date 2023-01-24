<script>
	import { page } from '$app/stores'
	import NavTab from './NavTab.svelte'
    const tabs = [
        {name: "Home", link: "/"},
        {name: "Projects", link: "/projects"},
        {name: "Socials", link: "/socials"},
        {name: "About Me", link: "/about-me"},
    ]
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;
        display: inline-block;
        height: 100%;
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