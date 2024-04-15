<script lang="ts">
    import trainStore from "$lib/trainStore";
    import { onMount } from "svelte";
    import type { PageServerData } from "./$types";
    import { goto } from "$app/navigation";

    export let data: PageServerData;

    let trainData: App.TrainData;

    trainStore.subscribe((data) => (trainData = data));

    onMount(() => {

        if (!trainData.childAge || !trainData.childGrade) goto("/");

        window.addEventListener("storage", async __event__ => {
            const { key, newValue } = __event__;
            const value = JSON.parse(newValue as string) as App.TrainGame;

            if (key?.endsWith("_f")) return;

            trainStore.update((data) => ({
                ...data,
                games: [
                    ...data.games,
                    {
                        id: +(key?.at(-1) as string),
                        scores: value.scores,
                        time: parseFloat(value?.time as unknown as string),
                    },
                ],
            }));

            if (key === 'game_9') {

                const formData = new FormData();
                formData.set('trainData', JSON.stringify(trainData))

                const response = await fetch('/train', {
                    method: 'post',
                    body: formData
                });

                if(response.status === 200) {
                    localStorage.setItem('sequence', await response.json());

                    iframe.src = '/games/finish.html';
                }
            }
        });
    });

    let iframe: HTMLIFrameElement;
</script>

<svelte:head>
    <title>Тренировка | Мозг</title>
</svelte:head>


<iframe
    bind:this={iframe}
    id="gameframe"
    src="/games/index.html"
    title="Game"
    frameborder="0"
></iframe>

<style lang="scss">
    #gameframe {
        width: 100%;
        height: calc(100vh - (var.$header-height + var.$footer-height) - 80px);
    }
</style>
