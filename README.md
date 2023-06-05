
# Dynamic Page Application

Live demo: 🚀 [search page][search] and [results page][results] - Design document: [here][archi]



This project is a proof of concept that demonstrates how highly dynamic and heterogeneous web pages can be implemented using an advanced [Single Page Application][SPA] (SPA) architecture (i.e. with HTML produced client-side).

The main goal was to see if the SPA architecture could be tuned into something more dynamic (thus the name *Dynamic Page Application*) in order to load a very minimal set of resources in the initial page - and ensure a very good startup time - and then load everything on-demand. The main capability brought by DPAs is the possibility to dynamically load JS bundles built independently from the main application - whereas in traditional SPAs (or [PWAs][PWA]) dynamic imports are still created at build time (through packagers like [babel] or [rollup])

The design choices and general architecture consideration are described in this [architecture overview][archi].

> Note: This application mocks data from a [Google Search Results][GSPHS] page - but this type of architecture would apply to any application that needs to display very hetereogenous content or that needs to support extension components (like custom widgets) built independently from the application (i.e. after the core application build). The DPA architecture would suit well CMS-based applications like [Wordpress], [Instagram] or [Confluence], or communication platforms like [Slack] or [What's app][Whatsapp] that can contain messages with special widgets (e.g. interactive graphs, etc.)

[GSPHS]: https://www.google.com/search?q=homer+simpson
[Wordpress]: https://wordpress.com/read
[Instagram]: https://www.instagram.com/
[Confluence]: https://www.atlassian.com/software/confluence
[Slack]: https://slack.com/
[Whatsapp]: https://www.whatsapp.com/


## Using the demo

The primary goals of the demo were to
- assess the feasibility and performance of such an architecture - thus two demo entry points are available:
    - a pseudo [search page][search] that can trigger a search request and display the search results in the same page. The goal of this search page was to assess the performance with a partial application load (note that the search page is very minimalistic but it could be easily enhanced with traditional dynamic imports without affecting the initial load performance - this is how the actual google search page is implemented btw.)
    - a deep link to the [results page][results] - here the goal was to assess the rendering performance of a full results rendering, as if triggered from an external link (e.g. through the browser search field).
- assess the developer experience - i.e. ensure that we can keep the same level of productivity as with SPAs through full [typescript] support or tools like [viteJS] or [tailwindCSS].
- assess the support of advanced use cases involving dynamic content updates - i.e. updates of semi-unstructured data that were loaded as dynamic content. Two use cases have been implemented:
    - *Dynamic update of a component*: when opening a section in the first accordion component, the accordion sends an update request that returns new sections that will be appended to the accordion's list:
    ![mv](docs/accordion.png?raw=true)
    - *Dynamic update of content contained in an arbitrary place*: when clicking on an image displayed in the first image list component, an update request is sent to the server and returns new content to display in a popover dialog on the right side of the application:
    ![mv](docs/imgdialog.png?raw=true)


## Architecture

As previously mentioned, the design choices and general architecture considerations behind this project are described in this [document][archi].
## Code organization

This demo relies on the following technologies:
- [typescript] - the essential type support for JavaScript
- [preact] - a lightweight version of the famous [react] library
- [asimo] - a micro-library that allows to decouple module implementations from their interfaces and that fulfills the same role as a Dependency Injection system
- [lml] - a micro-library that allows to describe pseudo-HTML or (pseudo-JSX) as JSON and that offers support of JSX conversion and update instructions
- [trax] - a reactive state management library that plays well with preact and can be seen as an alternative to [mobx], preact [signals] or [redux]
- [tailwindCSS] - a utility CSS framework that provides an original and very effective approach to CSS management


The code is organized into 5 categories, each with their own folder:
- the [views] that contain the main application components (like the navigation bar, the search and the results page, etc.)
- the [stores] that contain the core services handling the UI data and logic:
    - the [NavService] exposes the navigation data (e.g. which screen to display) and navigation logic (e.g. back to the home screen). This is where the page [history] management (aka. [router]) should be implemented (not in the scope of this demo).
    - the [SearchService] that manages the data and actions used in the search and results views (e.g. search queries, dynamic content interpretation, etc.)
- the [api] proxies that contain proxy stubs that should be generated from the server REST API specifications. Their goal
is to provide a fully typed interface over the REST APIs. They are also a good place to introduce mocks thanks to asimo
capabilities (the current implementation relies on mocked [data] loaded through dynamic imports)
- the general application [components] that are shared by all application views and that are bundled with the application core (e.g. buttons, icons, etc.)
- and last but not least, the external [bundles] that contain content-specific components that are loaded dynamically according to URLs returned in the [Search Response]. Those bundles are built independently from the main application, this is why they have their own [rollup build configuration]. Three separate bundles have been created for this demo:
    - the [common bundle] that contains components that should be more or less common to all search results
    - the [abtest bundle] that contains components used for a specific AB test and referenced in the main search response
    - the [sideimg bundle] that contains components used in the content update that displays the image popover dialog.




[views]: https://github.com/asimojs/dpademo/tree/main/src/views
[stores]: https://github.com/asimojs/dpademo/tree/main/src/stores
[NavService]: https://github.com/asimojs/dpademo/blob/main/src/stores/nav.ts
[history]: https://developer.mozilla.org/en-US/docs/Web/API/History
[router]: https://github.com/preactjs/preact-router
[SearchService]: https://github.com/asimojs/dpademo/blob/main/src/stores/search.ts
[data]: https://github.com/asimojs/dpademo/tree/main/src/api/data
[components]: https://github.com/asimojs/dpademo/tree/main/src/components
[bundles]: https://github.com/asimojs/dpademo/tree/main/src/bundles
[Search Response]: https://github.com/asimojs/dpademo/blob/main/src/api/data/homer.ts
[rollup build configuration]: https://github.com/asimojs/dpademo/blob/main/rollup.config.js

[common bundle]: https://github.com/asimojs/dpademo/blob/main/src/bundles/common/index.ts
[abtest bundle]: https://github.com/asimojs/dpademo/blob/main/src/bundles/abtest/index.ts
[sideimg bundle]: https://github.com/asimojs/dpademo/blob/main/src/bundles/sideimg/index.ts


[typescript]: https://typescriptlang.org/
[preact]: https://preactjs.com/
[react]: https://reactjs.org/
[asimo]: https://github.com/asimojs/asimo
[lml]: https://github.com/asimojs/lml
[trax]: https://github.com/traxjs/trax
[mobx]: https://mobx.js.org/
[signals]: https://preactjs.com/guide/v10/signals/
[redux]: https://redux.js.org/
[api]: https://github.com/asimojs/dpademo/tree/main/src/api

## Running the demo locally

```bash
# install
yarn install

# dev server
yarn dev

# production build
yarn build

# local server to serve the production build
yarn serve
```

## Further enhancements...

The following parts were not covered in this proof of concept but should be worth considering for future evolutions:
- responsive design: the demo doesn't offer a mobile specific layout - this would be really nice to have.
- router: as previously mentioned, the application doesn't use the browser history API to manage back and forward navigation
- CSS bundling: the demo focuses on the load of dynamic javascript modules, but CSS should be also covered. Interestingly the usage of [tailwindCSS] partially covers this problem by offering the possibility to have common set of CSS utility classes that are part of the core application bundle and that can be safely used everywhere. That being said, it would be interesting to support a "diff" tool to identify the missing utility classes and load them dynamically with the JS bundle.
- more content: this demo tries to mock as much as possible the actual [google search results][GSPHS] for "Homer Simpson", but there as still a lot of missing data and actions that should be covered to completely be on par with the original page. That being said, adding 30% more content should not significantly change the performance order of magnitude (the response would be slightly bigger and the rendering should simply take a few more tens of ms).

[search]: https://asimojs.github.io/dpademo/
[results]: https://asimojs.github.io/dpademo/homer_simpson.html
[SPA]: https://en.wikipedia.org/wiki/Single-page_application
[babel]: https://babeljs.io/
[rollup]: https://rollupjs.org/
[PWA]: https://en.wikipedia.org/wiki/Progressive_web_app
[archi]: https://docs.google.com/document/d/1GqCh5UbKQdyXI8jyj1YoDHQOfTM8bDsYIVEzXJIdPO8
[viteJS]: https://vitejs.dev/
[tailwindCSS]: https://tailwindcss.com/
[PlayWright]: https://playwright.dev/
