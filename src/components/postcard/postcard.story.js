import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import FrontPostcardComponent from './FrontPostcardComponent.js';
import BackPostcardComponent from './BackPostcardComponent.js';

storiesOf('Postcard', module)
  .add('front image', () => <FrontPostcardComponent />)
  .add('back text', () => <BackPostcardComponent />);
