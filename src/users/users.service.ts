import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // 1- Crear un nuevo usuario-----------------------
  async create(createUserDto: CreateUserDto) {
    // Encriptar la contraseña antes de guardarla
    const saltRounds = 10; // Número de rondas para el hash
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );

    // Creamos el objeto del nuevo usuario con la contraseña encriptada
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword, // Usamos la contraseña encriptada
    });

    // Guardar en la base de datos
    return createdUser.save();
  }

  // 2- Método para validar la contraseña (puedes usarlo para el login)
  async validatePassword(
    enteredPassword: string,
    storedPasswordHash: string,
  ): Promise<boolean> {
    const isMatch = await bcrypt.compare(enteredPassword, storedPasswordHash);
    return isMatch;
  }

  // 3- Obtener todos los usuarios-----------------
  findAll() {
    return this.userModel.find().exec(); // Recupera todos los usuarios
  }

  // 4- Obtener un usuario por su ID----------------------
  findOne(id: string) {
    return this.userModel.findById(id).exec(); // Busca por _id (ObjectId en MongoDB)
  }

  // 5-Obtener un usuario por su email----------------
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec(); // Busca por email
  }

  // 6- Actualizar un usuario------------------
  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, {
        new: true, // Devuelve el documento actualizado
      })
      .exec();
  }

  // 7- Método para cambiar el status del usuario. true o false (o viceversa)
  async updateStatus(id: string): Promise<User> {
    // Buscar al usuario por ID
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }

    // Cambiar el estado de 'activo' a 'inactivo', o viceversa
    user.status = !user.status;

    // Guardar el usuario con el nuevo estado
    return user.save();
  }

  // 8-Eliminar un usuario-----------------------
  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec(); // Elimina por _id
  }

}
