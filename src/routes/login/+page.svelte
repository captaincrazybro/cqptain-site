<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import type { PageData } from "./$types";
    import { goto } from "$app/navigation";
    
    let message = writable('')
    export let data: PageData

    onMount(() => {
        if (data.loginCorrect) {
            goto('/')
        }
    })
</script>

<style>
    .login-form {
        width: 300px;
        margin: auto;
    }
    .login-label {
        text-align: left;
        margin: 5px 0;
    }
    .login-field {
        width: 100%;
    }
    .submit-button {
        text-align: right;
    }
</style>

{#if $message}
    <p style="login-message">{ message }</p>
{/if}
<form class="login-form" method="POST" >
    <label for="username" class="login-label">Username</label>
    <input type="text" name="username" class="login-field" />
    <br />
    <label for="password" class="login-label">Password</label>
    <input type="password" name="password" class="login-field" />
    <br />
    <div class="submit-button">
        <button type="submit">Login</button>
    </div>
</form>