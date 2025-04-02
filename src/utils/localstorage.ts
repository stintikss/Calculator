export const saveHistory = (history: string[]) => {
    try {
        localStorage.setItem('calcHistofy', JSON.stringify(history))
    } catch(error) {
        console.error('Error saving history to localStorage', error);
    }
}

export const getHistory = (): string[] => {
    try {
      const savedHistory = localStorage.getItem('calculatorHistory');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error('Error retrieving history from localStorage', error);
      return []; 
    }
  };