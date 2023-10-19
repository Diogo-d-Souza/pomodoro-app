import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import Button from './button';
import Timer from './timer';

interface PomodoroTimerProps {
  pomodoroTime: number;
}
export default function PomodoroTimer(
  props: PomodoroTimerProps,
): React.JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="test" onClick={() => console.log(1)}></Button>
    </div>
  );
}