export type Level = {
  title: string;
  icon: "up" | "down";
  imc: number[];
  userImc?: number;
  idealWeight?: number[];
};

export const levels: Level[] = [
  { title: "Magreza", icon: "down", imc: [0, 18.59] },
  { title: "Normal", icon: "up", imc: [18.6, 24.99] },
  { title: "Sobrepeso", icon: "down", imc: [25, 30] },
  { title: "Obesidade", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / ((height / 100) * (height / 100));
  const idealWeight = [
    levels[1].imc[0] * ((height / 100) * (height / 100)),
    levels[1].imc[1] * ((height / 100) * (height / 100)),
  ];

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      levels[i].userImc = imc;
      levels[i].idealWeight = idealWeight;

      return levels[i];
    }
  }

  return null;
};
