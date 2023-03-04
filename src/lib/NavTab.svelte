<script>
    export let href = "/";
    export let active = false;
</script>

<style>
    .nav-tab {
        background-color: rgb(212, 92, 71);
        color: lightgray;
    }
    .nav-tab:hover {
        background-color: rgb(189, 65, 43);
        cursor: pointer;
    }
    .nav-tab.active {
        background-color: rgb(165, 37, 15);
    }
    .nav-tab a {
        color: white;
        text-decoration: none;
    }
    .nav-tab a div {
        padding: 11px 15px;
    }
</style>

<div class="nav-tab" class:active="{active}">
    <a href={href}><div><slot /></div></a>
</div>