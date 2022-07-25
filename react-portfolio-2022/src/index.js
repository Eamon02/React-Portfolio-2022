// Import React and ReactDOM libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import app
import App from './App.jsx';

// Import styles
import './sass/style.scss';

// Render to dom
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
