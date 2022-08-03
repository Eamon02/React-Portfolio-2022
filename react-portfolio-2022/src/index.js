// Import React and ReactDOM libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import app
import App from './App.jsx';

// Import styles
import './sass/style.scss';

// Render to dom
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<BrowserRouter>
		<App />
		</BrowserRouter>
	</StrictMode>
);
