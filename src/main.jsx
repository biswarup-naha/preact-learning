import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'

const container = document.getElementById('app');
render(<App />, container);
