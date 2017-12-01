import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import frontPostcardComponent from './frontPostcardComponent.js';
import backPostcardComponent from './backPostcardComponent.js';

storiesOf('Postcard', module)
  .add('front image', () => <frontPostcardComponent />)
  .add('back text', () => <backPostcardComponent />);
