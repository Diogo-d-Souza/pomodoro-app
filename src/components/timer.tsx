import React from 'react';
import { secondsToMinutes } from '../utils/seconds-to-minutes';

interface TimerProps {
  mainTime: number;
}
export default function Timer(props: TimerProps): React.JSX.Element {
  return <div className="timer">{secondsToMinutes(props.mainTime)}</div>;
}
