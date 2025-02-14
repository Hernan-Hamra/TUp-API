import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    validatePassword(enteredPassword: string, storedPasswordHash: string): Promise<boolean>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateStatus(id: string): Promise<User>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
