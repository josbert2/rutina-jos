import type { WorkoutData } from "./types";


// ejercicos pecho 
import { videos, gifs } from './assets';


export const workoutData: WorkoutData = {
  1: {
    title: "LUNES",
    subtitle: "Pecho y Espalda",
    dayOfWeek: 1,
    warmup: "5–10 min cardio suave + movilidad de hombros/escápulas; 2 series ligeras de press y remo.",
    stretching: "Pectoral en puerta y dorsal (postura del niño) 20–30 s c/u.",
    groups: [
      {
        name: "PECHO",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press de banca plano con mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Compuesto principal; escápulas retraídas y control en la bajada.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/02891301-Dumbbell-Bench-Press_Chest_720.gif",
            videoUrl: videos.pechos
          },
          {
            name: "Aperturas planas con mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Énfasis en pectoral superior; no bloquees codos arriba.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif",
            videoUrl: videos.pechos2
          },
          {
            name: "Press cerrado",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Aislamiento; codos semi-flexionados, arco amplio.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/36811301-Dumbbell-Squeeze-Bench-Press_Chest_720.gif",
            videoUrl: videos.pechos3
          },
          {
            name: "Apertura con agarre supino",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Mayor estabilidad de hombro y aducción final.",
            type: "Compuesto",
            imageUrl: gifs.pecho[0],
            videoUrl: ""
          }
        ]
      },
      {
        name: "ESPALDA",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo a una mano con mancuerna",
            sets: "4 x 8-12 c/brazo",
            rest: "90s",
            notes: "Codo pegado al cuerpo; torso estable.",
            type: "Compuesto",
            imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-single-arm-row-1547729333.gif"
          },
          {
            name: "Remo inclinado con 2 mancuernas (agarre neutro)",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Tira hacia la cadera; minimiza impulso.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03271301-Dumbbell-Incline-Row_Back_720.gif"
          },
          {
            name: "Remo inclinado con mancuernas (2 manos)",
            sets: "3 x 10-12",
            rest: "90s",
            notes: "Espalda neutra; controla excéntrica.",
            type: "Compuesto",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ101PKcvA-6EANYX5Drnq5ekBT-KbufCXuw&s"
          },
          {
            name: "Pullover con mancuerna",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Estiramiento dorsales; codos semi-flexionados.",
            type: "Compuesto",
            imageUrl: "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif"
          }
        ]
      }
    ]
  },

  2: {
    title: "MARTES",
    subtitle: "Hombros, Tríceps, Bíceps y Antebrazo",
    dayOfWeek: 2,
    warmup: "5–10 min cardio + rotaciones de hombros; 2 series ligeras de elevaciones laterales y curl.",
    stretching: "Deltoide (cruzado), tríceps tras nuca, bíceps en pared y antebrazo 15–20 s c/u.",
    groups: [
      {
        name: "HOMBROS",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Press Arnold",
            sets: "4 x 8-10",
            rest: "90s",
            notes: "No arquees zona lumbar; abdomen activo.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
          },
          {
            name: "Elevaciones laterales",
            sets: "4 x 10-12",
            rest: "60s",
            notes: "Sin impulso; muñeca neutra a la altura de hombro.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/lateral-raise.png"
          },
          {
            name: "Pájaros (reverse fly) inclinado",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Deltoide posterior y trapecio medio.",
            type: "Aislado",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-fly/dumbbell-reverse-fly-800.jpg"
          },
          {
            name: "Elevación frontal con mancuernas",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Controla arriba y abajo; no balancees el torso.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-front-raise.png"
          }
        ]
      },
      {
        name: "TRÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Press francés acostado con mancuernas",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Codos fijos apuntando al techo.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/lying-triceps-extension.png"
          },
          {
            name: "Extensión sobre cabeza (mancuerna)",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Mantén codos hacia adelante.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/overhead-triceps-extension.png"
          },
          {
            name: "Kickback de tríceps en banco",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Pausa breve en completa extensión.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2021/10/dumbbell-kickback.png"
          }
        ]
      },
      {
        name: "BÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl alterno con supinación",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Evita balanceo; supina al subir.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/alternating-dumbbell-curl.png"
          },
          {
            name: "Curl martillo",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Énfasis en braquial/braquiorradial.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/hammer-curl.png"
          },
          {
            name: "Curl inclinado en banco",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Gran estiramiento; controla la excéntrica.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif"
          }
        ]
      },
      {
        name: "ANTEBRAZOS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl de muñeca (supino) con mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Flexores; recorrido completo.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/wrist-curl.png"
          },
          {
            name: "Curl de muñeca inverso (prono)",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Extensores; evita mover brazos.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-wrist-curl.png"
          },
          {
            name: "Sostén de granjero (farmer hold) con mancuernas",
            sets: "3 x 20-40s",
            rest: "60s",
            notes: "Isométrico de agarre; hombros abajo y core firme.",
            type: "Isométrico",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/farmers-walk.png"
          }
        ]
      }
    ]
  },

  3: {
    title: "MIÉRCOLES",
    subtitle: "Piernas y Core",
    dayOfWeek: 3,
    warmup: "5–10 min trote/soga + sentadillas y estocadas sin peso.",
    stretching: "Cuádriceps, isquios, glúteos y pantorrillas 20–30 s; cobra para abdomen.",
    groups: [
      {
        name: "CUÁDRICEPS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Sentadilla goblet",
            sets: "4 x 10-15",
            rest: "90s",
            notes: "Torso erguido; baja hasta paralelo o más si es cómodo.",
            type: "Compuesto",
            imageUrl: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778"
          },
          {
            name: "Zancadas caminando con mancuernas",
            sets: "3 x 10-12 c/pierna",
            rest: "90s",
            notes: "Paso largo; rodilla estable.",
            type: "Compuesto",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTw98CLW2aEoz6K7f4-qHVtZoCAD-5Dl63g&s"
          },
          {
            name: "Step-up al banco con mancuernas",
            sets: "3 x 10-12 c/pierna",
            rest: "90s",
            notes: "Empuja con la pierna de apoyo; controla la bajada.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-step-up.png"
          }
        ]
      },
      {
        name: "ISQUIOS / GLÚTEOS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Peso muerto rumano con mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Caderas atrás; espalda neutra.",
            type: "Compuesto",
            imageUrl: "https://static.wixstatic.com/media/c94d75_ed1cfc9ed62b4864aa554972e6b974f4~mv2.gif"
          },
          {
            name: "Hip thrust con mancuerna en banco",
            sets: "3 x 10-12",
            rest: "90s",
            notes: "Pausa 1s en máxima contracción.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/dumbbell-hip-thrust.png"
          },
          {
            name: "Peso muerto a 1 pierna con mancuerna",
            sets: "3 x 10-12 c/pierna",
            rest: "90s",
            notes: "Equilibrio y control; cadera cuadrada.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/single-leg-rdl.png"
          }
        ]
      },
      {
        name: "PANTORRILLAS",
        muscleGroup: "legs",
        exercises: [
          {
            name: "Elevación de talones de pie con mancuernas",
            sets: "4 x 12-20",
            rest: "60s",
            notes: "Pausa arriba; rango completo.",
            type: "Aislado",
            imageUrl: "https://www.thingys.com.ar/gymapps/tutorial/pant_pie.gif"
          },
          {
            name: "Elevación de talones sentado (mancuernas en muslos)",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Énfasis sóleo; ritmo controlado.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/seated-calf-raise-dumbbells.png"
          },
          {
            name: "Elevación de talones en escalón",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Mayor estiramiento; evita rebote.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/standing-calf-raise.png"
          }
        ]
      },
      {
        name: "CORE",
        muscleGroup: "core",
        exercises: [
          {
            name: "Crunch en banco/suelo",
            sets: "3 x 15-20",
            rest: "45-60s",
            notes: "Exhala al subir; no tironees cuello.",
            type: "Aislado",
            imageUrl: "/abdomen/1.gif"
          },
          {
            name: "Elevaciones de piernas en banco/suelo",
            sets: "3 x 12-15",
            rest: "45-60s",
            notes: "Lumbares pegadas; controla bajada.",
            type: "Aislado",
            imageUrl: "/abdomen/2.gif"
          },
          {
            name: "Plancha frontal",
            sets: "3 x 30-45s",
            rest: "30-45s",
            notes: "Isométrico; glúteos y abdomen firmes.",
            type: "Isométrico",
            imageUrl: "/abdomen/3.gif"
          }
        ]
      }
    ]
  },

  4: {
    title: "JUEVES",
    subtitle: "Pecho, Hombros y Tríceps",
    dayOfWeek: 4,
    warmup: "Cardio 5–10 min + series ligeras de press y elevaciones.",
    stretching: "Pectoral, deltoide anterior y tríceps 20–25 s c/u.",
    groups: [
      {
        name: "PECHO",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press inclinado con mancuernas",
            sets: "4 x 8-10",
            rest: "90s",
            notes: "Pecho alto; barra imaginaria.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            name: "Press en el suelo (floor press) con mancuernas",
            sets: "3 x 8-10",
            rest: "90s",
            notes: "Menos estrés de hombro; pausa ligera en el suelo.",
            type: "Compuesto",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-floor-press/dumbbell-floor-press-800.jpg"
          },
          {
            name: "Aperturas en banco inclinado",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Estiramiento controlado; codos semi-flex.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif"
          },
          {
            name: "Press plano tempo 3–1–1 con mancuernas",
            sets: "3 x 8-10",
            rest: "90s",
            notes: "Bajada 3s, pausa 1s, subida 1s.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-bench-press.png"
          }
        ]
      },
      {
        name: "HOMBROS",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Press militar sentado con mancuernas",
            sets: "4 x 8-10",
            rest: "90s",
            notes: "Core activo; no sobreextiendas.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/seated-dumbbell-shoulder-press.png"
          },
          {
            name: "Elevaciones laterales inclinadas",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Énfasis deltoide medio; evita impulso.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03261301-Dumbbell-Incline-Rear-Lateral-Raise_Shoulders_720.gif"
          },
          {
            name: "Pájaros en banco inclinado",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Deltoide posterior; pecho apoyado.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-dumbbell-fly-incline-bench.png"
          },
          {
            name: "Encogimientos con mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Trapecio; sube recto y pausa arriba.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03291301-Dumbbell-Incline-Shrug_Back_720.gif"
          }
        ]
      },
      {
        name: "TRÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Press francés acostado",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Codos fijos; controla excéntrica.",
            type: "Aislado",
            imageUrl: "https://i.makeagif.com/media/10-19-2022/cBhLkv.gif"
          },
          {
            name: "Extensión unilateral sentado (sobre cabeza)",
            sets: "3 x 10-12 c/brazo",
            rest: "60s",
            notes: "Aísla cabeza larga; evita abrir codos.",
            type: "Aislado",
            imageUrl: "https://www.entrenador.fit/wp-content/uploads/Extensi%C3%B3n-de-triceps-sentado-con-mancuernas.gif"
          },
          {
            name: "Press cerrado con mancuernas en banco",
            sets: "3 x 8-10",
            rest: "90s",
            notes: "Codos pegados; empuje vertical.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-close-grip-press.png"
          }
        ]
      }
    ]
  },

  5: {
    title: "VIERNES",
    subtitle: "Espalda, Bíceps y Antebrazo",
    dayOfWeek: 5,
    warmup: "Cardio ligero + 2 series suaves de remo y curl.",
    stretching: "Dorsal, bíceps y antebrazo 20–25 s c/u.",
    groups: [
      {
        name: "ESPALDA",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo inclinado con mancuernas",
            sets: "4 x 8-10",
            rest: "90s",
            notes: "Compuesto principal; tira hacia cadera.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03271301-Dumbbell-Incline-Row_Back_720.gif"
          },
          {
            name: "Remo a una mano con mancuerna",
            sets: "3 x 10-12 c/brazo",
            rest: "90s",
            notes: "Unilateral; evita rotar el torso.",
            type: "Compuesto",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-row/dumbbell-row-800.jpg"
          },
          {
            name: "Remo pecho apoyado (banco inclinado)",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Pecho apoyado; minimiza balanceo.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Supported-Dumbbell-Row.gif"
          },
          {
            name: "Pullover con mancuerna",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Estiramiento dorsales; controla rango.",
            type: "Compuesto",
            imageUrl: "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif"
          }
        ]
      },
      {
        name: "BÍCEPS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl alterno con supinación",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Codos pegados; supina fuerte.",
            type: "Aislado",
            imageUrl: "https://eresfitness.com/wp-content/uploads/2019/05/Curl-de-biceps.gif"
          },
          {
            name: "Curl martillo cruzado",
            sets: "3 x 8-12",
            rest: "60s",
            notes: "Braquial y braquiorradial.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/16571301-Dumbbell-Cross-Body-Hammer-Curl-Version-2_Upper-Arms_720.gif"
          },
          {
            name: "Curl inclinado en banco",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Gran estiramiento del bíceps.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif"
          },
          {
            name: "Curl 21s (finisher)",
            sets: "1 x 21",
            rest: "90s",
            notes: "7 parciales abajo + 7 arriba + 7 completas.",
            type: "Aislado",
            imageUrl: "https://bulevip.com/blog/wp-content/uploads/2019/04/biceps-marcados-ejercicio-3.jpg"
          }
        ]
      },
      {
        name: "ANTEBRAZOS",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl inverso con mancuernas",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Agarre prono; muñecas firmes.",
            type: "Aislado",
            imageUrl: "https://i.pinimg.com/originals/d9/4f/9d/d94f9ddafd70a0725d160242a7aae78b.gif"
          },
          {
            name: "Curl de muñeca pronado",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Flexores; controla la excéntrica.",
            type: "Aislado",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuTs-br9LN67-WYxZg5dhD6QAylyvKGzJig&s"
          },
          {
            name: "Sostén de granjero (farmer hold) con mancuernas",
            sets: "3 x 20-40s",
            rest: "60s",
            notes: "Isométrico de agarre; hombros abajo y core firme.",
            type: "Isométrico",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/farmers-walk.png"
          }
        ]
      }
    ]
  }
};
