"use client"

import { useState } from "react"
import { CheckCircle2, Circle, Dumbbell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { Workout, ExerciseProgress } from "@/lib/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface WorkoutDayProps {
  workout: Workout
  exerciseProgress: ExerciseProgress
  toggleSetCompletion: (exerciseId: string, setIndex: number) => void
  updateSetData: (exerciseId: string, setIndex: number, data: { weight?: string; reps?: string }) => void
  dayNumber: number
}

export default function WorkoutDay({
  workout,
  exerciseProgress,
  toggleSetCompletion,
  updateSetData,
  dayNumber,
}: WorkoutDayProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({})
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [currentExerciseImage, setCurrentExerciseImage] = useState<{ url: string; name: string }>({
    url: "",
    name: "",
  })

  const [restTime, setRestTime] = useState(120); 
  const [isResting, setIsResting] = useState(false);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }))
  }
  const startTimer = () => {
    setIsResting(true);
    const timer = setInterval(() => {
      setRestTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setIsResting(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    setRestTime(120); // Reset to 2 minutes
    setIsResting(false);
  };

  const openExerciseImageModal = (imageUrl: string, exerciseName: string) => {
    setCurrentExerciseImage({ url: imageUrl, name: exerciseName })
    setIsImageModalOpen(true)
  }

  // Calculate progress for this workout day
  let totalSets = 0
  let completedSets = 0

  workout.groups.forEach((group) => {
    group.exercises.forEach((exercise) => {
      const exerciseId = `${dayNumber}-${exercise.name}`
      const setsCount = Number.parseInt(exercise.sets.split("x")[0].trim())
      totalSets += setsCount

      const sets = exerciseProgress[exerciseId] || []
      completedSets += sets.filter((set) => set && set.completed).length
    })
  })

  const progressPercentage = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle>Progreso del día</CardTitle>
            <Badge variant={progressPercentage === 100 ? "default" : "outline"}>
              {completedSets}/{totalSets} series
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Calentamiento</h3>
              <p className="text-sm text-muted-foreground">{workout.warmup}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Estiramientos</h3>
              <p className="text-sm text-muted-foreground">{workout.stretching}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Accordion type="multiple" className="space-y-4">
        {workout.groups.map((group) => {
          // Calcular progreso del grupo
          let groupTotalSets = 0
          let groupCompletedSets = 0

          group.exercises.forEach((exercise) => {
            const exerciseId = `${dayNumber}-${exercise.name}`
            const setsCount = Number.parseInt(exercise.sets.split("x")[0].trim())
            groupTotalSets += setsCount

            const sets = exerciseProgress[exerciseId] || []
            groupCompletedSets += sets.filter((set) => set && set.completed).length
          })

          return (
            <AccordionItem key={group.name} value={group.name} className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{group.name}</span>
                  <Badge variant="outline" className="ml-2">
                    {groupCompletedSets}/{groupTotalSets} series
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 pt-0 pb-0">
                <div className="divide-y">
                  {group.exercises.map((exercise) => {
                    const exerciseId = `${dayNumber}-${exercise.name}`
                    const setsInfo = exercise.sets.split("x")
                    const numSets = Number.parseInt(setsInfo[0].trim())
                    const repsRange = setsInfo[1]?.trim() || ""

                    const exerciseSets = exerciseProgress[exerciseId] || []
                    const completedSetsCount = exerciseSets.filter((set) => set && set.completed).length
                    const isExerciseCompleted = completedSetsCount === numSets

                    return (
                      <div
                        key={exercise.name}
                        className={cn("p-4 transition-colors", isExerciseCompleted ? "bg-primary/5" : "")}
                      >
                        <div className="grid grid-cols-12">
                          <div  className="flex items-start justify-between mb-3 col-span-9 flex-col ">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Dumbbell
                                    className={cn(
                                      "h-5 w-5",
                                      isExerciseCompleted ? "text-primary" : "text-muted-foreground",
                                    )}
                                  />
                                  <div className="flex items-center gap-1">
                                    <h3 className="font-medium">{exercise.name}</h3>
                                    {exercise.imageUrl && (
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 rounded-full"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          openExerciseImageModal(exercise.imageUrl || "", exercise.name)
                                        }}
                                      >
                                        <span className="sr-only">Ver imagen del ejercicio</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-image"
                                        >
                                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                          <circle cx="9" cy="9" r="2" />
                                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                        </svg>
                                      </Button>
                                    )}
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {exercise.type}
                                  </Badge>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-8 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Series: </span>
                                    <span className="font-medium">{exercise.sets}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Descanso: </span>
                                    <span className="font-medium">{exercise.rest}</span>
                                  </div>
                                  {exercise.notes && (
                                    <div>
                                      <span className="text-muted-foreground">Notas: </span>
                                      <span className="font-medium">{exercise.notes}</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              
                            </div>

                            {/* Series counter */}
                            <div className="ml-8 mt-3 space-y-2">
                              <div className="text-sm font-medium">Series:</div>
                              <div className="grid grid-cols-1 gap-2">
                                <div className="grid grid-cols-12 gap-2 text-xs font-medium text-muted-foreground mb-1">
                                  <div className="col-span-1">#</div>
                                  <div className="col-span-3">Peso</div>
                                  <div className="col-span-3">Reps</div>
                                  <div className="col-span-5">Completada</div>
                                </div>

                                {Array.from({ length: numSets }).map((_, index) => {
                                  const setData = exerciseSets[index] || { completed: false }

                                  return (
                                    <div key={index} className="grid grid-cols-12 gap-2 items-center">
                                      <div className="col-span-1 text-sm font-medium">{index + 1}</div>
                                      <div className="col-span-3">
                                        <Input
                                          type="text"
                                          placeholder="kg"
                                          className="h-8 text-sm"
                                          value={setData.weight || ""}
                                          onChange={(e) => updateSetData(exerciseId, index, { weight: e.target.value })}
                                        />
                                      </div>
                                      <div className="col-span-3">
                                        <Input
                                          type="text"
                                          placeholder={repsRange}
                                          className="h-8 text-sm"
                                          value={setData.reps || ""}
                                          onChange={(e) => updateSetData(exerciseId, index, { reps: e.target.value })}
                                        />
                                      </div>
                                      <div className="col-span-5">
                                        <Button
                                          variant={setData.completed ? "default" : "outline"}
                                          size="sm"
                                          className="w-full h-8"
                                          onClick={() => toggleSetCompletion(exerciseId, index)}
                                        >
                                          {setData.completed ? (
                                            <span className="flex items-center gap-1">
                                              <CheckCircle2 className="h-4 w-4" />
                                              Completada
                                            </span>
                                          ) : (
                                            <span className="flex items-center gap-1">
                                              <Circle className="h-4 w-4" />
                                              Pendiente
                                            </span>
                                          )}
                                        </Button>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-3">
                             {exercise.imageUrl && (
                                <div className="ml-4 flex-shrink-0">
                                  <div
                                    className="relative h-72 w-72 overflow-hidden rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => openExerciseImageModal(exercise.imageUrl || "", exercise.name)}
                                  >
                                    <img
                                      src={exercise.imageUrl || "/placeholder.svg"}
                                      alt={exercise.name}
                                      className="object-cover h-full w-full"
                                    />
                                  </div>
                                </div>
                              )}     
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="sm:max-w-md md:max-w-xl">
          <DialogHeader>
            <DialogTitle>{currentExerciseImage.name}</DialogTitle>
            <DialogDescription>Visualización de la técnica correcta del ejercicio</DialogDescription>
            <Button onClick={startTimer} disabled={isResting} className="my-4">
              {isResting ? `Rest: ${restTime}s` : "Start Rest Timer"}
            </Button>
          </DialogHeader>
          <div className="flex justify-center p-2">
            <img
              src={currentExerciseImage.url || "/placeholder.svg"}
              alt={currentExerciseImage.name}
              className="max-h-[70vh] object-contain rounded-md"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
