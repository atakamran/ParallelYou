# Design System

This document defines the design system for the Parallel You app, ensuring a consistent, neo-futuristic, and visually appealing user experience.

### 1. **Color Palette (Neon Futuristic Dark Mode)**

The theme is dark, with vibrant neon accents to create a futuristic and motivating atmosphere.

*   **Primary Background:** `#0A0A0F` (A very dark, near-black blue)
*   **Secondary Background (Cards/Modals):** `#1A1A2E` (A dark navy blue with a hint of purple)
*   **Primary Accent (Brand Color):** `#00F5D4` (A vibrant neon cyan/mint)
*   **Secondary Accent (CTA/Highlight):** `#FF00E6` (A bright neon magenta)
*   **Tertiary Accent (Charts/Graphs):** `#7B2DFF` (A vivid violet)
*   **Primary Text:** `#F5F5F5` (A slightly off-white for readability)
*   **Secondary Text (Subtle):** `#A9A9A9` (A light gray)
*   **Success:** `#00FFA2`
*   **Error:** `#FF3B30`

### 2. **Typography**

*   **Font Family:** **Inter** (or SF Pro for iOS / Roboto for Android as fallbacks). Inter is a clean, modern, and highly readable sans-serif font that works well for UI.
*   **Headings:**
    *   `H1` (Screen Title): 32pt, Bold
    *   `H2` (Section Title): 24pt, SemiBold
    *   `H3` (Card Title): 20pt, Medium
*   **Body:**
    *   `Body Large`: 16pt, Regular
    *   `Body Small`: 14pt, Regular
*   **Buttons:** 16pt, SemiBold
*   **Labels:** 12pt, Regular, Uppercase

### 3. **Spacing & Layout**

We use a consistent 8pt grid system for spacing, padding, and margins.

*   **xs (Extra Small):** 4pt
*   **s (Small):** 8pt
*   **m (Medium):** 16pt
*   **l (Large):** 24pt
*   **xl (Extra Large):** 32pt
*   **xxl (Extra Extra Large):** 48pt

**Layout:**
*   **Screen Padding:** 16pt horizontal padding on all main screens.
*   **Section Spacing:** 32pt margin between major sections on a screen.

### 4. **Component Style Guidelines**

*   **Buttons:**
    *   **Primary CTA:** Solid fill with `Primary Accent` color (`#00F5D4`), white text.
    *   **Secondary:** Outline style with `Primary Accent` border, text in `Primary Accent`.
    *   **Disabled:** Grayed out (`#4A4A5A`), non-interactive.
    *   **Border Radius:** 12pt (subtly rounded corners).
*   **Cards:**
    *   **Background:** `Secondary Background` (`#1A1A2E`).
    *   **Border Radius:** 16pt.
    *   **Border:** A subtle 1px border with a slightly lighter shade or a faint neon glow effect.
    *   **Glassmorphism Effect:** Use a semi-transparent, blurred background for a frosted glass effect on modals or overlays.
*   **Inputs:**
    *   Standard text inputs will have a dark background, a subtle border, and white text.
    *   On focus, the border should glow with the `Primary Accent` color.
*   **Charts & Graphs:**
    *   Use `react-native-svg` or a similar library.
    *   Line charts and bar charts should use the accent colors (`#00F5D4`, `#FF00E6`, `#7B2DFF`) for data visualization against the dark background.

### 5. **Animations & Micro-interactions**

Animations should be smooth, subtle, and meaningful.

*   **Library:** **React Native Reanimated** and **Lottie**.
*   **On-Load:** Fade-in and slide-up animations for screen content to feel dynamic.
*   **Button Press:** Subtle scale-down effect on touch.
*   **Loading States:** Use a custom Lottie animation (e.g., a pulsating neon circle or a futuristic loading bar) instead of a standard spinner.
*   **Card Hover/Press:** A subtle glow effect or lift on interaction.
*   **AI Generation:** A more complex animation sequence (e.g., flowing particles, connecting nodes) can be used to visualize the "thinking" process.

### 6. **Iconography**

*   **Library:** Use a clean, modern icon set like **Feather Icons** or **Eva Icons**.
*   **Style:** Icons should be line-style, matching the `Primary Text` or `Primary Accent` color.
*   **Size:** 24x24 is the standard tap target size.
