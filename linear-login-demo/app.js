import { login } from "./auth.js";

const form = document.querySelector("#login-form");
const button = document.querySelector("#login-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  console.log("[analytics]", "login_button_click", {});
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  button.disabled = true;
  message.textContent = "登录中…";

  try {
    const session = await login(email, password);
    sessionStorage.setItem("demo_session", JSON.stringify(session));
    message.textContent = `登录成功，欢迎 ${session.displayName}`;
  } catch (error) {
    message.textContent = error instanceof Error ? error.message : "登录失败";
  } finally {
    button.disabled = false;
  }
});
