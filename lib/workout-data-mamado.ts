import type { WorkoutData } from "./types"

export const workoutData: WorkoutData = {
  1: {
    title: "LUNES",
    subtitle: "Pecho y Espalda",
    dayOfWeek: 1,
    warmup: "Comienza con 5-10 min de cardio ligero (saltos, trote suave) y movilidad dinámica de hombros/escápulas.",
    stretching: "5 min de estiramientos de pectoral (en puerta) y dorsal (postura del niño) 15-30 s c/u.",
    groups: [
      {
        name: "PECHO",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press plano manc.",
            sets: "4×6–10",
            rest: "90s",
            notes: "Compuesto principal para pectoral medio",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/02891301-Dumbbell-Bench-Press_Chest_720.gif"
          },
          {
            name: "Press inclinado manc.",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Enfocado en parte superior del pectoral",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            name: "Aperturas planas con mancuernas",
            sets: "2-3 x 12-15",
            rest: "60s",
            notes: "Aislamiento y estiramiento del pecho",
            type: "Aislado",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-fly/dumbbell-fly-800.jpg"
          },
          {
            name: "Inner chest",
            sets: "2-3 x 12-15",
            rest: "60s",
            notes: "Aislamiento y estiramiento del pecho",
            type: "Aislado",
            imageUrl: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/incline-dumbbell-hex-press_hex_press_gif___Google_Search.gif?v=1742447956"
          }
        ]
      },
      {
        name: "ESPALDA",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo 1 brazo en banco (c/l)",
            sets: "4 x 8-12 por lado",
            rest: "90s",
            notes: "Compuesto principal unilateral",
            type: "Compuesto",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S3N2Dd1AcjoYo0LCkta3M1J-OWpc2jDfiA&s"
          },
          {
            name: "Remo pecho-apoyado en banco inclinado",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Dorsales y romboides con menos estrés lumbar",
            type: "Compuesto",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02P1beg0n2HN4vW8stEe9UmGXafiz0DYpFCZVLl"
          },
          {
            name: "Pájaros (reverse fly) inclinado",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Trapecio medio y deltoide posterior",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PUBwxMfJJF1cmuXT0ljvDZpxfPR8Yk5nOtHA2"
          },
          {
            name: "Pájaros (reverse fly) inclinado",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Trapecio medio y deltoide posterior",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PdrGzLIswVHzEke5T3Wu9g7Rs62JUO4hp0fqC"
          }
        ]
      }
    ]
  },

  2: {
    title: "MARTES",
    subtitle: "Hombros, Tríceps, Bíceps y Antebrazo",
    dayOfWeek: 2,
    warmup: "5-10 min cardio + rotaciones de hombros y 2 series ligeras de elevaciones laterales y curl.",
    stretching: "Hombro cruzado, tríceps tras nuca, bíceps en pared y antebrazo flexor/extensor 15-20 s c/u.",
    groups: [
      {
        name: "HOMBROS",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Press Arnold",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Compuesto",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
          },
          {
            name: "Elevaciones laterales",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide medio",
            type: "Aislado",
            imageUrl: "https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-laterales-con-mancuernas.jpg"
          },
          {
            name: "Elevaciones posteriores",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide posterior",
            type: "Aislado",
            imageUrl: "https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-posteriores-con-mancuernas.jpg.webp"
          },
          {
            name: "Elevaciones frontales",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide posterior",
            type: "Aislado",
            imageUrl: "https://i.blogs.es/d85006/elevaciones1/450_1000.webp"
          },
          {
            name: "rear delts",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide posterior",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/42351301-Dumbbell-Seated-Bent-Over-Rear-Delt-Row_Shoulders_720.gif"
          }
        ]
      },
      {
        name: "TRÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Pullover",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Codos fijos",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PCmjwM7bur9sgO1hpUZ4QlKRbfeS6wjtaiMcD"
          },
          {
            name: "Extensión sobre cabeza",
            sets: "2 x 10-12",
            rest: "60s",
            notes: "Cabeza larga del tríceps",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PjSyX65QJ4xsX1yePu7NpDFVGqctkYzT5d2wf"
          },
           {
            name: "Patada de triceps",
            sets: "2 x 10-12",
            rest: "60s",
            notes: "Cabeza larga del tríceps",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PJek1bRxQGfIzOAulc1ENjYbgH8x9BDp4VUZa"
          }
        ]
      },
      {
        name: "BÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl alterno",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Supinación completa",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02P17nQBAM2HN4vW8stEe9UmGXafiz0DYpFCZVL"
          },
          {
            name: "Curl martillo",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Braquial / braquiorradial",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PogaSMaRX3LIthTZ45MW7sHdOlybADYk8n09N"
          },
          {
            name: "Curl martillo",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Braquial / braquiorradial",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PJEHbD4kxQGfIzOAulc1ENjYbgH8x9BDp4VUZ"
          },
          {
            name: "Curl martillo",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Braquial / braquiorradial",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PwlM7gzH6hPMSr8iEQJN2C5tH9uyOZaj0dxIX"
          }
        ]
      },
      {
        name: "ANTEBRAZOS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PUakDvvJJF1cmuXT0ljvDZpxfPR8Yk5nOtHA2"
          },
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PaE0HtIOjvg53MHZ4eBRd76PWJ2X9zAKGQiTO"
          },
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PbT3Nct1XQU9SYgGIC7sRLFJMTNaAZjebifOh"
          },
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02P1eyP4E2HN4vW8stEe9UmGXafiz0DYpFCZVLl"
          }
        ]
      }
    ]
  },

  3: {
    title: "MIÉRCOLES",
    subtitle: "Piernas y Abdominales",
    dayOfWeek: 3,
    warmup: "5-10 min salto cuerda o trote + sentadillas y estocadas sin peso.",
    stretching: "Cuádriceps, isquiosurales, glúteos y pantorrillas 20-30 s; cobra para abdominales.",
    groups: [
      {
        name: "PIERNAS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Sentadilla goblet",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Enfocado en cuádriceps y glúteos",
            type: "Compuesto",
            imageUrl: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778"
          },
          {
            name: "Peso muerto rumano con mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Isquiosurales y glúteo",
            type: "Compuesto",
            imageUrl: "https://static.wixstatic.com/media/c94d75_ed1cfc9ed62b4864aa554972e6b974f4~mv2.gif"
          },
          {
            name: "Zancadas con mancuernas",
            sets: "3 x 8-10 c/l",
            rest: "90s",
            notes: "Trabajo unilateral para fuerza y estabilidad",
            type: "Compuesto",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTw98CLW2aEoz6K7f4-qHVtZoCAD-5Dl63g&s"
          },
          {
            name: "Elevaciones de pantorrillas",
            sets: "4 x 15-20",
            rest: "60s",
            notes: "Gemelos",
            type: "Aislado",
            imageUrl: "https://www.thingys.com.ar/gymapps/tutorial/pant_pie.gif"
          }
        ]
      },
      {
        name: "ABDOMINALES",
        muscleGroup: "core",
        exercises: [
          { name: "Crunch", sets: "3 x 15-20", rest: "60s", notes: "Recto abdominal", type: "Aislado", imageUrl: "/abdomen/1.gif" },
          { name: "Elevaciones de piernas", sets: "3 x 12-15", rest: "60s", notes: "Abdominal inferior", type: "Aislado", imageUrl: "/abdomen/2.gif" },
          { name: "Plancha", sets: "3 x 30-45s", rest: "30s", notes: "Isométrico core completo", type: "Isométrico", imageUrl: "/abdomen/3.gif" }
        ]
      }
    ]
  },

  4: {
    title: "JUEVES",
    subtitle: "Pecho, Hombros y Tríceps",
    dayOfWeek: 4,
    warmup: "Cardio suave 5-10 min + series ligeras de press y elevaciones laterales.",
    stretching: "Estiramiento de pectoral, deltoide anterior y tríceps 20-25 s c/u.",
    groups: [
      {
        name: "PECHO",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press inclinado con mancuernas",
            sets: "3 x 8-10",
            rest: "90s",
            notes: "Pectoral superior – compuesto principal",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            name: "Aperturas en banco inclinado",
            sets: "2-3 x 12-15",
            rest: "60s",
            notes: "Estiramiento y aislamiento de pectoral superior",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif"
          },
          {
            name: "pectoral interno",
            sets: "2-3 x 12-15",
            rest: "60s",
            notes: "Estiramiento y aislamiento de pectoral superior",
            type: "Aislado",
            imageUrl: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/incline-dumbbell-hex-press_hex_press_gif___Google_Search.gif?v=1742447956"
          }
        ]
      },
       {
        name: "HOMBROS",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Press Arnold",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Compuesto",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
          },
          {
            name: "Elevaciones laterales",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide medio",
            type: "Aislado",
            imageUrl: "https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-laterales-con-mancuernas.jpg"
          },
          {
            name: "Elevaciones posteriores",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide posterior",
            type: "Aislado",
            imageUrl: "https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-posteriores-con-mancuernas.jpg.webp"
          },
          {
            name: "Elevaciones frontales",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide posterior",
            type: "Aislado",
            imageUrl: "https://i.blogs.es/d85006/elevaciones1/450_1000.webp"
          },
          {
            name: "rear delts",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Deltoide posterior",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/42351301-Dumbbell-Seated-Bent-Over-Rear-Delt-Row_Shoulders_720.gif"
          }
        ]
      },
        {
        name: "TRÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Pullover",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Codos fijos",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PCmjwM7bur9sgO1hpUZ4QlKRbfeS6wjtaiMcD"
          },
          {
            name: "Extensión sobre cabeza",
            sets: "2 x 10-12",
            rest: "60s",
            notes: "Cabeza larga del tríceps",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PjSyX65QJ4xsX1yePu7NpDFVGqctkYzT5d2wf"
          },
           {
            name: "Patada de triceps",
            sets: "2 x 10-12",
            rest: "60s",
            notes: "Cabeza larga del tríceps",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PJek1bRxQGfIzOAulc1ENjYbgH8x9BDp4VUZa"
          }
        ]
      },
    ]
  },

  5: {
    title: "VIERNES",
    subtitle: "Espalda, Bíceps y Antebrazo",
    dayOfWeek: 5,
    warmup: "Cardio ligero + colgarse en barra 30 s + series suaves de remo y curl.",
    stretching: "Estiramiento dorsal colgado, bíceps en pared, antebrazo 20-25 s c/u.",
    groups: [
        {
        name: "ESPALDA",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo 1 brazo en banco (c/l)",
            sets: "4 x 8-12 por lado",
            rest: "90s",
            notes: "Compuesto principal unilateral",
            type: "Compuesto",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S3N2Dd1AcjoYo0LCkta3M1J-OWpc2jDfiA&s"
          },
          {
            name: "Remo pecho-apoyado en banco inclinado",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Dorsales y romboides con menos estrés lumbar",
            type: "Compuesto",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02P1beg0n2HN4vW8stEe9UmGXafiz0DYpFCZVLl"
          },
          {
            name: "Pájaros (reverse fly) inclinado",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Trapecio medio y deltoide posterior",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PUBwxMfJJF1cmuXT0ljvDZpxfPR8Yk5nOtHA2"
          },
          {
            name: "Pájaros (reverse fly) inclinado",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Trapecio medio y deltoide posterior",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PdrGzLIswVHzEke5T3Wu9g7Rs62JUO4hp0fqC"
          }
        ]
      },
      {
        name: "BÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl alterno con supinación",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Trabaja bíceps largo y corto",
            type: "Aislado",
            imageUrl: "https://eresfitness.com/wp-content/uploads/2019/05/Curl-de-biceps.gif"
          },
          {
            name: "Curl martillo cruzado",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Braquial y braquiorradial",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/16571301-Dumbbell-Cross-Body-Hammer-Curl-Version-2_Upper-Arms_720.gif"
          }
        ]
      },
       {
        name: "ANTEBRAZOS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PUakDvvJJF1cmuXT0ljvDZpxfPR8Yk5nOtHA2"
          },
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PaE0HtIOjvg53MHZ4eBRd76PWJ2X9zAKGQiTO"
          },
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02PbT3Nct1XQU9SYgGIC7sRLFJMTNaAZjebifOh"
          },
          {
            name: "Curl de muñeca",
            sets: "2 x 12-15",
            rest: "60s",
            notes: "Flexores",
            type: "Aislado",
            imageUrl: "https://0284i2z2w3.ufs.sh/f/NcbcfBhcN02P1eyP4E2HN4vW8stEe9UmGXafiz0DYpFCZVLl"
          }
        ]
      }
    ]
  }
}
