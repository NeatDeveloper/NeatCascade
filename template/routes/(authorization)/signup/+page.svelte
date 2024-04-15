<svelte:head>
    <title>Регистрация | Мозг</title>
</svelte:head>

<script lang="ts">
    import { enhance } from '$app/forms';
</script>


<div class="auth squarePattern">
    <div class="auth-header">
        <img src="/user-signup.svg" alt="">
        <h2>Создайте новую учетную запись</h2>
        <p>Введите свои данные для регистрации.</p>
    </div>
    <form class="auth-form" method="post" use:enhance>
        <div class="auth-form-row icon-user">
            <input type="text" name="lastName" placeholder="Иванов" id="lastName" required>
            <label for="lastName">Фамилия</label>
        </div>
        <div class="auth-form-row icon-user">
            <input type="text" name="firstName" placeholder="Иван" id="firstName" required>
            <label for="firstName">Имя</label>
        </div>
        <div class="auth-form-row icon-email">
            <input type="email" name="email" placeholder="example@mail.ru" id="email" required>
            <label for="email">Адрес электронной почты</label>
        </div>
        <div class="auth-form-row icon-password">
            <input type="password" name="password" placeholder="• • • • • • • • • •" id="password" required>
            <label for="password">Пароль</label>
        </div>
        <div class="auth-form-row icon-password">
            <input type="password" name="passwordConfirm" placeholder="• • • • • • • • • •" id="passwordConfirm" required>
            <label for="passwordConfirm">Подтверждение пароля</label>
        </div>

        <button type="submit">Регистрация</button>
    </form>
</div>