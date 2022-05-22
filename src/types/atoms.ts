import React, { ReactNode } from 'react';

export interface ButtonProperty {
  children: ReactNode;
  onClick?(e?: MouseEvent): void;
  className?: string;
  type?: string;
  htmlType?: string;
}
export interface HeaderProperty {
  onClick?(e?: MouseEvent): void;
  className?: string;
  height?: number;
}
export interface SiderProperty {
  onClick?(e?: MouseEvent): void;
  className?: string;
}
export interface ContentProperty {
  onClick?(e?: MouseEvent): void;
  className?: string;
}

export interface MenuProperty {
  onClick?(item: any): void;
  className?: string;
}
export interface h2Property {
  onClick?(): void;
  className?: string;
}
export interface h4Property {
  onClick?(): void;
  className?: string;
}
export interface divProperty {
  onClick?(): void;
  className?: string;
}
export interface spanProperty {
  onClick?(): void;
  className?: string;
}

export interface Step {
  title: string;
  subTitle?: string;
  description?: string;
  validation?: void;
}
export interface StepsProperty {
  current: number;
  steps: Array<Step>;
  className?: string;
}
export interface ButtonGroupProperty {
  buttons: Array<ButtonProperty>;
  className?: string;
}
