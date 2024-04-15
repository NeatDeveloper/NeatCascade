<script lang="ts">
    import { Footer, Header } from 'components';
    import 'styles/index.scss';

</script>

<Header />
<div class="authorization container">
    <slot />
</div>
<Footer />

<style lang="scss">
    .authorization {
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
    }
</style>