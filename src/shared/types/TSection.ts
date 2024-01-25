import { TChapter } from "./TChapter";

export type TSection = {
  name: string;
  chapters: TChapter[];
  order: number;
};
