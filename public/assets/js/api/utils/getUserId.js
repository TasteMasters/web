export function getUserId() {
  let token = document.cookie
    .split(";")
    .find((cookie) => cookie.includes("token"));

  if (!token) {
    return null;
  }

  token = token.split("=")[1];

  const [, payload] = token.split(".");

  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload).id;
}
