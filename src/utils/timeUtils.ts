 // 1. FUNÇÃO UTILITÁRIA: Cria a lista de horários de 35 em 35 minutos
    export const generateTimeSlots = (): string[] => {
        const slots: string[] = [];

        // Definimos a hora de início (08:00) e fim (18:00) em minutos totais do dia
        let currentMinutes = 8 * 60; // 08:00 = 480 minutos
        const endMinutes = 18 * 60;  // 18:00 = 1080 minutos

        while (currentMinutes < endMinutes) {
            const hour = Math.floor(currentMinutes / 60);
            const minute = currentMinutes % 60;

            // Formata para string "HH:mm" garantindo os dois dígitos
            const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            slots.push(formattedTime);

            // Avança o relógio em 35 minutos!
            currentMinutes += 35;
        }

        return slots;
    };
