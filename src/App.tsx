import { useState, useEffect, useRef } from "react"
import { ITodo } from './types/data';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Grids from './components/Grids'
import './App.css'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { TodoList } from "./components/TodoList";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import Footer from "./components/Footer/Footer";


const App: React.FC = () => {
    const[value, setValue] = useState('');
    const[todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter')
        addTodo();
    };

    const addTodo = () => {
        if(value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('')
        }
    }

    const removeTodo = (id : number) : void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id : number) : void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    useEffect(() => {
        if (inputRef.current)
        inputRef.current.focus();
    })

    return (
        <>
        <Header />
        <Grid container padding={3} margin={1} columnGap={3} rowGap={3}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
        <Footer />
      </>
    );
}

export {App}