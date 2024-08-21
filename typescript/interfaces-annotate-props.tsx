/*
  - Create interfaces to annotate/type componnent props
    - Instances will require the appropriate props to be passed
*/

import React from 'react';

interface TaskShowProps {
  title: string;
  completed: boolean;
}

function TaskShow({ title, completed }: TaskShowProps) {
  return (
    <div>
      {title} - {completed ? 'Done' : 'Need to complete'}
    </div>
  );
}

<TaskShow title="Write an interface" completed />;
