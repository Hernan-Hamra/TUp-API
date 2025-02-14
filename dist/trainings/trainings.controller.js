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
exports.TrainingsController = void 0;
const common_1 = require("@nestjs/common");
const trainings_service_1 = require("./trainings.service");
const create_training_dto_1 = require("./dto/create-training.dto");
const update_training_dto_1 = require("./dto/update-training.dto");
let TrainingsController = class TrainingsController {
    constructor(trainingsService) {
        this.trainingsService = trainingsService;
    }
    create(createTrainingDto) {
        return this.trainingsService.create(createTrainingDto);
    }
    findAll() {
        return this.trainingsService.findAll();
    }
    findOne(id) {
        return this.trainingsService.findOne(+id);
    }
    update(id, updateTrainingDto) {
        return this.trainingsService.update(+id, updateTrainingDto);
    }
    remove(id) {
        return this.trainingsService.remove(+id);
    }
};
exports.TrainingsController = TrainingsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_training_dto_1.CreateTrainingDto]),
    __metadata("design:returntype", void 0)
], TrainingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrainingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrainingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_training_dto_1.UpdateTrainingDto]),
    __metadata("design:returntype", void 0)
], TrainingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrainingsController.prototype, "remove", null);
exports.TrainingsController = TrainingsController = __decorate([
    (0, common_1.Controller)('trainings'),
    __metadata("design:paramtypes", [trainings_service_1.TrainingsService])
], TrainingsController);
//# sourceMappingURL=trainings.controller.js.map