<script>
    export let isProficient = false
</script>

<style>
    .language {
        padding: 5px;
        border-style: solid;
        border-width: 2px;
        border-radius: 3px;
        border-color: gray;
        margin: 3px;
        display: inline-block;
    }

    .proficient {
        border-width: 3px;
        border-color: rgb(81, 81, 81);
    }
</style>

<div class="language { isProficient ? "proficient" : ""}">
    <slot />
</div>