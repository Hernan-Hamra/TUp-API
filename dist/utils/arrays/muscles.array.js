"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const muscles = [
    {
        name: "Shoulders",
        subgroups: [
            { name: "Deltoids", subsubgroups: ["Anterior deltoid", "Lateral deltoid", "Posterior deltoid"] },
        ],
    },
    {
        name: "Chest",
        subgroups: [
            { name: "Pectoralis major" },
            { name: "Pectoralis minor" },
        ],
    },
    {
        name: "Back",
        subgroups: [
            { name: "Latissimus dorsi" },
            { name: "Trapezius" },
            { name: "Rhomboids" },
            { name: "Erector spinae" },
            { name: "Teres major" },
            { name: "Teres minor" },
        ],
    },
    {
        name: "Arms",
        subgroups: [
            { name: "Biceps brachii" },
            { name: "Triceps brachii" },
            { name: "Brachialis" },
            { name: "Forearms",
                subsubgroups: [
                    "Flexor carpi radialis",
                    "Extensor carpi radialis",
                    "Flexor carpi ulnaris",
                    "Extensor carpi ulnaris",
                ],
            },
        ],
    },
    {
        name: "Legs",
        subgroups: [
            { name: "Quadriceps", subsubgroups: ["Vastus lateralis", "Vastus medialis", "Vastus intermedius", "Rectus femoris"] },
            { name: "Hamstrings", subsubgroups: ["Biceps femoris", "Semitendinosus", "Semimembranosus"] },
            { name: "Glutes", subsubgroups: ["Gluteus maximus", "Gluteus medius", "Gluteus minimus"] },
            { name: "Calves", subsubgroups: ["Gastrocnemius", "Soleus"] },
        ],
    },
    {
        name: "Core",
        subgroups: [
            { name: "Abdominals", subsubgroups: ["Rectus abdominis", "Transverse abdominis", "Internal obliques", "External obliques"] },
            { name: "Lower back", subsubgroups: ["Erector spinae"] },
        ],
    },
    { name: "Neck" },
    { name: "Hands" },
    { name: "Feet" },
];
exports.default = muscles;
//# sourceMappingURL=muscles.array.js.map