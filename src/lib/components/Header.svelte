<script lang="ts">
    import Nav from './Nav.svelte'
</script>

<style>
    .menu {
        background-color: rgb(238, 116, 94);
        margin-bottom: 40px;
        padding: 0 10px;
    }
    .menu-table {
        table-layout: fixed;
        width: 100%;
        height: 100%;
        border-spacing: 0;  
    }
    .menu-logo {
        width: 15%;
        text-align: left;
    }
    .menu-logo a {
        color: white;
        text-decoration: none;
    }
    .menu-nav {
        width: 70%;
        text-align: center;
        padding: 0;
    }
    .menu-account {
        width: 15%;
        text-align: right;
        margin-bottom: 5px;
    }
</style>

<div class="menu">
    <table class="menu-table">
        <tr>
            <td>
                <div class="menu-logo">
                    <a href="/" class="logo">Cqptain</a>
                </div>
            </td>
            <td class="menu-nav">
                <Nav />
            </td>
            <td>
                <div class="menu-account">
                    <!--<a href="/login">Login</a>-->
                </div>
            </td>
        </tr>
    </table>
</div>