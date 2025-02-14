import { Document } from "mongoose";
export interface User extends Document {
    profilePhoto?: string;
    username: string;
    password: string;
    role: 'level1' | 'level2' | 'admin';
    genre: 'M' | 'F' | 'X';
    target: 'strength' | 'endurance' | 'power' | 'speed' | 'sportsTransfer' | 'cardio';
    Birthdate?: Date;
    email: string;
    country: string;
    city: string;
    height: number;
    weight: number;
    trainingHistory?: string[];
    trainLevel: 'Amateur' | 'Intermediate' | 'Advanced' | 'Professional';
    test?: {
        squat?: number;
        chest?: number;
        dorsal?: number;
        biceps?: number;
        tricets?: number;
    };
    phoneNumber?: number;
    weeklyTrainingDays: 1 | 2 | 3 | 4 | 5 | 6;
    status: boolean;
    identity?: {
        nationalId?: number;
        country?: string;
    };
}
