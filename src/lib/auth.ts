import { createAuthClient } from "@neondatabase/neon-js/auth";

const client = createAuthClient(import.meta.env.VITE_NEON_AUTH_URL);

export const authClient = client;

export async function signOut() {
  await client.signOut();
}