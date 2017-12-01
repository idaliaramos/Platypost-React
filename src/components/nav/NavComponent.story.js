import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import NavComponent from './NavComponent';

storiesOf('NavComponent', module).add('NavigationComponent', () =>
  <NavComponent />
);
