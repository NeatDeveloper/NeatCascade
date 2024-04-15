<svelte:head>
    <title>Вход | Мозг</title>
</svelte:head>

<script lang="ts">
    import { enhance } from '$app/forms';
</script>


<div class="auth squarePattern">
    <div class="auth-header">
        <img src="/user-signin.svg" alt="">
        <h2>Войдите в свой аккаунт</h2>
        <p>Введите свои данные для входа.</p>
    </div>
    <form class="auth-form" method="post" use:enhance>
        <div class="auth-form-row icon-email">
            <input type="email" name="email" placeholder="example@mail.ru" id="email" required>
            <label for="email">Адрес электронной почты</label>
        </div>
        <div class="auth-form-row icon-password">
            <input type="password" name="password" placeholder="• • • • • • • • • • " id="password" required>
            <label for="password">Пароль</label>
        </div>
        <div class="auth-form-row type-checkbox">
            <input type="checkbox" name="admin" id="admin">
            <label for="admin">Как администратор?</label>
        </div>
        <button type="submit">Войти</button>
    </form>
</div>