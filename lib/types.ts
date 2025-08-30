export interface Exercise {
  name: string
  sets: string
  rest: string
  notes?: string
  type: string
  imageUrl?: string
  videoUrl?: string
}

export interface ExerciseGroup {
  name: string
  muscleGroup: string
  exercises: Exercise[]
}

export interface Workout {
  title: string
  subtitle: string
  dayOfWeek: number
  warmup: string
  stretching: string
  groups: ExerciseGroup[]
}

export interface WorkoutData {
  [key: number]: Workout
}

// Nuevo tipo para el seguimiento de series
export interface SetProgress {
  completed: boolean
  weight?: string
  reps?: string
}

// Tipo para el estado de progreso
export interface ExerciseProgress {
  [key: string]: SetProgress[]
}
