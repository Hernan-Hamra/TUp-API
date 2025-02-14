"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthJwtDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_auth_jwt_dto_1 = require("./create-auth-jwt.dto");
class UpdateAuthJwtDto extends (0, mapped_types_1.PartialType)(create_auth_jwt_dto_1.CreateAuthJwtDto) {
}
exports.UpdateAuthJwtDto = UpdateAuthJwtDto;
//# sourceMappingURL=update-auth-jwt.dto.js.map