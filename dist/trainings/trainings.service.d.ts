import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
export declare class TrainingsService {
    create(createTrainingDto: CreateTrainingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTrainingDto: UpdateTrainingDto): string;
    remove(id: number): string;
}
