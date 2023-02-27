import { ComponentProps } from 'solid-js';

export type SelectProps = ComponentProps<'select'> & {
  label?: string;
};

export type SelectOptionProps = ComponentProps<'option'>;
