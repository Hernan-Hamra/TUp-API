import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsEmail,
  IsEnum,
  MinLength,
  MaxLength,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import countries from '../../utils/arrays/countries.array';


class TrainingHistoryDto {
  @IsString()
  @IsOptional()
  trainingId: string;
}

class TestDto {
  @IsNumber()
  @IsOptional()
  squat: number;

  @IsNumber()
  @IsOptional()
  chest: number;

  @IsNumber()
  @IsOptional()
  dorsal: number;

  @IsNumber()
  @IsOptional()
  biceps: number;

  @IsNumber()
  @IsOptional()
  tricets: number;
}

class IdentityDto {
  @IsNumber()
  @IsOptional()
  nationalId: number;

  @IsString()
  @IsOptional()
  country: string;
}

export class CreateUserDto {
  @IsString()
  @IsOptional()
  profilePhoto: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  @IsString()
  @IsEnum(['admin', 'level1', 'level2'])
  role: string;

  @IsString()
  @IsEnum(['M', 'F', 'X'])
  genre: string;

  @IsString()
  @IsEnum([
    'strength',
    'endurance',
    'power',
    'speed',
    'sportsTransfer',
    'cardio',
  ])
  target: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsEnum(countries)
  country: string;

  @IsString()
  city: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TrainingHistoryDto)
  trainingHistory: TrainingHistoryDto[];

  @IsString()
  @IsEnum(['Amateur', 'Intermediate', 'Advanced', 'Professional'])
  trainLevel: string;

  @ValidateNested()
  @Type(() => TestDto)
  @IsOptional()
  test: TestDto;

  @IsNumber()
  @IsOptional()
  phoneNumber: number;

  @IsNumber()
  @IsEnum([1, 2, 3, 4, 5, 6])
  weeklyTrainingDays: number;

  @IsBoolean()
  status: boolean;

  @ValidateNested()
  @Type(() => IdentityDto)
  @IsOptional()
  identity: IdentityDto;
}
