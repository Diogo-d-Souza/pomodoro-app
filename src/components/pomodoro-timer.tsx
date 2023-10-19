import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';

interface PomodoroTimerProps {
  defaultPomodoroTime: number;
}
export default function PomodoroTimer(
  props: PomodoroTimerProps,
): React.JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>Hello {mainTime}</div>;
}
