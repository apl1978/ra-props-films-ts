import { Stars } from './components/Stars'
import './App.css'

const count: number = 4;

function App() {

    return (
        <div className='App'>
            <Stars count={count} />
        </div>
    )
}

export default App
