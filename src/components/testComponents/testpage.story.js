import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

storiesOf('test', module)
  .add('front image', () => <Component1 />)
  .add('back text', () => <Component2 />);
