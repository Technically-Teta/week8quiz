import{expect, test} from 'vitest'
import App from './App';
import { render } from '@testing-library/react';
import Header from './components/header';
import Item from './components/item';
import Form from './components/form';

test('renders without crashing', () => {
    const{getByText} = render(<App/>);
     expect(getByText('Hello Techtonica!')).toBeDefined();
    
})

test('renders header correctly', () => {
    const{getByTestId} = render(<Header/>);
     expect(getByTestId('header-id')).toBeDefined();

})


test('renders any (text)items in the list', () => {
     const item = { text: 'Item 1' };
        expect(render(<Item item={item}/>)).toMatchSnapshot();


});

describe('<Form />', () => {
    test('test if value is string', () => {
      const verified = { value: 'test' }; 
      expect(verified.value).toBe('test');   
    });    
  });
  
test('value not to be undefined', () => {
    const clearance = { value: undefined }; 
    expect(clearance).not.toBeUndefined();
    

});
test('header should have h1 tag', () => {
    const{getByTestId} = render(<Header/>);
    const headCheck = getByTestId('header-id').querySelector('h1');
    expect(headCheck).toBeTruthy();
   
}); 

