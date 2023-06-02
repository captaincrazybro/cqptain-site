<script lang="ts">
    import { page } from "$app/stores";
    // import { getPasswordState } from "$lib/util/client/passwordPages";
    import type { PageData } from "$types";

    // Recieves the data from the password passed from the server
    export let data: PageData

    let slug = $page.url.pathname
    // let isValidated = getPasswordState(slug)
    let formPassword = ''

    // if (data.passwordCorrect) {
    //     isValidated.set(true)
    // }

</script>

<style>
    .error-message {
        color: red;
    }
    .password-form {
        width: 250px;
        margin: auto;
    }
    .password-label {
        text-align: left;
        margin: 5px 0;
    }
    .password-field {
        width: 100%;
    }
    .password-submit {
        text-align: right;
    }
</style>

{#if data.passwordCorrect}
    <slot/>
{:else}
    {#if data.message}
        <p class="error-message">{data.message}</p>
    {/if}
    <p>Please enter in the password.</p>
    <form class="password-form" method="POST">
        <label class="password-label" for="password">Password</label>
        <input class="password-field" type="password" name="password" bind:value={formPassword} />
        <br />
        <div class="password-submit">
            <button type="submit">Submit</button>
        </div>
    </form>
{/if}