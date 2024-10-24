import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Hellowordstext=screen.getByText(/Hello World/i);
  expect(Hellowordstext).toBeInTheDocument();
});
test("test case 2",()=>{
  render(<App/>);
  const onClickButton=screen.getByText(/OnClickButton/i);
  const registrationComponentTextBeforeClick=screen.queryByText(/Registration Component/i);
  expect(registrationComponentTextBeforeClick).not.toBeInTheDocument();
  fireEvent.click(onClickButton);
  const registrationComponentTextAfterClick=screen.getByText(/Registration Component/i);
  expect(registrationComponentTextAfterClick).toBeInTheDocument();
})