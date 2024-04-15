<svelte:head>
    <title>Главная | Мозг</title>
</svelte:head>

<script lang="ts">
    import type { PageServerData } from './$types';

    import trainStore from '$lib/trainStore';
    import { ImgOrChar } from 'components';

    export let data: PageServerData;

    let { user } = data;
</script>


{#if user}
    <div class="user squarePattern">
        <div class="user-profile">
            <ImgOrChar src={user.avatar} name={user.firstName} size={120} />
            <div class="user-profile-data">
                <div class="user_name">
                    <span class="user_lastName">{ user.lastName }</span>
                    <span class="user_firstName">{ user.firstName }</span>
                </div>
                <span class="user_email">{ user.email }</span>
            </div>
        </div>

        <div class="user-train">
            <input 
                type="text" 
                placeholder="Возраст ребёнка" 
                min="5" 
                max="19"
                bind:value={$trainStore.childAge}
                on:change={__event__ => trainStore.update(data => ({ ...data, childAge: +__event__.currentTarget.value }))}
            >
            <input 
                type="text" 
                placeholder="В какой класс ходит школьник?" 
                min="1" 
                max="11"
                bind:value={$trainStore.childGrade}
                on:change={__event__ => trainStore.update(data => ({ ...data, childGrade: +__event__.currentTarget.value }))}
            >

            <a href="/train">
                <button>Перейти к тестированию</button>
            </a>
        </div>
    </div>
{/if}

<style lang="scss">
    .user {
        margin: 0 auto;
        
        width: 460px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        &-profile,
        &-train {
            padding: 32px;
            background-color: #fff;
            border-radius: 24px;
            box-shadow: 0px 16px 42px 2px rgba(#585C5F, .1);
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &_name {
            font-weight: 600;
            font-size: 2.2rem;
        }
        &_email {
            color: #8F92A1;
            font-size: 1.8rem;
        }

        &-train {
            align-items: start;
            flex-direction: column;
            input {
                width: 100%;
            }
        }
    }
</style>