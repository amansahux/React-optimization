// 1. Keep State as Local as Possible ⭐⭐⭐

// State needed by 1 component?
//         ↓
// Keep it there.

// State needed by several nearby components?
//         ↓
// Move it to their common parent.

// State needed throughout application?
//         ↓
// Consider global state.

// 2. Avoid Duplicate State ⭐⭐⭐

// 3. Derived Values Instead of State ⭐⭐⭐

// 4. Split Large Components ⭐⭐


// But remember:

// Component splitting alone does not magically stop re-renders.

// If parent state changes, children can still render.

// The benefit is that now state can be placed closer to the component that actually needs it.

// 5. Split State by Responsibility ⭐⭐

// 6. Avoid Unnecessary Global State ⭐⭐⭐

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
