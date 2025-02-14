declare class TrainingHistoryDto {
    trainingId: string;
}
declare class TestDto {
    squat: number;
    chest: number;
    dorsal: number;
    biceps: number;
    tricets: number;
}
declare class IdentityDto {
    nationalId: number;
    country: string;
}
export declare class CreateUserDto {
    profilePhoto: string;
    username: string;
    password: string;
    role: string;
    genre: string;
    target: string;
    email: string;
    country: string;
    city: string;
    height: number;
    weight: number;
    trainingHistory: TrainingHistoryDto[];
    trainLevel: string;
    test: TestDto;
    phoneNumber: number;
    weeklyTrainingDays: number;
    status: boolean;
    identity: IdentityDto;
}
export {};
