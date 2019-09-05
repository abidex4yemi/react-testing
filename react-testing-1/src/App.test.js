import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

afterEach(rtl.cleanup);

describe('App Test suite', () => {
  it('Should render a span with text (Welcome)', () => {
    const wrapper = rtl.render(<App />);
    // console.log(wrapper.debug());
    const element = wrapper.queryByText(/Welcome/);
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  });
});
