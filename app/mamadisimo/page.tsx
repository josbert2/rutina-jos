"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import WorkoutDay from "@/components/workout-day"
import { workoutData } from "@/lib/workout-data-mamado"
import { ThemeToggle } from "@/components/theme-toggle"
import type { ExerciseProgress } from "@/lib/types"

export default function WorkoutTracker() {
  const [currentDay, setCurrentDay] = useState<number>(0)
  const [exerciseProgress, setExerciseProgress] = useState<ExerciseProgress>({})

  // Get current day of week (1-5 for Monday-Friday)
  useEffect(() => {
    const today = new Date().getDay()
    // Convert Sunday (0) to 5, and Saturday (6) to 5 (Friday)
    const mappedDay = today === 0 || today === 6 ? 5 : today
    setCurrentDay(mappedDay)

    // Cargar progreso del localStorage si existe
    const savedProgress = localStorage.getItem("exerciseProgress")
    if (savedProgress) {
      setExerciseProgress(JSON.parse(savedProgress))
    }
  }, [])

  // Guardar progreso en localStorage cuando cambie
  useEffect(() => {
    if (Object.keys(exerciseProgress).length > 0) {
      localStorage.setItem("exerciseProgress", JSON.stringify(exerciseProgress))
    }
  }, [exerciseProgress])

  const handlePrevDay = () => {
    setCurrentDay((prev) => (prev > 1 ? prev - 1 : 5))
  }

  const handleNextDay = () => {
    setCurrentDay((prev) => (prev < 5 ? prev + 1 : 1))
  }

  const toggleSetCompletion = (exerciseId: string, setIndex: number) => {
    setExerciseProgress((prev) => {
      const exerciseSets = prev[exerciseId] || []
      const updatedSets = [...exerciseSets]

      if (!updatedSets[setIndex]) {
        updatedSets[setIndex] = { completed: true }
      } else {
        updatedSets[setIndex] = {
          ...updatedSets[setIndex],
          completed: !updatedSets[setIndex].completed,
        }
      }

      return {
        ...prev,
        [exerciseId]: updatedSets,
      }
    })
  }

  const updateSetData = (exerciseId: string, setIndex: number, data: { weight?: string; reps?: string }) => {
    setExerciseProgress((prev) => {
      const exerciseSets = prev[exerciseId] || []
      const updatedSets = [...exerciseSets]

      if (!updatedSets[setIndex]) {
        updatedSets[setIndex] = { completed: false, ...data }
      } else {
        updatedSets[setIndex] = {
          ...updatedSets[setIndex],
          ...data,
        }
      }

      return {
        ...prev,
        [exerciseId]: updatedSets,
      }
    })
  }

  // Calculate progress percentage
  const calculateProgress = (dayNumber: number) => {
    if (!workoutData[dayNumber]) return 0

    let totalSets = 0
    let completedSets = 0

    workoutData[dayNumber].groups.forEach((group) => {
      group.exercises.forEach((exercise) => {
        const exerciseId = `${dayNumber}-${exercise.name}`
        const setsCount = Number.parseInt(exercise.sets.split("x")[0].trim())
        totalSets += setsCount

        const exerciseProgressForId = exerciseProgress[exerciseId] || []
        completedSets += exerciseProgressForId.filter((set) => set && set.completed).length
      })
    })

    return totalSets === 0 ? 0 : Math.round((completedSets / totalSets) * 100)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Mi Rutina de Ejercicios: Por ti Wendy</h1>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <p className="text-muted-foreground">
              {new Date().toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" size="icon" onClick={handlePrevDay}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-semibold">
          {workoutData[currentDay]?.title} - {workoutData[currentDay]?.subtitle}
        </h2>
        <Button variant="outline" size="icon" onClick={handleNextDay}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((day) => (
          <Card
            key={day}
            className={cn("p-3 cursor-pointer transition-all", currentDay === day ? "border-primary bg-primary/5" : "")}
            onClick={() => setCurrentDay(day)}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">
                {["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"][day - 1]}
              </div>
              <Progress value={calculateProgress(day)} className="h-1 mt-2" />
            </div>
          </Card>
        ))}
      </div>

      {workoutData[currentDay] && (
        <WorkoutDay
          workout={workoutData[currentDay]}
          exerciseProgress={exerciseProgress}
          toggleSetCompletion={toggleSetCompletion}
          updateSetData={updateSetData}
          dayNumber={currentDay}
        />
      )}
    </div>
  )
}
