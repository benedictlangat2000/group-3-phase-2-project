import React, { useState } from "react";

function SignupLogin() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [signUpResponse, setSignUpResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/signUp", // Change to the correct URL for your API endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setSignUpResponse(data);
    } catch (error) {
      console.error(error);
      setSignUpResponse({ error: "An error occurred while signing up." });
    }
  };

  return (
    <>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {signUpResponse && signUpResponse.error && (
        <p>{signUpResponse.error}</p>
      )}
    </>
  );
}

export default SignupLogin;
