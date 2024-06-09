import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterComponent(){
  return (
    <Typewriter
      options={{
        strings: ['Software Engineer.'],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterComponent;