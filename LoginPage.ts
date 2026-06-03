//Vanilla js

// src/login.ts


interface LoginForm {
  username: string;
  password: string;
}

class AuthService {
  static async login(form: LoginForm): Promise<boolean> {
    await new Promise((res) => setTimeout(res, 500));
    return form.username === "admin" && form.password === "password123";
  }
}

function handleLogin(event: Event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const messageBox = document.getElementById("message") as HTMLDivElement;

  const form: LoginForm = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  if (!form.username || !form.password) {
    messageBox.textContent = "Please enter both username and password.";
    messageBox.style.color = "red";
    return;
  }


  AuthService.login(form)
    .then((success) => {
      if (success) {
        messageBox.textContent = "Login successful!";
        messageBox.style.color = "green";
        // Redirect or load dashboard
      } else {
        messageBox.textContent = "Invalid username or password.";
        messageBox.style.color = "red";
      }
    })
    .catch((err) => {
      console.error(err);
      messageBox.textContent = "An error occurred. Please try again.";
      messageBox.style.color = "red";
    });
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm") as HTMLFormElement;
  form.addEventListener("submit", handleLogin);
});
