import { writable } from 'svelte/store';

const trainStore = writable<App.TrainData>({
    childAge: 5,
    childGrade: 5,
    games: []
});

export default trainStore;