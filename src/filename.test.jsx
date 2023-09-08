import{expect, test} from 'vitest'
import App from './App';
import {render} from '@testing-library/react';

test('renders without crashing', () => {
    const{getByText} = render(<App/>);
    expect(getByText('Hello Techtonica!')).toBeDefined();
    
})