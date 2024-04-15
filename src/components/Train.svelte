<script lang="ts">
    export let train: App.TrainResults;

    const gamesNames = [
        'Корректурная проба',
        'Выбери подходящее выражение',
        'Таблица Шульте',
        'Сосчитай фигуры',
        'Расставь предметы',
        'Поиск букв',
        'Пары по картинкам',
        'Выбери вид сверху',
        'Правильный маршрут'
    ];

    let shadowIsClose = true;
</script>


{#if train}
<tr class="train">
    <td colspan="1">{ train.sequence }</td>
    <td colspan="5" class="train-user">
        <div class="view">{ train.expand.user.firstName }</div>
        <div class="shadow" data-close={shadowIsClose}>
            {#each train.results as game, i(i)}
                <span>{ gamesNames[game.id - 1] }</span>
            {/each}
        </div>
    </td>
    <td colspan="1" class="train-scores">
        <div class="view">{ train.totalScores } <span on:click={() => shadowIsClose = !shadowIsClose}>{ shadowIsClose ? 'показать' : 'скрыть' }</span></div>
        <div class="shadow" data-close={shadowIsClose}>
            {#each train.results as game, i(i)}
                <span>{ game.scores }</span>
            {/each}
        </div>
    </td>
    <td colspan="1" class="train-time">
        <div class="view">{ train.totalTime }</div>
        <div class="shadow" data-close={shadowIsClose}>
            {#each train.results as game, i(i)}
                <span>{ game.time }</span>
            {/each}
        </div>
    </td>
</tr>
{/if}

<style lang="scss">
    .train {
        &-user,
        &-scores,
        &-time {
            padding-bottom: 10px;

            .shadow {
                display: flex;
                flex-direction: column;

                &[data-close=true] {
                    display: none;
                }
            }
        }
    }
</style>