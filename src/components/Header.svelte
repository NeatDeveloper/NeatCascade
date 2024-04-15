<script lang="ts">
    import { page } from '$app/stores';
    import { UserHolder } from 'components';

    export let user: App.Admin | App.Regular | null = null;
</script>

<header class="header">
    <div class="header-container container">
        <a href={user && 'username' in user ? '/' : '/admin'}><img src="/logo.svg" alt="" /></a>

        {#if user}
            <UserHolder {user} />
        {:else}
            {#if $page.url.pathname.startsWith('/signin')}
                <p>Нет аккаунта? <a href="/signup">Зарегистрируйтесь</a></p>
            {:else if $page.url.pathname.startsWith('/signup')}
                <p>Есть аккаунт? <a href="/signin">Войдите</a></p>
            {/if}
        {/if}
    </div>
</header>

<style lang="scss">
    .header {
        height: var.$header-height;
        &-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }
    }
</style>
