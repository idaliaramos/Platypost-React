import { configure } from '@storybook/react';
import React from 'react';

import '../src/App.css';
function loadStories() {
  // require('../src/components/mail/MailComponent.story.js');
  require('../src/components/AddressFormFieldComponent.story.js');
  require('../src/components/mail/MailComponent.story.js');
  require('../src/components/nav/NavComponent.story.js');
  require('../src/components/table/History.story.js');
  require('../src/components/postcard/postcard.story.js');
  require('../src/components/mailForms/MailToFromComponent.story.js');
}

configure(loadStories, module);