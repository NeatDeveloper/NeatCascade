import type Pocketbase from 'pocketbase';

declare global {
    namespace App {
        interface Error { }
        interface Locals {
            user: Admin | Regular | null;
            pb: Pocketbase;
            role: 'admin' | 'regular';
        }
        interface PageData { }
        interface PageState { }
        interface Platform { }

        interface Admin {
            id: string;
            created: string;
            updated: string;
            email: string;
            avatar: string;
        }
        interface Regular {
            id: string;
            avatar: string;
            username: string;
            lastName: string;
            firstName: string;
            verified: boolean;
            email: string;
            updated: string;
            created: string;
        }

        interface TrainGame {
            id: number;
            scores: number;
            time: number;
        }
        
        interface TrainData {
            childAge: number | null;
            childGrade: number | null;
            games: TrainGame[];
        }

        interface TrainResults {
            id: string;
            totalTime: number;
            totalScores: number;
            sequence: number;
            results: TrainGame[];
            childAge: number;
            childGrade: number;
            expand: {
                user: Regular
            }
            updated: string;
            created: string;
        }
    }
}

export { };
