import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
export default function Button(props: ButtonProps): React.JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}
