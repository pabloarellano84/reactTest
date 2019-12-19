import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './Joke';

const App = () => (
  <div>
    <Joke question="Toc Toc 1" punchLine="Quien es?"/>
    <Joke question="Toc Toc 2" punchLine="Quien fue?"/>
    <Joke question="Toc Toc 3" punchLine="Quien salio?"/>
    <Joke question="Toc Toc 4" punchLine="Te olvidaste las llaves?"/>
    <Joke question="Toc Toc 5" punchLine="es?"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));