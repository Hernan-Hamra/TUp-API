"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySubMuscle = exports.arrayMuscle = exports.arrayBodySubPart = exports.arrayBodyPart = void 0;
const bodyPartMuscles = [
    {
        bodyPart: "Upper Body",
        parts: [{
                name: "Shoulders",
                muscles: [{
                        name: "Deltoids",
                        submuscles: ["Anterior deltoid", "Lateral deltoid", "Posterior deltoid"]
                    },],
            },
            {
                name: "Chest",
                muscles: [{
                        name: "Pectoralis major",
                        submuscles: []
                    },
                    {
                        name: "Pectoralis minor",
                        submuscles: []
                    },
                ],
            },
            {
                name: "Back",
                muscles: [{
                        name: "Latissimus dorsi",
                        submuscles: []
                    },
                    {
                        name: "Trapezius",
                        submuscles: []
                    },
                    {
                        name: "Rhomboids",
                        submuscles: []
                    },
                    {
                        name: "Erector spinae",
                        submuscles: []
                    },
                    {
                        name: "Teres major",
                        submuscles: []
                    },
                    {
                        name: "Teres minor",
                        submuscles: []
                    },
                ],
            },
            {
                name: "Arms",
                muscles: [{
                        name: "Biceps brachii",
                        submuscles: []
                    },
                    {
                        name: "Triceps brachii",
                        submuscles: []
                    },
                    {
                        name: "Brachialis",
                        submuscles: []
                    },
                    {
                        name: "Forearms",
                        submuscles: [
                            "Flexor carpi radialis",
                            "Extensor carpi radialis",
                            "Flexor carpi ulnaris",
                            "Extensor carpi ulnaris",
                        ],
                    },
                ],
            },
        ],
    },
    {
        bodyPart: "Lower Body",
        parts: [{
                name: "Legs",
                muscles: [{
                        name: "Quadriceps",
                        submuscles: ["Vastus lateralis", "Vastus medialis", "Vastus intermedius", "Rectus femoris"]
                    },
                    {
                        name: "Hamstrings",
                        submuscles: ["Biceps femoris", "Semitendinosus", "Semimembranosus"]
                    },
                    {
                        name: "Glutes",
                        submuscles: ["Gluteus maximus", "Gluteus medius", "Gluteus minimus"]
                    },
                    {
                        name: "Calves",
                        submuscles: ["Gastrocnemius", "Soleus"]
                    },
                ],
            },],
    },
    {
        bodyPart: "Core",
        parts: [{
                name: "Core",
                muscles: [{
                        name: "Abdominals",
                        submuscles: ["Rectus abdominis", "Transverse abdominis", "Internal obliques", "External obliques"]
                    },
                    {
                        name: "Lower back",
                        submuscles: ["Erector spinae"]
                    },
                ],
            },],
    },
    {
        bodyPart: "Others",
        parts: [{
                name: "Neck",
                muscles: []
            },
            {
                name: "Hands",
                muscles: []
            },
            {
                name: "Feet",
                muscles: []
            },
        ],
    }
];
let arrayBodyPart = [];
exports.arrayBodyPart = arrayBodyPart;
let arrayBodySubPart = [];
exports.arrayBodySubPart = arrayBodySubPart;
let arrayMuscle = [];
exports.arrayMuscle = arrayMuscle;
let arraySubMuscle = [];
exports.arraySubMuscle = arraySubMuscle;
bodyPartMuscles.map((bodyPartMuscle) => {
    arrayBodyPart.push(bodyPartMuscle.bodyPart);
    bodyPartMuscle.parts.map((part) => {
        arrayBodySubPart.push(part.name);
        part.muscles.map((muscle) => {
            arrayMuscle.push(muscle.name);
            muscle.submuscles.map((subMuscle) => {
                arraySubMuscle.push(subMuscle);
            });
        });
    });
});
//# sourceMappingURL=bodyPartMuscles.array.js.map