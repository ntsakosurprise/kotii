# kotii-lazy Roadmap

## v1.0.0 — Core Functionality (Current)

- ✅ Export `lazyLoad` for dynamic component import.
- ✅ Export `LazySuspense` wrapper for suspense fallback.
- ✅ Basic documentation and examples.
- ✅ npm package release.

## v1.1.0 — Developer Experience Improvements

- TypeScript support with proper type definitions for `lazyLoad` and `LazySuspense`.
- Improved error messages when a component fails to load.
- Better default fallback handling for `LazySuspense`.

## v1.2.0 — Advanced Lazy Loading

- Support for named exports in lazy-loaded components.
- Optional delay and timeout for suspense fallback.
- Preload functionality: allow components to be preloaded before rendering.
- Support for server-side rendering (SSR) friendly lazy loading.

## v2.0.0 — Performance & Ecosystem Enhancements

- Integration with popular React state management libraries (Redux, Zustand, Recoil) to preload components on demand.
- Analytics for lazy load performance (e.g., time-to-load metrics).
- Bundle splitting optimizations for large projects.
- Plugin system to extend `LazySuspense` with custom behaviors.

## Future Ideas

- Visual debugging tools for lazy-loaded components.
- Integration with React Router for route-based lazy loading.
- Support for concurrent mode and React 18+ features.
