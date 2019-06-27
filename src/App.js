import React, { Component } from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';

class App extends Component {
  render() {
    const firstTooltip = (
      <Tooltip message='tooltip message'>
       ipsum
      </Tooltip>
    )
    const secondTooltip = (
      <Tooltip message='another tooltip message'>
        officiis
      </Tooltip>
    )
    return (
      <main className='App'>
      <Split className='left' >
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
    )
  }
}

export default App;