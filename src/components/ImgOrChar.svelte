<script lang="ts">
    export let 
        src: string,
        name: string,
        size: number = 30;
</script>

{#if (typeof src === 'string' && src.length === 0) || typeof src === 'number'}
    <div style="--size: {size};" class="avatar avatar_custom">{ name ? name[0] : 'A' }</div>
{:else}
    <img style="--size: {size};" class="avatar" {src} alt="Avatar">
{/if}

<style lang="scss">
    .avatar {
        width: calc(var(--size) * 1px); 
        aspect-ratio: 1 / 1;
        border-radius: 50%;

        &_custom {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6E330C;
            font-weight: 500;
            font-size: calc(1.6rem * var(--size) / 30);
            background-color: #FBDFB1;
        }
    }
</style>