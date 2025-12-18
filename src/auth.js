const AUTH_KEY = 'ep_auth_user';
let listeners = [];

export function login(name, email) {
  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  notify(user);
  return user;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
  notify(null);
}

export function getCurrentUser() {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function onAuthChange(cb) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

function notify(u) {
  for (const l of listeners) l(u);
}
