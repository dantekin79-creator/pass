# React Event Handling - Password Input Lab

## Project Overview

This is a React + Vite project that implements an anti-bot security monitoring system. It provides a password input field and submit button that track user interactions (typing and mouse movement) to help security engineers identify suspicious bot behavior.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   - The app will be available at `http://localhost:5173` (or the port shown in your terminal)
   - Open your browser and navigate to this URL

4. **View console output:**
   - Open your browser's Developer Tools (F12 or right-click → Inspect → Console tab)
   - Interact with the password input and button to see the logged events

### Building for Production

```bash
npm run build
```

## Testing Environment

This project includes comprehensive unit and integration tests using Jest and React Testing Library.

### Running Tests

1. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

2. **Run all tests:**
   ```bash
   npm test
   ```

3. **Run tests in watch mode (auto-rerun on file changes):**
   ```bash
   npm run test:watch
   ```

4. **Generate coverage report:**
   ```bash
   npm run test:coverage
   ```

### Test Files

#### **PasswordInput.test.jsx**
Tests for the PasswordInput component including:
- ✅ Component renders an input element
- ✅ Input has password type attribute
- ✅ onChange event triggers console.log with "Entering password…"
- ✅ Handles rapid typing (edge case)
- ✅ Handles paste events (edge case)
- ✅ Handles special characters (edge case)

#### **SubmitButton.test.jsx**
Tests for the SubmitButton component including:
- ✅ Component renders a button element
- ✅ Button displays "Submit Password" text
- ✅ onMouseEnter event triggers console.log with "Mouse Entering"
- ✅ onMouseLeave event triggers console.log with "Mouse Exiting"
- ✅ Both events work in sequence
- ✅ Handles rapid hover/unhover (edge case)
- ✅ Handles click events correctly (edge case)
- ✅ Handles multiple hover sequences (edge case)

#### **App.test.jsx**
Integration tests for the App component including:
- ✅ App renders both PasswordInput and SubmitButton
- ✅ PasswordInput component is functional in App
- ✅ SubmitButton component is functional in App
- ✅ Both components work together seamlessly
- ✅ Handles complete user flow (edge case)
- ✅ Handles rapid interactions (edge case)

### Test Coverage

The test suite provides comprehensive coverage with:
- **Component Rendering Tests:** Verify all components render correctly
- **Event Handler Tests:** Confirm event handlers are called with correct parameters
- **Console Output Tests:** Validate console.log messages match requirements
- **Edge Case Tests:** Test rapid interactions, special characters, paste events, and more
- **Integration Tests:** Verify components work together as expected

## Component Architecture

### Component Diagram
```
App
├── PasswordInput
└── SubmitButton
```

### Components

#### **PasswordInput**
- **File:** `src/PasswordInput.jsx`
- **Purpose:** Renders a password input field that monitors user typing
- **Events:**
  - `onChange`: Triggered when user types in the input
  - **Console Output:** "Entering password…"
- **Use Case:** Monitors typing cadence for anti-bot detection
- **Connected To:** App.jsx (parent component)

#### **SubmitButton**
- **File:** `src/SubmitButton.jsx`
- **Purpose:** Renders a submit button that tracks mouse hover interactions
- **Events:**
  - `onMouseEnter`: Triggered when user hovers over the button
    - **Console Output:** "Mouse Entering"
  - `onMouseLeave`: Triggered when user moves mouse away from the button
    - **Console Output:** "Mouse Exiting"
- **Use Case:** Monitors mouse movement patterns for anti-bot detection
- **Connected To:** App.jsx (parent component)

#### **App**
- **File:** `src/App.jsx`
- **Purpose:** Main application component that combines both PasswordInput and SubmitButton
- **Role:** Acts as the parent component and container for the security monitoring form

## Testing the Events

To verify all events are working correctly:

1. **Type in the password input:**
   - You should see "Entering password…" in the console for each keystroke

2. **Hover over the submit button:**
   - You should see "Mouse Entering" in the console

3. **Move mouse away from the button:**
   - You should see "Mouse Exiting" in the console

## Lab Requirements - Rubric Checklist

✅ **Input Component**
- Displays one input element
- Input has the correct type attribute (`type="password"`)
- Typing in the input triggers console output ("Entering password…")

✅ **Button Component**
- Displays a button with the text "Submit Password"
- Hovering over the button triggers console output ("Mouse Entering")
- Removing mouse from the button triggers console output ("Mouse Exiting")

✅ **Event Handlers**
- `handleChange()` function in PasswordInput
- `handleEnter()` function in SubmitButton
- `handleLeave()` function in SubmitButton
- All functions properly call `console.log()` with required messages
- Event handlers are correctly connected to their respective DOM elements

✅ **Documentation**
- Component descriptions and functionality documented
- Component connections explained
- Event handling logic clarified with JSDoc comments

## Note on Project Structure

This project focuses on the core event handling requirements. The assignment mentioned Home.jsx, About.jsx, and Links.jsx, but those components are not required for this specific lab. The current structure contains only the components needed for the Password Input lab as per the rubric.

## Additional Resources

- [React Event Handling Documentation](https://react.dev/learn/responding-to-events)
- [React Synthetic Events](https://react.dev/reference/react-dom/components/common#react-event-object)
- [Vite Documentation](https://vitejs.dev/)
