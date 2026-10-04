# ⚡ React Optimization

> A graph-based learning repository for mastering **React performance,
> rendering, data fetching, and production optimization**.

This repository is not just a collection of snippets. It is a structured
journey from understanding **why React renders** to learning **how to
measure, diagnose, and optimize real applications**.

------------------------------------------------------------------------

## 🧭 Optimization Map

``` mermaid
flowchart TD
    A["⚛️ React Optimization"] --> B["🔄 Re-renders"]
    A --> C["🧠 State Optimization"]
    A --> D["⚙️ useEffect Optimization"]
    A --> E["📦 Context Optimization"]
    A --> F["📋 List Optimization"]
    A --> G["🌐 Data Fetching"]
    A --> H["🚀 Code Splitting"]
    A --> I["🧩 Bundle Optimization"]
    A --> J["🖼️ Image Optimization"]
    A --> K["⚡ Event Optimization"]

    B --> B1["React.memo"]
    B --> B2["useMemo"]
    B --> B3["useCallback"]
    B --> B4["Stable References"]

    C --> C1["Local State"]
    C --> C2["Derived State"]
    C --> C3["State Splitting"]
    C --> C4["Lazy Initialization"]

    D --> D1["Dependencies"]
    D --> D2["Cleanup"]
    D --> D3["AbortController"]
    D --> D4["Race Conditions"]

    E --> E1["Split Contexts"]
    E --> E2["Memoized Provider"]
    E --> E3["Small Provider Scope"]

    F --> F1["Stable Keys"]
    F --> F2["Memoized Items"]
    F --> F3["Pagination"]
    F --> F4["Virtualization"]

    G --> G1["TanStack Query"]
    G --> G2["Caching"]
    G --> G3["Mutations"]
    G --> G4["Prefetching"]

    H --> H1["Dynamic import()"]
    H --> H2["React.lazy"]
    H --> H3["Suspense"]
    H --> H4["Lazy Routes"]

    I --> I1["Tree Shaking"]
    I --> I2["Dependency Audit"]
    I --> I3["Bundle Analyzer"]

    J --> J1["Lazy Loading"]
    J --> J2["WebP / AVIF"]
    J --> J3["Responsive Images"]
    J --> J4["Font Optimization"]

    K --> K1["Debounce"]
    K --> K2["Throttle"]
    K --> K3["Scroll / Resize"]
    K --> K4["Cleanup"]
```

------------------------------------------------------------------------

## 📁 Repository Structure

``` text
React Optimization/
│
├── Code splitting/
├── Data Fetching/
├── Event optimization/
├── Image optimization/
├── List optimization/
├── Re-renders/
├── State Optimization/
└── useEffect optimization/
```

Each folder focuses on one performance concept and contains practical
examples rather than purely theoretical notes.

------------------------------------------------------------------------

## 🗺️ Learning Roadmap

### 01 · Prevent Unnecessary Re-renders

-   `React.memo()`
-   `useMemo()`
-   `useCallback()`
-   Primitive vs reference props
-   Stable object and array references
-   Function prop optimization
-   Functional state updates

### 02 · State Optimization

-   Keep state as local as possible
-   Avoid duplicate state
-   Derived values instead of state
-   Split large components
-   Split state by responsibility
-   Avoid unnecessary global state
-   Lazy state initialization

### 03 · useEffect Optimization

-   Correct dependency arrays
-   Avoid unnecessary effects
-   Effect → state → render loops
-   Cleanup functions
-   `AbortController`
-   Debounced effects
-   Race-condition prevention
-   Move calculations outside effects

### 04 · Context Optimization

-   Split contexts
-   Memoize provider values
-   Memoize provider callbacks
-   Keep provider scope small
-   Avoid frequently changing state in broad contexts

### 05 · List Optimization

-   Stable keys
-   `React.memo()` for list items
-   Stable object/function props
-   Pagination
-   Virtualization
-   Large-list rendering strategies

### 06 · Data Fetching

-   TanStack Query
-   `useQuery()`
-   `useMutation()`
-   Query caching
-   `staleTime`
-   `gcTime`
-   Query invalidation
-   Request deduplication
-   Pagination
-   Infinite queries
-   Optimistic updates
-   Prefetching

### 07 · API Request Optimization

-   Avoid duplicate requests
-   Cancel unnecessary requests
-   `AbortController`
-   Debounced search APIs
-   Request caching
-   Pagination
-   Fetch only required data

### 08 · Code Splitting

-   `import()`
-   `React.lazy()`
-   `Suspense`
-   Route-based lazy loading
-   Component lazy loading
-   Lazy loading heavy libraries

### 09 · Bundle Optimization

-   Avoid unnecessary dependencies
-   Tree-shakable imports
-   Import only what is required
-   Detect large dependencies
-   Dynamic imports
-   Bundle analysis

### 10 · Image & Asset Optimization

-   `loading="lazy"`
-   Image dimensions
-   WebP / AVIF
-   Responsive `srcSet` / `sizes`
-   Lazy background assets
-   SVG optimization
-   Font optimization

### 11 · Input & Event Optimization

-   Debouncing
-   Throttling
-   Search optimization
-   Scroll optimization
-   Resize optimization
-   Event listener cleanup
-   `requestAnimationFrame`

### 12 · Expensive Computation

-   `useMemo()`
-   Expensive filtering
-   Sorting optimization
-   Data transformations
-   Move static calculations outside components
-   Web Workers for genuinely heavy CPU work

### 13 · Loading UX

-   Skeleton components
-   Suspense fallbacks
-   Loading states
-   Error states
-   Empty states
-   Optimistic UI

### 14 · Performance Debugging

-   React DevTools Profiler
-   Identify unnecessary renders
-   Chrome DevTools Network
-   Chrome Performance
-   Lighthouse
-   Bundle Analyzer
-   **Measure → Fix → Measure**

------------------------------------------------------------------------
