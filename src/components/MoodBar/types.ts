import { ComponentProps } from 'solid-js';

export type MoodBarProps = ComponentProps<'div'> & {
  moods: {
    mood: 'ANGRY' | 'AVERAGE' | 'HAPPY' | 'PRODUCTIVE' | 'SAD' | 'SICK';
    count: number;
  }[];
};
