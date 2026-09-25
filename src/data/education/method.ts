export const METHOD_NAME = 'Hecho contigo';

export const METHOD_STEPS = [
    {
        n: '01',
        title: 'Diagnóstico antes que temario',
        line: 'La primera sesión mide la brecha entre dónde estás y dónde quieres llegar. El programa se arma después de eso, no antes.',
    },
    {
        n: '02',
        title: 'Un proyecto real, no ejercicios',
        line: 'Todo el programa construye una sola cosa que crece por entregas. Al final existe y se puede mostrar.',
    },
    {
        n: '03',
        title: 'Criterios escritos antes de empezar',
        line: 'Cada entrega dice cómo se comprueba que quedó bien, antes de que te pongas a trabajar. Sin criterio previo, «terminado» lo define el cansancio.',
    },
    {
        n: '04',
        title: 'Entregas quincenales con revisión escrita',
        line: 'Cuatro cortes. Cada uno se revisa por escrito con un checklist, en menos de 48 horas. Esa revisión es la mitad de la enseñanza.',
    },
    {
        n: '05',
        title: 'Rúbrica de cinco ejes, tres veredictos',
        line: 'Aprobado, aprobado con observaciones, o devuelto. No se mide el número de la última entrega: se mide la pendiente entre la primera y la última.',
    },
    {
        n: '06',
        title: 'Cierre con evidencia y narrativa',
        line: 'No termina cuando el trabajo está hecho. Termina cuando puedes contarlo y tienes con qué probarlo.',
    },
] as const;

export const METHOD_IS_NOT = [
    'No es un curso grabado que ves cuando puedes.',
    'No es un temario genérico igual para todo el mundo.',
    'No es teoría que «después aplicas» en algún proyecto.',
    'No incluye que el mentor haga el trabajo por ti.',
] as const;

export const HUB_FAQS = [
    {
        q: '¿Cuánto tiempo semanal necesito?',
        a: 'Entre seis y ocho horas por semana durante ocho semanas: una sesión en vivo y el resto construyendo la entrega. Si no puedes sostener ese ritmo, la llamada de diagnóstico sirve para decirlo antes de entrar, no después.',
    },
    {
        q: '¿Y si no puedo cumplir con una entrega?',
        a: 'La entrega se devuelve con el checklist escrito y se reagenda el corte, no se finge que quedó lista. El programa no se alarga en silencio: en la revisión queda qué falta y para cuándo.',
    },
    {
        q: '¿Esto me garantiza trabajo o clientes?',
        a: 'No. BrandSoft Education no ofrece empleo, no fija un salario y no promete ventas. Lo que sí hay es un método: un artefacto real, criterios de aceptación escritos y una revisión por entrega. El mercado decide lo demás.',
    },
    {
        q: '¿Qué pasa si me atraso?',
        a: 'Se revisa lo que sí entregaste, se marca lo que quedó devuelto y se acuerda el siguiente corte. Atrasarse no borra el historial: la rúbrica mira la pendiente, no una fecha perfecta.',
    },
    {
        q: '¿Me sirve si trabajo tiempo completo?',
        a: 'Sí, si puedes proteger de seis a ocho horas semanales. La mayoría de las sesiones se agenda en la tarde o noche, hora Colombia, y para Texas se cruza con horarios part-time. Si esas horas no existen, no entras todavía.',
    },
    {
        q: '¿Por qué es 1:1 y no un curso?',
        a: 'Porque el temario sale del diagnóstico de tu brecha, y la revisión escrita es sobre tu entrega, no sobre un ejercicio igual para treinta personas. Un curso grabado no puede devolverte un checklist de lo que tú construiste.',
    },
] as const;
