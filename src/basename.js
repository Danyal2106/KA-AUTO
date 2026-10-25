export function routerBasename() {
  const configured = import.meta.env.BASE_URL ?? "/";
  if (configured && configured !== "./" && configured !== "." && configured !== "/") {
    return configured.replace(/\/$/, "") || "/";
  }
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path === "/KA-AUTO" || path.startsWith("/KA-AUTO/")) return "/KA-AUTO";
  }
  return "/";
}
