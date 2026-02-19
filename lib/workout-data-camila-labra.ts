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
        name: "PECHO (A)",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press banca mancuernas",
            sets: "4 x 6-10",
            rest: "90s",
            notes: "Rango de fuerza. Controla la bajada.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/02891301-Dumbbell-Bench-Press_Chest_720.gif",
            videoUrl: videos.pechos
          },
          {
            name: "Press inclinado mancuernas",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Enfocado en pectoral superior.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            name: "Aperturas con mancuernas",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Estiramiento controlado.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif",
            videoUrl: videos.pechos2
          },
          {
            name: "Push-ups (lentas)",
            sets: "2 x AMRAP (dejando 1-2 reps)",
            rest: "60s",
            notes: "Baja despacio, explota al subir.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/push-up.png"
          }
        ]
      },
      {
        name: "ESPALDA (A)",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo a 1 mano con mancuerna (apoyado en banco)",
            sets: "4 x 8-12 c/brazo",
            rest: "90s",
            notes: "Codo pegado al cuerpo; torso estable.",
            type: "Compuesto",
            imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-single-arm-row-1547729333.gif"
          },
          {
            name: "Remo inclinado con mancuernas (2 manos)",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Tira hacia la cadera; minimiza impulso.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03271301-Dumbbell-Incline-Row_Back_720.gif"
          },
          {
            name: "Pullover con mancuerna",
            sets: "3 x 10-15",
            rest: "60s",
            notes: "Estiramiento dorsales; codos semi-flexionados.",
            type: "Compuesto",
            imageUrl: "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif"
          },
          {
            name: "Pájaros (deltoide posterior)",
            sets: "2-3 x 15-20",
            rest: "60s",
            notes: "Deltoide posterior y trapecio medio.",
            type: "Aislado",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-fly/dumbbell-reverse-fly-800.jpg"
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
        name: "HOMBROS (A)",
        muscleGroup: "shoulders",
        exercises: [
          {
            name: "Press militar con mancuernas",
            sets: "4 x 6-10",
            rest: "90s",
            notes: "Core activo; no sobreextiendas.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/seated-dumbbell-shoulder-press.png"
          },
          {
            name: "Elevaciones laterales",
            sets: "4 x 12-20",
            rest: "60s",
            notes: "Sin impulso; muñeca neutra a la altura de hombro.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/lateral-raise.png"
          },
          {
            name: "Pájaros (deltoide posterior)",
            sets: "3 x 15-20",
            rest: "60s",
            notes: "Deltoide posterior y trapecio medio.",
            type: "Aislado",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-fly/dumbbell-reverse-fly-800.jpg"
          },
          {
            name: "Elevación frontal (mancuernas)",
            sets: "2 x 10-15",
            rest: "60s",
            notes: "Controla arriba y abajo.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-front-raise.png"
          }
        ]
      },
      {
        name: "TRÍCEPS (A)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Press cerrado con mancuernas",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Codos pegados al cuerpo; empuje vertical.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-close-grip-press.png"
          },
          {
            name: "Extensión sobre la cabeza (1 mancuerna)",
            sets: "3 x 10-15",
            rest: "60s",
            notes: "Mantén codos hacia adelante (copa).",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/overhead-triceps-extension.png"
          },
          {
            name: "Patada de tríceps",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Pausa breve en completa extensión.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2021/10/dumbbell-kickback.png"
          }
        ]
      },
      {
        name: "BÍCEPS (A)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl alterno con mancuernas",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Evita balanceo; supina al subir.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/alternating-dumbbell-curl.png"
          },
          {
            name: "Curl martillo",
            sets: "3 x 10-15",
            rest: "60s",
            notes: "Énfasis en braquial/braquiorradial.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/hammer-curl.png"
          },
          {
            name: "Curl concentración",
            sets: "3 x 10-12",
            rest: "60s",
            notes: "Codo en muslo interno; aísla al máximo.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-concentration-curl.png"
          }
        ]
      },
      {
        name: "ANTEBRAZO (A)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl de muñeca (palmas arriba)",
            sets: "3 x 15-25",
            rest: "60s",
            notes: "Flexores; recorrido completo.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/wrist-curl.png"
          },
          {
            name: "Curl de muñeca reverso (palmas abajo)",
            sets: "3 x 15-25",
            rest: "60s",
            notes: "Extensores; evita mover brazos.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-wrist-curl.png"
          },
          {
            name: "Farmer hold (sostener mancuernas pesado)",
            sets: "3 x 30-60s",
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
        name: "PECHO (B)",
        muscleGroup: "chest",
        exercises: [
          {
            name: "Press inclinado mancuernas",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Enfocado en pectoral superior.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
          },
          {
            name: "Floor press (press en el suelo)",
            sets: "3 x 8-12",
            rest: "90s",
            notes: "Pausa ligera en el suelo.",
            type: "Compuesto",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-floor-press/dumbbell-floor-press-800.jpg"
          },
          {
            name: "Press banca agarre neutro (palmas mirándose)",
            sets: "3 x 10-12",
            rest: "90s",
            notes: "Codos pegados al cuerpo.",
            type: "Compuesto",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/neutral-grip-dumbbell-bench-press.png"
          },
          {
            name: "Aperturas o push-ups",
            sets: "2 x 12-15 / AMRAP",
            rest: "60s",
            notes: "Elige el que prefieras para terminar.",
            type: "Compuesto",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/03/03081301-Dumbbell-Fly_Chest-FIX_720.gif"
          }
        ]
      },
      {
        name: "HOMBROS (B)",
        muscleGroup: "shoulders",
        exercises: [
          {
             name: "Press Arnold",
             sets: "4 x 8-12",
             rest: "90s",
             notes: "No arquees zona lumbar; abdomen activo.",
             type: "Compuesto",
             imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
          },
          {
            name: "Elevaciones laterales (pausa 1 seg arriba)",
            sets: "4 x 12-20",
            rest: "60s",
            notes: "Pausa en la contracción máxima.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/lateral-raise.png"
          },
          {
            name: "Pájaros (más control, lento)",
            sets: "3 x 15-20",
            rest: "60s",
            notes: "Deltoide posterior; movimiento fluido.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-dumbbell-fly-incline-bench.png"
          },
          {
            name: "\"Y-raise\" en banco inclinado / inclinado leve",
            sets: "2-3 x 12-15",
            rest: "60s",
            notes: "Trapecio inferior y deltoides.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Available-Dumbbell-Y-Raise.gif"
          }
        ]
      },
      {
        name: "TRÍCEPS (B)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Fondos entre bancos (bench dips)",
            sets: "4 x 8-15",
            rest: "60s",
            notes: "Baja controlado; codos hacia atrás.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif"
          },
          {
            name: "Skull crushers (extensión acostado con mancuernas)",
            sets: "3 x 10-15",
            rest: "60s",
            notes: "Lleva las mancuernas a los lados de la cabeza.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/lying-triceps-extension.png"
          },
          {
            name: "Press francés sentado (1 o 2 mancuernas)",
            sets: "2-3 x 10-15",
            rest: "60s",
            notes: "Estira bien abajo; cuidado con el cuello.",
            type: "Aislado",
            imageUrl: "https://www.entrenador.fit/wp-content/uploads/Extensi%C3%B3n-de-triceps-sentado-con-mancuernas.gif"
          }
        ]
      },
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
        name: "ESPALDA (B)",
        muscleGroup: "back",
        exercises: [
          {
            name: "Remo pecho apoyado en banco (chest-supported)",
            sets: "4 x 8-12",
            rest: "90s",
            notes: "Pecho apoyado; minimiza balanceo.",
            type: "Compuesto",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Supported-Dumbbell-Row.gif"
          },
          {
            name: "Remo a 1 mano con pausa arriba (2 seg)",
            sets: "3 x 10-12",
            rest: "90s",
            notes: "Pausa en la contracción máxima.",
            type: "Compuesto",
            imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-row/dumbbell-row-800.jpg"
          },
          {
            name: "Pull-over con mancuerna (más lento)",
            sets: "2-3 x 12-15",
            rest: "60s",
            notes: "Controla la excéntrica (bajada).",
            type: "Compuesto",
            imageUrl: "https://cambiandoeljuego.com/wp-content/uploads/2018/09/pullover.gif"
          },
          {
            name: "Encogimientos (trapecio) con mancuernas",
            sets: "3 x 12-20",
            rest: "60s",
            notes: "Sube recto y pausa arriba.",
            type: "Aislado",
            imageUrl: "https://fitcron.com/wp-content/uploads/2021/04/03291301-Dumbbell-Incline-Shrug_Back_720.gif"
          }
        ]
      },
      {
        name: "BÍCEPS (B)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl inclinado en banco",
            sets: "4 x 8-12",
            rest: "60s",
            notes: "Gran estiramiento; espalda pegada al banco.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif"
          },
          {
            name: "Curl tipo \"spider\" (pecho apoyado en banco)",
            sets: "3 x 10-15",
            rest: "60s",
            notes: "Brazos colgando verticales; aísla pico del bíceps.",
            type: "Aislado",
            imageUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Spider-Curl.gif"
          },
          {
            name: "Curl reverso (antebrazo)",
            sets: "3 x 12-15",
            rest: "60s",
            notes: "Agarre prono; trabaja antebrazos y braquial.",
            type: "Aislado",
            imageUrl: "https://i.pinimg.com/originals/d9/4f/9d/d94f9ddafd70a0725d160242a7aae78b.gif"
          }
        ]
      },
      {
        name: "ANTEBRAZO (B)",
        muscleGroup: "arms",
        exercises: [
          {
            name: "Curl martillo (enfocado lento)",
            sets: "3 x 10-15",
            rest: "60s",
            notes: "Controla la bajada.",
            type: "Aislado",
            imageUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/hammer-curl.png"
          },
          {
            name: "Pronación/supinación (girar mancuerna)",
            sets: "3 x 12-20 c/lado",
            rest: "60s",
            notes: "Gira la muñeca controladamente con peso ligero.",
            type: "Aislado",
            imageUrl: "https://makeagif.com/media/9-10-2015/R6wRqD.gif"
          },
          {
            name: "Dead hang (colgado) si tienes barra / farmer hold",
            sets: "3 x 30-60s",
            rest: "60s",
            notes: "Cuelga de la barra o sostén mancuernas pesadas.",
            type: "Isométrico",
            imageUrl: "https://gymvisual.com/img/p/2/2/4/6/9/22469.gif"
          }
        ]
      }
    ]
  }
};
