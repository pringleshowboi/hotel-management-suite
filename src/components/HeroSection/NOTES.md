# HeroSection Component Notes

## Client and Server Components

- In Next.js (and similar frameworks), you can separate your UI into **client components** and **server components**.
- **Client components** run in the browser and can use interactivity, hooks like `useState`, `useEffect`, etc.
- **Server components** are rendered on the server and sent as HTML to the client, which can improve performance and reduce initial load times.

## Reducing Latency and Wait-Time

- If a JavaScript functionality (like an animated count-up) is causing slowdowns or high latency on the client, consider rendering it on the server.
- By moving heavy computations or animations to the server, you can reduce the amount of JavaScript sent to the client, improving perceived performance.
- For example, if the `CountUpNumber` animation is too slow on the client, you could render the final value on the server instead.

## Example Structure

- `ServerComponent.tsx` – Handles logic that can be pre-rendered or cached on the server.
- `ClientComponent.tsx` – Handles interactive or animated UI that requires client-side JavaScript.

## Summary

- Use server components for static or heavy computations to reduce client-side latency.
- Use client components for interactive or dynamic UI.
- Properly splitting components helps optimize performance and user experience.

## Purpose
The `CountUpNumber` component animates a number from 0 to a specified `endValue` over a given `duration` (in milliseconds). It is used for visually engaging statistics, such as room counts in the Hero section.

## Usage Example
```tsx
<CountUpNumber duration={5000} endValue={100} />
```

## How It Works
- Uses React's `useState` and `useEffect` to animate the count-up effect on the client.
- Relies on `requestAnimationFrame` for smooth animation.
- Rounds the displayed number for a clean UI.

## Performance & Server/Client Considerations
- This component is a **client component** and requires JavaScript to run in the browser.
- For improved performance and reduced latency, consider rendering static or heavy computations on the server when animation is not required.
- For more on optimizing with server and client components, see [HeroSection Component Notes](../HeroSection/NOTES.md).

## Related Notes
- See `{HeroSection Component Notes}` for strategies on splitting server and client components to reduce latency and wait-time.