"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyJwtModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_service_1 = require("./jwt.service");
const jwt_controller_1 = require("./jwt.controller");
const config_1 = require("@nestjs/config");
const users_module_1 = require("../../users/users.module");
let MyJwtModule = class MyJwtModule {
};
exports.MyJwtModule = MyJwtModule;
exports.MyJwtModule = MyJwtModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET_KEY'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRATION') || '4h',
                    },
                }),
            }),
        ],
        controllers: [jwt_controller_1.JwtController],
        providers: [jwt_service_1.MyJwtService],
        exports: [jwt_service_1.MyJwtService, jwt_1.JwtModule],
    })
], MyJwtModule);
//# sourceMappingURL=jwt.module.js.map