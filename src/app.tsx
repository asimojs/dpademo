import { render } from 'preact';
import { asm } from '@asimojs/asimo';
import { MainLayout } from './views/main';

// Load service implementations
import './api';
import './stores/nav';
import './stores/search';

import './app.css';
import { NavServiceIID, SearchServiceIID } from './stores/types';
import { createGlobalContext } from './bundles/utils';
import { Button } from './components/button';
import { Icon } from './components/icon';
import { Columns } from './components/columns';

async function main() {
    if ((import.meta as any).env?.DEV) {
        // DEV ONLY
        // import independnt bundles to avoid separate bulid and benefit from vite auto-reload
        // these bundles will be built and loaded separately in production mode
        await import('./bundles/common');
        await import('./bundles/abtest');
    }

    const nav = (await asm.get(NavServiceIID))!;
    const initState = (globalThis as any)["init-state"];

    const ss = await asm.get(SearchServiceIID);
    ss.registerBaseComponent("btn", Button);
    ss.registerBaseComponent("icon", Icon);
    ss.registerBaseComponent("cols", Columns);

    if (initState && initState.dataType === "SearchResponse") {
        await ss.loadSearchResponse(initState.data.response, initState.data.query);
    }

    const GlobalContext = createGlobalContext();
    render(
        <GlobalContext>
            <div className='mainapp'>
                <MainLayout nav={nav} />
            </div>
        </GlobalContext>
        , document.getElementById('main')!);
}

main();
