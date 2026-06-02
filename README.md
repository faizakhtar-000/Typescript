# Typescript

## Superset of JavaScript 


##By Faiz Akhtar


This repo comprises of all the resourse present in the internet.


console.log("Hello World");


let nim = 10;
console.log(nim)


//Function declaration 
function printf(){
     console.log("Hello");
}
// lexical scope 





// Block variable 



//Console.log(2+"2");


##colour changer

'''
console.log("Faiz");
'''






Code for signup page
```import React, { useState } from "react";
import axios from "axios";

// Define the shape of our form data
interface SignUpFormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<SignUpFormState>>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: Partial<SignUpFormState> = {};

    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccessMessage("");
    try {
      // Replace with your backend API endpoint
      const response = await axios.post("http://localhost:8080/api/signup", formData);
      setSuccessMessage("Account created successfully!");
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ email: "Signup failed. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
        />
        {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}

        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default SignUp;
```
