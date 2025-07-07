
Build a React application that demonstrates component structure, reusability, and the behavior of React.StrictMode.
Requirements:
1. Strict Mode Wrapping:
o Create an entry file (index.js) that wraps the main component (Dashboard) in
React.StrictMode.
2. Reusable Component:
o Inside the Dashboard component, use a reusable Card component.
o The Card should render its content using props.children wrapped inside a React.Fragment.
3. Component Lifecycle Monitoring:
о Add useEffect hooks in both Dashboard and Card components.
o Use console.log() statements inside useEffect and its cleanup function to log messages when the components mount and unmount.

Expected output in development mode :
Dashboard Mounted
Card Mounted
Card Unmounted
Dashboard Unmounted
Dashboard Mounted
Card Mounted
