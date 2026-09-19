export type UserRole = "admin" | "trainer" | "student";

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  role: UserRole;
}