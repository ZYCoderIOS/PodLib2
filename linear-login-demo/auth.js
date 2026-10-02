const DEMO_USER = {
  email: "demo@example.com",
  password: "123456",
  displayName: "Demo User",
};

export async function login(email, password) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (!email || !password) {
    throw new Error("请输入邮箱和密码");
  }

  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    throw new Error("邮箱或密码错误");
  }

  return {
    userId: "demo-user-001",
    displayName: DEMO_USER.displayName,
    token: "demo-token",
  };
}
