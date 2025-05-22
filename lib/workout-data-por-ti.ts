import type { WorkoutData } from "./types"

export const workoutData: WorkoutData = {
  1: {
    title: "LUNES",
    subtitle: "Pecho y Espalda",
    dayOfWeek: 1,
    warmup: "Comienza con 5‑10 min de cardio ligero (saltos, trote suave) y movilidad dinámica de hombros/escápulas.",
    stretching: "5 min de estiramientos de pectoral (en puerta) y dorsal (postura del niño) 15‑30 s c/u.",
    groups: [
      {
        name: "PECHO",
        muscleGroup: "chest",
        "exercises": [
          {
            "name": "Press de banca plano con mancuernas",
            "sets": "4 x 8‑12",
            "rest": "90s",
            "notes": "Compuesto principal para pectoral medio",
            "type": "Compuesto",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/17431301-Dumbbell-Twisting-Bench-Press_Upper-Arms_720.gif"
          },
          {
            "name": "Press inclinado con mancuernas",
            "sets": "3 x 10‑12",
            "rest": "90s",
            "notes": "Enfocado en parte superior del pectoral",
            "type": "Compuesto",
            "imageUrl": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            "name": "Aperturas planas con mancuernas",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Aislamiento y estiramiento del pecho",
            "type": "Aislado",
            "imageUrl": "https://static.strengthlevel.com/images/exercises/dumbbell-fly/dumbbell-fly-800.jpg"
          },
          {
            "name": "Press declinado con mancuernas",
            "sets": "3 x 10",
            "rest": "90s",
            "notes": "Foco en pectoral inferior",
            "type": "Compuesto",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/03/03031301-Dumbbell-Decline-Hammer-Press_Chest_720.gif"
          },
          {
            "name": "Pullover con mancuerna",
            "sets": "3 x 12",
            "rest": "60s",
            "notes": "Complementario para pecho y dorsales",
            "type": "Aislado",
            "imageUrl": "https://www.gladiatorfit.ch/wp-content/uploads/2023/01/pull-over-haltere-1000x563.jpg"
          }
        ]
      },
      {
        name: "ESPALDA",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo a una mano con mancuerna",
            sets: "4 x 8‑12",
            rest: "90s",
            notes: "Compuesto principal unilateral",
            type: "Compuesto",
            imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-single-arm-row-1547729333.gif",
          },
          {
            name: "Remo inclinado con mancuernas",
            sets: "3 x 10‑12",
            rest: "90s",
            notes: "Dorsales y romboides",
            type: "Compuesto",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ101PKcvA-6EANYX5Drnq5ekBT-KbufCXuw&s",
          },
          {
            name: "Pullover con mancuerna",
            sets: "3 x 12",
            rest: "60s",
            notes: "Estira y activa dorsales",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/02881301-Dumbbell-Around-Pullover_Chest_720.gif",
          },
          {
            name: "Encogimiento de hombros con mancuernas",
            sets: "3 x 15",
            rest: "60s",
            notes: "Foco en trapecios",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03291301-Dumbbell-Incline-Shrug_Back_720.gif",
          },
          {
            name: "Pájaros (reverse fly) inclinado",
            sets: "3 x 12",
            rest: "60s",
            notes: "Trapecio medio y deltoide posterior",
            type: "Aislado",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-fly/dumbbell-reverse-fly-800.jpg",
          },
          {
            name: "Jalones dobles mancuernas",
            sets: "3 x 12",
            rest: "60s",
            notes: "Trapecio medio y deltoide posterior",
            type: "Aislado",
            imageUrl: "https://i.ytimg.com/vi/CCLrgxrr8vM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGN6ybrhQfMsnbuKwv_GVRBCKDBA",
          },
        ],
      }
      
    ],
  },

  2: {
    "title": "MARTES",
    "subtitle": "Hombros, Tríceps, Bíceps y Antebrazo",
    "dayOfWeek": 2,
    "warmup": "5‑10 min cardio + rotaciones de hombros y 2 series ligeras de elevaciones laterales y curl.",
    "stretching": "Hombro cruzado, tríceps tras nuca, bíceps en pared y antebrazo flexor/extensor 15‑20 s c/u.",
    "groups": [
      {
        "name": "HOMBROS",
        "muscleGroup": "shoulders",
        "exercises": [
          {
            "name": "Press Arnold",
            "sets": "3 x 8‑10",
            "rest": "90s",
            "notes": "Compuesto",
            "type": "Compuesto",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
          },
          {
            "name": "Elevaciones laterales",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Deltoide medio",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/lateral-raise.png"
          },
          {
            "name": "Elevaciones posteriores",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Deltoide posterior",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/dumbbell-reverse-fly.png"
          },
          {
            "name": "Elevaciones frontales",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Deltoide anterior",
            "type": "Aislado",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/03101301-Dumbbell-Front-Raise_Shoulders_720.gif"
          }
        ]
      },
      {
        "name": "TRÍCEPS",
        "muscleGroup": "arms",
        "exercises": [
          {
            "name": "Press francés acostado",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Codos fijos",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/lying-triceps-extension.png"
          },
          {
            "name": "Extensión sobre cabeza",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Mancuerna",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/overhead-triceps-extension.png"
          },
          {
            "name": "Patada de tríceps",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Kick‑back",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/triceps-kickback.png"
          }
        ]
      },
      {
        "name": "BÍCEPS",
        "muscleGroup": "arms",
        "exercises": [
          {
            "name": "Curl alterno",
            "sets": "3 x 8‑12",
            "rest": "60s",
            "notes": "Supinación completa",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/alternating-dumbbell-curl.png"
          },
          {
            "name": "Curl martillo",
            "sets": "3 x 8‑12",
            "rest": "60s",
            "notes": "Braquial",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/hammer-curl.png"
          },
          {
            "name": "Curl concentrado",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Aislado",
            "type": "Aislado",
            "imageUrl": "https://cdn.shopify.com/s/files/1/0425/7667/4983/files/5_dae278f7-644a-4d5b-87a5-0f1647eba082.png?v=1708942084"
          },
          {
            "name": "Curl martillo en banco inclinado boca abajo con mancuernas",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Braquial finalizador",
            "type": "Aislado",
            "imageUrl": "https://www.lyfta.app/thumbnails/16741201.jpg"
          }
        ]
      },
      {
        "name": "ANTEBRAZOS",
        "muscleGroup": "arms",
        "exercises": [
          {
            "name": "Curl de muñeca",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Flexores",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/wrist-curl.png"
          },
          {
            "name": "Curl inverso",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Extensores",
            "type": "Aislado",
            "imageUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-wrist-curl.png"
          }
        ]
      }
    ]
  },

  3: {
    "title": "MIÉRCOLES",
    "subtitle": "Piernas y Abdominales",
    "dayOfWeek": 3,
    "warmup": "5‑10 min salto cuerda o trote + sentadillas y estocadas sin peso.",
    "stretching": "Cuádriceps, isquiosurales, glúteos y pantorrillas 20‑30 s; cobra para abdominales.",
    "groups": [
      {
        "name": "PIERNAS",
        "muscleGroup": "legs",
        "exercises": [
          {
            "name": "Sentadilla goblet",
            "sets": "4 x 8‑12",
            "rest": "90s",
            "notes": "Enfocado en cuádriceps y glúteos",
            "type": "Compuesto",
            "imageUrl": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778"
          },
          {
            "name": "Peso muerto rumano con mancuernas",
            "sets": "4 x 8‑12",
            "rest": "90s",
            "notes": "Isquiosurales y glúteo",
            "type": "Compuesto",
            "imageUrl": "https://static.wixstatic.com/media/c94d75_ed1cfc9ed62b4864aa554972e6b974f4~mv2.gif"
          },
          {
            "name": "Zancadas con mancuernas",
            "sets": "3 x 8‑10 c/l",
            "rest": "90s",
            "notes": "Trabajo unilateral para fuerza y estabilidad",
            "type": "Compuesto",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTw98CLW2aEoz6K7f4-qHVtZoCAD-5Dl63g&s"
          },
          {
            "name": "Elevaciones de pantorrillas",
            "sets": "4 x 15‑20",
            "rest": "60s",
            "notes": "Gemelos",
            "type": "Aislado",
            "imageUrl": "https://www.thingys.com.ar/gymapps/tutorial/pant_pie.gif"
          }
        ]
      },
      {
        "name": "ABDOMINALES",
        "muscleGroup": "core",
        "exercises": [
          {
            "name": "Crunch",
            "sets": "3 x 15‑20",
            "rest": "60s",
            "notes": "Enfocado en el recto abdominal",
            "type": "Aislado",
            "imageUrl": "/abdomen/1.gif"
          },
          {
            "name": "Elevaciones de piernas",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Abdominal inferior",
            "type": "Aislado",
            "imageUrl": "/abdomen/2.gif"
          },
          {
            "name": "Plancha",
            "sets": "3 x 30‑45s",
            "rest": "30s",
            "notes": "Isométrico core completo",
            "type": "Isométrico",
            "imageUrl": "/abdomen/3.gif"
          },
          {
            "name": "Plancha",
            "sets": "3 x 30‑45s",
            "rest": "30s",
            "notes": "Isométrico core completo",
            "type": "Isométrico",
            "imageUrl": "/abdomen/4.gif"
          },
          {
            "name": "Plancha",
            "sets": "3 x 30‑45s",
            "rest": "30s",
            "notes": "Isométrico core completo",
            "type": "Isométrico",
            "imageUrl": "/abdomen/5.gif"
          },
          {
            "name": "Plancha",
            "sets": "3 x 30‑45s",
            "rest": "30s",
            "notes": "Isométrico core completo",
            "type": "Isométrico",
            "imageUrl": "/abdomen/6.gif"
          }
        ]
      }
    ]
  },
  

  4: {
    "title": "JUEVES",
    "subtitle": "Pecho, Hombros y Tríceps",
    "dayOfWeek": 4,
    "warmup": "Cardio suave 5‑10 min + series ligeras de press y elevaciones laterales.",
    "stretching": "Estiramiento de pectoral, deltoide anterior y tríceps 20‑25 s c/u.",
    "groups": [
      {
        "name": "PECHO",
        "muscleGroup": "chest",
        "exercises": [
          {
            "name": "Press inclinado con mancuernas",
            "sets": "4 x 8‑10",
            "rest": "90s",
            "notes": "Pectoral superior – compuesto principal",
            "type": "Compuesto",
            "imageUrl": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            "name": "Press en el suelo (floor press)",
            "sets": "3 x 8‑10",
            "rest": "90s",
            "notes": "Foco en pectoral medio e inferior, menos estrés en hombro",
            "type": "Compuesto",
            "imageUrl": "https://static.strengthlevel.com/images/exercises/dumbbell-floor-press/dumbbell-floor-press-800.jpg"
          },
          {
            "name": "Aperturas en banco inclinado",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Estiramiento y aislamiento de pectoral superior",
            "type": "Aislado",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif"
          },
          {
            "name": "Pullover con mancuerna",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Expansión torácica y trabajo complementario dorsal/pectoral",
            "type": "Aislado",
            "imageUrl": "https://i.pinimg.com/originals/13/aa/8a/13aa8ae3a88c2ed8f1d48be6607b0009.gif"
          }
        ]
      },
      {
        "name": "HOMBROS",
        "muscleGroup": "shoulders",
        "exercises": [
          {
            "name": "Press militar con mancuernas",
            "sets": "3 x 8‑10",
            "rest": "90s",
            "notes": "Deltoide anterior y medio – compuesto",
            "type": "Compuesto",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
          },
          {
            "name": "Elevaciones laterales inclinadas",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Foco en deltoide medio",
            "type": "Aislado",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/03261301-Dumbbell-Incline-Rear-Lateral-Raise_Shoulders_720.gif"
          },
          {
            "name": "Face pull con mancuernas",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Deltoide posterior y estabilización escapular",
            "type": "Aislado",
            "imageUrl": "https://i.pinimg.com/736x/0f/1a/36/0f1a36cc559bc93235844b35c6d6abee.jpg"
          }
        ]
      },
      {
        "name": "TRÍCEPS",
        "muscleGroup": "arms",
        "exercises": [
          {
            "name": "Press francés acostado",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Trabajo de la cabeza larga del tríceps",
            "type": "Aislado",
            "imageUrl": "https://i.makeagif.com/media/10-19-2022/cBhLkv.gif"
          },
          {
            "name": "Extensión unil. sentado",
            "sets": "3 x 10‑12 c/l",
            "rest": "60s",
            "notes": "Aislamiento con control de cada brazo",
            "type": "Aislado",
            "imageUrl": "https://www.entrenador.fit/wp-content/uploads/Extensi%C3%B3n-de-triceps-sentado-con-mancuernas.gif"
          },
          {
            "name": "Fondos en banco",
            "sets": "3 x al fallo",
            "rest": "60‑90s",
            "notes": "Ejercicio con peso corporal, bombeo final",
            "type": "Compuesto",
            "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/fondos-en-banco-1621951812.gif"
          }
        ]
      }
    ]
  },

  5: {
    "title": "VIERNES",
    "subtitle": "Espalda, Bíceps y Antebrazo",
    "dayOfWeek": 5,
    "warmup": "Cardio ligero + colgarse en barra 30 s + series suaves de remo y curl.",
    "stretching": "Estiramiento dorsal colgado, bíceps en pared, antebrazo 20‑25 s c/u.",
    "groups": [
      {
        "name": "ESPALDA",
        "muscleGroup": "back",
        "exercises": [
          {
            "name": "Remo inclinado con mancuernas",
            "sets": "4 x 8‑10",
            "rest": "90s",
            "notes": "Compuesto principal para dorsales y romboides",
            "type": "Compuesto",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/03271301-Dumbbell-Incline-Row_Back_720.gif"
          },
          {
            "name": "Pullover con mancuerna",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Enfocado en dorsales y expansión torácica",
            "type": "Compuesto",
            "imageUrl": "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif"
          },
          {
            "name": "Remo a una mano con mancuerna",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Enfocado en dorsales, romboides y trapecio medio",
            "type": "Aislado",
            "imageUrl": "https://static.strengthlevel.com/images/exercises/dumbbell-row/dumbbell-row-800.jpg"
          }
        ]
      },
      {
        "name": "BÍCEPS",
        "muscleGroup": "arms",
        "exercises": [
          {
            "name": "Curl alterno con supinación",
            "sets": "3 x 8‑12",
            "rest": "60s",
            "notes": "Trabaja bíceps largo y corto",
            "type": "Aislado",
            "imageUrl": "https://eresfitness.com/wp-content/uploads/2019/05/Curl-de-biceps.gif"
          },
          {
            "name": "Curl martillo cruzado",
            "sets": "3 x 8‑12",
            "rest": "60s",
            "notes": "Enfocado en braquial y braquiorradial",
            "type": "Aislado",
            "imageUrl": "https://fitcron.com/wp-content/uploads/2021/04/16571301-Dumbbell-Cross-Body-Hammer-Curl-Version-2_Upper-Arms_720.gif"
          },
          {
            "name": "Curl 21s (7‑7‑7)",
            "sets": "2 x 21 reps",
            "rest": "90s",
            "notes": "Alta congestión para cierre de rutina",
            "type": "Aislado",
            "imageUrl": "https://bulevip.com/blog/wp-content/uploads/2019/04/biceps-marcados-ejercicio-3.jpg"
          }
        ]
      },
      {
        "name": "ANTEBRAZOS",
        "muscleGroup": "arms",
        "exercises": [
          {
            "name": "Curl inverso con mancuernas",
            "sets": "3 x 10‑12",
            "rest": "60s",
            "notes": "Enfocado en extensores del antebrazo",
            "type": "Aislado",
            "imageUrl": "https://i.pinimg.com/originals/d9/4f/9d/d94f9ddafd70a0725d160242a7aae78b.gif"
          },
          {
            "name": "Curl de muñeca pronado",
            "sets": "3 x 12‑15",
            "rest": "60s",
            "notes": "Enfocado en flexores del antebrazo",
            "type": "Aislado",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuTs-br9LN67-WYxZg5dhD6QAylyvKGzJig&s"
          }
        ]
      }
    ]
  }
  
}
