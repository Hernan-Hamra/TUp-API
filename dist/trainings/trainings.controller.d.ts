import { TrainingsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
export declare class TrainingsController {
    private readonly trainingsService;
    constructor(trainingsService: TrainingsService);
    create(createTrainingDto: CreateTrainingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTrainingDto: UpdateTrainingDto): string;
    remove(id: string): string;
}
