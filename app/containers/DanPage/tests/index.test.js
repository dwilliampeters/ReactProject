import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Button from 'components/Button';

describe('<DanPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <DanPage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toEqual(true);
  });
});
