import { Schema, Types } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    country: string;
    username: string;
    password: string;
    role: "admin" | "level1" | "level2";
    genre: "M" | "F" | "X";
    target: "strength" | "endurance" | "power" | "speed" | "sportsTransfer" | "cardio";
    email: string;
    city: string;
    height: number;
    weight: number;
    trainingHistory: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    }[];
    trainLevel: "Amateur" | "Intermediate" | "Advanced" | "Professional";
    weeklyTrainingDays: number;
    status: boolean;
    profilePhoto?: string;
    test?: {
        squat: number;
        chest: number;
        dorsal: number;
        biceps: number;
        tricets: number;
    };
    phoneNumber?: number;
    identity?: {
        nationalId: number;
        country: string;
    };
    Birthdate?: NativeDate;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    country: string;
    username: string;
    password: string;
    role: "admin" | "level1" | "level2";
    genre: "M" | "F" | "X";
    target: "strength" | "endurance" | "power" | "speed" | "sportsTransfer" | "cardio";
    email: string;
    city: string;
    height: number;
    weight: number;
    trainingHistory: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    }[];
    trainLevel: "Amateur" | "Intermediate" | "Advanced" | "Professional";
    weeklyTrainingDays: number;
    status: boolean;
    profilePhoto?: string;
    test?: {
        squat: number;
        chest: number;
        dorsal: number;
        biceps: number;
        tricets: number;
    };
    phoneNumber?: number;
    identity?: {
        nationalId: number;
        country: string;
    };
    Birthdate?: NativeDate;
}>> & import("mongoose").FlatRecord<{
    country: string;
    username: string;
    password: string;
    role: "admin" | "level1" | "level2";
    genre: "M" | "F" | "X";
    target: "strength" | "endurance" | "power" | "speed" | "sportsTransfer" | "cardio";
    email: string;
    city: string;
    height: number;
    weight: number;
    trainingHistory: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    }[];
    trainLevel: "Amateur" | "Intermediate" | "Advanced" | "Professional";
    weeklyTrainingDays: number;
    status: boolean;
    profilePhoto?: string;
    test?: {
        squat: number;
        chest: number;
        dorsal: number;
        biceps: number;
        tricets: number;
    };
    phoneNumber?: number;
    identity?: {
        nationalId: number;
        country: string;
    };
    Birthdate?: NativeDate;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
