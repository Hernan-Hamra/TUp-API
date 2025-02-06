import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuardAuth } from '../auth/guards/jwt.guard'; // Importar el Guard
import { RoleGuard } from 'src/auth/guards/role/role.guard';
import { Roles } from 'src/auth/guards/decorators';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe()) // 👈 No protegemos esta ruta para que cualquiera pueda registrarse
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtGuardAuth) // 👈 Protegemos todas las demás rutas
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuardAuth)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuardAuth)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(JwtGuardAuth, RoleGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch(':id/status') // Nuevo endpoint para cambiar el estado
  @Roles('admin')
  @UseGuards(JwtGuardAuth, RoleGuard)
  updateStatus(@Param('id') id: string) {
    return this.usersService.updateStatus(id);
  }
}
