import React from 'react';
import Renderer from 'react-test-renderer';
import Text from '../text.component';

it('Render', () => {
  const dom = Renderer.create(
    <Text />
  );

  expect(dom.toJSON()).toMatchSnapshot();
});
