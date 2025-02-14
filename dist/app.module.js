"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const exercises_module_1 = require("./exercises/exercises.module");
const trainings_module_1 = require("./trainings/trainings.module");
const jwt_module_1 = require("./auth/jwtAuth/jwt.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URL),
            users_module_1.UsersModule,
            exercises_module_1.ExercisesModule,
            trainings_module_1.TrainingsModule,
            jwt_module_1.MyJwtModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map