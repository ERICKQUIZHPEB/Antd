import React from 'react';
//import Gallery from './Gallery';
//import Avatar from './Avatar';
import TodoList from './Todolist';

//export default function App(){
// return(
// <Profile/>
//);
//}
const App: React.FC = () => (
    //<Gallery/>
    //<Avatar />
    <TodoList name={'Gregorito Y. Zara'} theme={{
        backgroundColor: 'black',
        color: 'pink'
    }}/>
);

export default App;
