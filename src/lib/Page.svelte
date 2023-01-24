<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<div class="page">
    <Header />
    <div class="page-content">
        <slot />
    </div>
    <Footer />
</div>