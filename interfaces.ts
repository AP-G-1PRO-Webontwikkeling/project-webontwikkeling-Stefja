export interface character {
    id: string;
    name: string;
    back: string;
    age: number;
    birthYear: string;
    isPlayable: boolean;
    imageUrl: string;
    race: string;
    actions: string[];
    class: string;
    alignment: alignment;
}

export interface alignment {
    id: string;
    name: string;
    description: string;
    opposingAligment: string;
}
