# Buy & Carry E-commerce Platform

Welcome to the Buy & Carry e-commerce platform, where you can explore a wide range of products, add them to your cart, and complete your purchases with ease. 

## Table of Contents

- [SignupLogin Component](#signuplogin-component)
- [ProductList Component](#productlist-component)
- [Cart Component](#cart-component)
- [ProductDetails Component](#productdetails-component)
- [Navbar Component](#navbar-component)
- [OrderReceipt Component](#orderreceipt-component)
- [PaymentForm Component](#paymentform-component)
- [Checkout Component](#checkout-component)
- [License](#license)


# SignupLogin Component

The `SignupLogin` component is responsible for user authentication, including user registration (sign-up) and user login.

## State Management

- The component uses the `useState` hook to manage its state.
- It maintains state for `showSignup` and `showLogin` to control the visibility of the signup and login forms.
- It also maintains state for `signupFormData` and `loginFormData` to store user input.

## Toggle Forms

- The component provides buttons to toggle between the signup and login forms.
- The `toggleSignup` and `toggleLogin` functions are used to control the visibility of these forms.

## Handling Signup

- The `handleSignup` function handles the signup process when the "Sign Up" button is clicked.
- It sends a POST request to the server with the user's registration data (first name, last name, email, password).
- If the registration is successful (response status code 200), it displays an alert with the success message. Otherwise, it displays an error alert.

## Handling Login

- The `handleLogin` function handles the login process when the "Login" button is clicked.
- It sends a POST request to the server with the user's login data (username, password, scope, client ID, and client secret).
- If the login is successful (response status code 200), it displays an alert with the success message. Otherwise, it displays an error alert.

## UseEffect

- The component uses the `useEffect` hook to log a message when the component is mounted.

## Rendering Forms

- Depending on the values of `showSignup` and `showLogin`, the component renders either the signup or login form.

# ProductList Component

The `ProductList` component is responsible for displaying a list of products and allowing users to search for products and add them to the cart.

## State Management

- The component uses the `useState` hook to manage its state.
- It maintains state for `products`, `searchProduct`, and `showCart`.

## Fetching Product Data

- The component uses the `useEffect` hook to fetch product data from an API when it mounts.
- The fetched data is stored in the `products` state.

## Handling Search

- The component provides a search bar input that allows users to filter products by name.
- The `handleSearch` function updates the `searchProduct` state based on user input.

## Displaying Products

- Filtered products are displayed in cards, including product name, image, and an "Add to Cart" button.

## Adding to Cart

- The "Add to Cart" button allows users to add products to their cart.
- The `addToCart` function is called with the selected product when the button is clicked.

## Rendering the Cart

- The component renders the `Cart` component to display the user's cart items.

# Cart Component

The `Cart` component displays the items added to the user's cart.

## State Management

- The component uses the `useState` hook to manage its state for `cartItems`.

## Removing Cart Items

- The component provides a "Remove" button for each cart item.
- The `removeCartItem` function is called when the "Remove" button is clicked, removing the item from the cart.

## Displaying Cart Items

- The component maps through the `cartItems` and displays each item in a list.
- It shows the product image, name, price, and a "Remove" button.

# ProductDetails Component

The `ProductDetails` component displays detailed information about a selected product.

## Routing Parameter

- It uses the `useParams` hook from `react-router-dom` to retrieve the `index` parameter from the route.

## Fetching Product Data

- The component uses the `useEffect` hook to fetch product data based on the `index` parameter.
- The product data is stored in the `product` state.

## Loading State

- While waiting for product data to load, it displays a "Loading..." message.

## Displaying Product Details

- Once the data is available, it displays the product's image, name, description, price, ranking, creation date, and update date.

# Navbar Component

The `Navbar` component displays navigation links and the total number of items in the cart.

## Props

- It receives a `totalItems` prop to display the total number of items in the cart.

## Navigation Links

- The component provides links to the home page, signup, and cart.
- It uses the `Link` component from `react-router-dom` for routing.

## Cart Icon and Total Items

- It displays a shopping cart icon and the `totalItems` in the cart.

# OrderReceipt Component

The `OrderReceipt` component displays a receipt for an order, including shipping address and total amount.

## Props

- It receives an `order` prop containing the order details.

## Displaying Order Details

- It displays the shipping address, including name, address line, city, postal code, and selected county.
- It shows the total order amount.

## Printing Receipt

- The component provides a "Print Receipt" button to trigger the browser's print functionality.

# PaymentForm Component

The `PaymentForm` component allows users to input payment details during the checkout process.

## Props

- It receives an `onNext` prop to handle moving to the next step.

## State Management

- It manages state for `paymentInfo`, including phone number and billing address.

## Handling Input Changes

- The component updates the `paymentInfo` state when input fields change.

## Moving to the Next Step

- It calls the `onNext` function when the "Next" button is clicked, passing the payment information.

# Checkout Component

The `Checkout` component manages the checkout process, including address and payment details.

## Props

- It receives a `cartItems` prop to calculate the total order amount.

## Step Management

- It uses state to manage the current step in the checkout process.

## Handling Address Submission

- It handles the submission of the address form, moving to the payment step.

## Handling Payment Submission

- It handles the submission of the payment form, moving to the order receipt step.

## Calculating Total Amount

- It calculates the total order amount based on the items in the cart.

## Moving Between Steps

- The component provides "Back" and "Next" buttons to move between steps in the checkout process.

# LICENCE
Copyright <YEAR 2023> <COPYRIGHT HOLDER Group 3>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
