"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const countries_array_1 = require("../utils/arrays/countries.array");
exports.UserSchema = new mongoose_1.Schema({
    profilePhoto: {
        type: String,
        required: false,
        default: 'https://cdn.playbuzz.com/cdn/913253cd-5a02-4bf2-83e1-18ff2cc7340f/c56157d5-5d8e-4826-89f9-361412275c35.jpg',
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: 'oqiwhd-29bn312dic1232d1i2',
    },
    role: {
        type: String,
        enum: ['admin', 'level1', 'level2'],
        required: true,
        default: 'level2',
    },
    genre: { type: String, required: true, enum: ['M', 'F', 'X'], default: 'X' },
    target: {
        type: String,
        enum: [
            'strength',
            'endurance',
            'power',
            'speed',
            'sportsTransfer',
            'cardio',
        ],
        required: true,
        default: 'strength',
    },
    Birthdate: {
        type: Date,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: true,
        enum: countries_array_1.default,
        default: 'Argentina',
    },
    city: {
        type: String,
        required: true,
        default: 'Buenos Aires Provincia',
    },
    height: {
        type: Number,
        required: true,
        default: 170,
    },
    weight: {
        type: Number,
        required: true,
        default: 72,
    },
    trainingHistory: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: 'trainings',
        },
    ],
    trainLevel: {
        type: String,
        required: true,
        enum: ['Amateur', 'Intermediate', 'Advanced', 'Professional'],
        default: 'Amateur',
    },
    test: {
        squat: {
            type: Number,
            default: 10,
        },
        chest: {
            type: Number,
            default: 10,
        },
        dorsal: {
            type: Number,
            default: 10,
        },
        biceps: {
            type: Number,
            default: 10,
        },
        tricets: {
            type: Number,
            default: 10,
        },
    },
    phoneNumber: {
        type: Number,
        required: false,
        default: 0,
    },
    weeklyTrainingDays: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6],
        required: true,
        default: 2,
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    identity: {
        nationalId: {
            type: Number,
            default: null,
        },
        country: {
            type: String,
            default: 'Argentina',
        },
    },
});
//# sourceMappingURL=users.schema.js.map