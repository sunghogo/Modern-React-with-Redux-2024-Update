/*
    - Interfaces need to also declare and annotate methods/functions in advance
        - Shows up as documentation when hovering over
    - Function Types:
        functionName: (arg1: type, arg2: type, etc...) => returnType;

*/

interface Car3 {
  model: string;
  year: number;
  setYear: (nextYear: number) => void;
  setModel: (nextModel: string) => void;
  getDescription: () => string;
}

const mustang3: Car3 = {
  model: 'Mustang',
  year: 2015,
  setYear(nextYear: number) {
    this.year = nextYear;
  },
  setModel(nextModel: string) {
    this.model = nextModel;
  },
  getDescription() {
    return `Year ${this.year}, Model: ${this.model}`;
  },
};

mustang3.setModel();
