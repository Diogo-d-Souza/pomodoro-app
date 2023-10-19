import React from 'react';
import PomodoroTimer from './components/pomodoro-timer';

function App(): React.JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer pomodoroTime={1500} />
    </div>
  );
}

export default App;
