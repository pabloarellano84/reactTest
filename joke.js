import React from 'react';

const Joke = (props) => (
    <div>
        <p>{props.question}<br/>{props.punchLine}</p>
    </div>
)

export default Joke;