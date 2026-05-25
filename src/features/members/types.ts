/** TODO: Members area — Clerk auth + Member tier in Prisma */

export type MemberTier = "free" | "core" | "vip";

export interface MemberProfile {
  id: string;
  email: string;
  name?: string;
  tier: MemberTier;
}
