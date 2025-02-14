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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const countries_array_1 = require("../../utils/arrays/countries.array");
class TrainingHistoryDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TrainingHistoryDto.prototype, "trainingId", void 0);
class TestDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TestDto.prototype, "squat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TestDto.prototype, "chest", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TestDto.prototype, "dorsal", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TestDto.prototype, "biceps", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TestDto.prototype, "tricets", void 0);
class IdentityDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], IdentityDto.prototype, "nationalId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IdentityDto.prototype, "country", void 0);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "profilePhoto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['admin', 'level1', 'level2']),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['M', 'F', 'X']),
    __metadata("design:type", String)
], CreateUserDto.prototype, "genre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)([
        'strength',
        'endurance',
        'power',
        'speed',
        'sportsTransfer',
        'cardio',
    ]),
    __metadata("design:type", String)
], CreateUserDto.prototype, "target", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(countries_array_1.default),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TrainingHistoryDto),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "trainingHistory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['Amateur', 'Intermediate', 'Advanced', 'Professional']),
    __metadata("design:type", String)
], CreateUserDto.prototype, "trainLevel", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TestDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", TestDto)
], CreateUserDto.prototype, "test", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsEnum)([1, 2, 3, 4, 5, 6]),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "weeklyTrainingDays", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => IdentityDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", IdentityDto)
], CreateUserDto.prototype, "identity", void 0);
//# sourceMappingURL=create-user.dto.js.map