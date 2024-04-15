<svelte:head>
    <title>Панель | Мозг</title>
</svelte:head>

<script lang="ts">
    import urlCreate from '$lib/urlCreate';
    import type { PageData } from './$types';
    import { Train } from 'components';
    import { page } from '$app/stores';
    // import urlCreate from '$lib/urlCreate';

    export let data: PageData;
    $: trains = data.trains

    let pageSize = 10;
    $: pageIndex = +($page.url.searchParams.get('page') as string) || 1;


    $: prevLink = urlCreate($page.url.href, 'page', pageIndex - 1 || 1).href
    $: nextLink = urlCreate($page.url.href, 'page', pageIndex + 1 > trains.totalPages ? trains.totalPages : pageIndex + 1).href

    $: sequenceDown = urlCreate($page.url.href, 'sort', 'sequence').href
    $: sequenceUp = urlCreate($page.url.href, 'sort', '-sequence').href

    $: nameDown = urlCreate($page.url.href, 'sort', 'user.firstName').href
    $: nameUp = urlCreate($page.url.href, 'sort', '-user.firstName').href

    $: scoresDown = urlCreate($page.url.href, 'sort', 'totalScores').href
    $: scoresUp = urlCreate($page.url.href, 'sort', '-totalScores').href

    $: timeUp = urlCreate($page.url.href, 'sort', '-totalTime').href
    $: timeDown = urlCreate($page.url.href, 'sort', 'totalTime').href
</script>

<table>
    <thead>
        <tr>
            <td colspan="1" class="sequence">
                <span>Порядковый номер</span>
                <a href={sequenceUp}><img src="/triangle.svg" alt=""></a>
                <a href={sequenceDown}><img style="rotate: 180deg" src="/triangle.svg" alt=""></a>
            </td>
            <td colspan="5" class="firstName">
                <span>Имя участника</span>
                <a href={nameUp}><img src="/triangle.svg" alt=""></a>
                <a href={nameDown}><img style="rotate: 180deg" src="/triangle.svg" alt=""></a>
            </td>
            <td colspan="1" class="totalScores">
                <span>Очки</span>
                <a href={scoresUp}><img src="/triangle.svg" alt=""></a>
                <a href={scoresDown}><img style="rotate: 180deg" src="/triangle.svg" alt=""></a>
            </td>
            <td colspan="1" class="totalTime">
                <span>Общее время</span>
                <a href={timeUp}><img src="/triangle.svg" alt=""></a>
                <a href={timeDown}><img style="rotate: 180deg" src="/triangle.svg" alt=""></a>
            </td>
        </tr>
    </thead>
    <tbody>
        {#if trains}
            {#each trains.items as train (train.id)}
                <Train {train} />
            {/each}
        {/if}
    </tbody>
</table>

<nav>
    <ul>
        <li>
            <a href={prevLink}>{'<'}</a>
        </li>
        {#each { length: trains.totalPages } as _, i(i)}
            <li><a href={urlCreate($page.url.href, 'page', i + 1).href}>{i + 1}</a></li>
        {/each}
        <li><a href={nextLink}>{'>'}</a></li>
    </ul>
    Страница { trains.page } из { trains.totalPages }
</nav>

<style lang="scss">
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 10em;
    }
</style>