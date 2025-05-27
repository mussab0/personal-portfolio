// src/types/react-vertical-timeline-component.d.ts
declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    icon?: React.ReactElement;
    iconStyle?: React.CSSProperties;
    position?: 'left' | 'right';
  }

  export const VerticalTimeline: React.FC<{ children?: React.ReactNode; lineColor?: string }>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
