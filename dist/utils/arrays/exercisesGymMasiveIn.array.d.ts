declare const exercisesGym: ({
    typeExercise: string;
    bodypart: string;
    name: string;
    muscles: string[];
    description: string;
    photo: string;
    video: string;
    musclesGruope?: undefined;
} | {
    typeExercise: string;
    bodypart: string;
    name: string;
    musclesGruope: string[];
    description: string;
    photo: string;
    video: string;
    muscles?: undefined;
})[];
export default exercisesGym;
