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
