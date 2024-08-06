import React, { CSSProperties, ReactNode } from 'react';
import './Row.css';

export interface RowProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: number;
  children: ReactNode;
}

export default function Row(props: RowProps) {
  const style: CSSProperties = {};

  props.gap && (style.gap = props.gap);
  props.justifyContent && (style.justifyContent = props.justifyContent);

  return (
    <div style={style} className={'flex flex-row'}>
      {props.children}
    </div>
  );
}
