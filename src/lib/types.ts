export type Question = {
  id: number;
  task: string;
  question: string;
  options: {
    a: string;
    b: string;
    c?: string;
  };
  answer: 'a' | 'b' | 'c';
};
