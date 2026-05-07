import nookies from "nookies";

export function getAuthorizationToken(ctx = null) {
  const cookies = nookies.get(ctx);
  return cookies.token || null; // token là tên cookie m lưu khi login
}