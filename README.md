# Sign In and Sign Up Form

This project consists of a simple Sign In and Sign Up form implemented using HTML, CSS, and JavaScript. The form allows users to toggle between Sign In and Sign Up modes, input their credentials, and see password strength feedback when creating an account.

## File Structure

- `index.html`: Contains the HTML structure for the Sign In and Sign Up forms.
- `styles.css`: Contains the CSS styles for the form.
- `app.js`: Contains the JavaScript logic for form interactions and validation.

## Features

1. **Toggle Between Forms**:
   - Users can toggle between Sign In and Sign Up forms by clicking on the respective labels.

2. **Sign In Form**:
   - Contains fields for username and password.
   - Includes a "Remember Me" checkbox.
   - A "Forgot Password?" link is provided for password recovery.

3. **Sign Up Form**:
   - Contains fields for email, username, password, and password confirmation.
   - Displays password strength indicators based on password criteria (length, uppercase, lowercase, symbol, and number).

4. **Password Strength Indicator**:
   - Visual feedback on password strength using colored bars.
   - Real-time validation messages for password requirements.

5. **Password Visibility Toggle**:
   - Users can toggle the visibility of their password by clicking the eye icon.

6. **Password Match Check**:
   - Real-time validation to ensure the password and confirmation password fields match.

## How to Use

1. **Open the `index.html` file in a browser**:
   - This will load the Sign In and Sign Up form interface.

2. **Toggle between Sign In and Sign Up**:
   - Click on the "Sign In" or "Sign Up" labels to switch between forms.

3. **Sign In**:
   - Enter your username and password.
   - Click on the "Sign In" button to submit the form.

4. **Sign Up**:
   - Enter your email, username, and password.
   - Confirm your password in the second password field.
   - Check the password strength indicators and ensure all requirements are met.
   - Click on the "Sign Up" button to create an account.

## Code Explanation

### HTML (`index.html`)

- **Form Structure**: The HTML structure includes two forms: one for Sign In and one for Sign Up. Each form is contained within a div that can be toggled active or inactive.
- **Labels**: Labels for toggling between forms are implemented with appropriate icons for visual clarity.

### CSS (`styles.css`)

- **Basic Styles**: Sets up the overall look and feel, including font sizes, colors, and layout using flexbox and grid.
- **Form Styles**: Specific styles for form elements, including input fields, buttons, and error messages.
- **Password Strength**: Styles for the password strength indicator bars and error messages.

### JavaScript (`app.js`)

- **Event Listeners**: Adds click event listeners to toggle between forms and to manage password visibility.
- **Password Strength Function**: Evaluates the password strength and updates the UI with appropriate messages and colored bars.
- **Password Match Function**: Checks if the passwords match and displays an error message if they do not.
- **DOM Manipulation**: Uses DOM manipulation to dynamically update the UI based on user input and interactions.

## Example

To see the form in action, open `index.html` in your browser and interact with the form elements. You can test the Sign In and Sign Up functionalities, observe the password strength feedback, and ensure the password match validation works as expected.

## Dependencies

- Google Material Icons: Used for icons in the form. Included via link tags in the `index.html` file.