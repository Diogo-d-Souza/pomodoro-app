import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import Button from './button';
import Timer from './timer';

interface PomodoroTimerProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
export default function PomodoroTimer(
  props: PomodoroTimerProps,
): React.JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [working, setWorking] = useState(false);
  const [timeCounting, setTimeCounting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="test" onClick={() => console.log(1)}></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>
      <div className="details">
        <p>Testing</p>
      </div>
    </div>
  );
}
