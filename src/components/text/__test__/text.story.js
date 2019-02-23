import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from '../text.component';

storiesOf('Text', module)
  .add('Basic Text', () => (
    <Text name="test" label="test" />
  ));
