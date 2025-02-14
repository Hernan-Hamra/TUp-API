import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./interface/user.interface").User> & import("./interface/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./interface/user.interface").User> & import("./interface/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./interface/user.interface").User> & import("./interface/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./interface/user.interface").User> & import("./interface/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./interface/user.interface").User> & import("./interface/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateStatus(id: string): Promise<import("./interface/user.interface").User>;
}
