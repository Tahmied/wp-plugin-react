import { createRoot } from '@wordpress/element';
import './styles.css';

import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

const rootElement = document.getElementById('my-plugin-root');

if (rootElement) {
    const root = createRoot(rootElement);
    const pageId = window.myPluginConfig?.page;

    let ComponentToRender = Dashboard; 

    if (pageId.includes('my-plugin-settings')) {
        ComponentToRender = Settings;
    }

    root.render(
        <div className="tw-p-5"> 
             <ComponentToRender />
        </div>
    );
}