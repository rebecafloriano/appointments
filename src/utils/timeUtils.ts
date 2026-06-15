
    export const generateTimeSlots = (): string[] => {
        const slots: string[] = [];

  
        let currentMinutes = 8 * 60; 
        const endMinutes = 18 * 60;  

        while (currentMinutes < endMinutes) {
            const hour = Math.floor(currentMinutes / 60);
            const minute = currentMinutes % 60;

    
            const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            slots.push(formattedTime);

            currentMinutes += 35;
        }

        return slots;
    };
