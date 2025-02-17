import { Document } from "mongoose";
export interface User extends Document{
  profilePhoto?: string; // Foto de perfil del usuario
  username: string; // Nombre de usuario único
  password: string; // Contraseña del usuario
  role: 'level1' | 'level2' | 'admin'; // Rol del usuario
  genre: 'M' | 'F' | 'X'; // Género del usuario
  target:
    | 'strength'
    | 'endurance'
    | 'power'
    | 'speed'
    | 'sportsTransfer'
    | 'cardio'; // Objetivo de entrenamiento
  Birthdate?: Date; // Fecha de nacimiento (opcional)
  email: string; // Correo electrónico único
  country: string; // País de residencia
  city: string; // Ciudad de residencia
  height: number; // Altura del usuario en cm
  weight: number; // Peso del usuario en kg
  trainingHistory?: string[]; // Historial de entrenamientos (referencias a IDs)
  trainLevel: 'Amateur' | 'Intermediate' | 'Advanced' | 'Professional'; // Nivel de entrenamiento
  test?: {
    // Tests de fuerza
    squat?: number;
    chest?: number;
    dorsal?: number;
    biceps?: number;
    tricets?: number;
  };
  phoneNumber?: number; // Número de teléfono (opcional)
  weeklyTrainingDays: 1 | 2 | 3 | 4 | 5 | 6; // Días de entrenamiento semanal
  status: boolean; // Estado activo/inactivo del usuario
  identity?: {
    // Información de identidad
    nationalId?: number;
    country?: string;
  };
}
