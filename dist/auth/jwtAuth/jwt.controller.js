"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtController = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../jwtAuth/jwt.service");
const jwt_guard_1 = require("../guards/jwt.guard");
const users_service_1 = require("../../users/users.service");
let JwtController = class JwtController {
    constructor(myJwtService, userService) {
        this.myJwtService = myJwtService;
        this.userService = userService;
    }
    async login(loginData) {
        const { email, password } = loginData;
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new common_1.HttpException('Credenciales incorrectas', common_1.HttpStatus.UNAUTHORIZED);
        }
        const isPasswordValid = await this.userService.validatePassword(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('Credenciales incorrectas', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = {
            email: user.email,
            role: user.role,
            status: user.status,
        };
        const token = await this.myJwtService.generateToken(payload);
        return { token };
    }
    getProfile(req) {
        return { message: 'Ruta protegida', user: req.user };
    }
};
exports.JwtController = JwtController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JwtController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JwtController.prototype, "getProfile", null);
exports.JwtController = JwtController = __decorate([
    (0, common_1.Controller)('jwt'),
    __metadata("design:paramtypes", [jwt_service_1.MyJwtService,
        users_service_1.UsersService])
], JwtController);
//# sourceMappingURL=jwt.controller.js.map