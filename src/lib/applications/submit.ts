import type { ApplicationPayload } from "@/types";

const APPLICATIONS_STORAGE_KEY = "fde-applications";

/**
 * MVP: persist locally + log. Replace with POST /api/applications + Prisma.
 */
export async function submitApplication(
  payload: ApplicationPayload
): Promise<{ ok: true; id: string }> {
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `app-${Date.now()}`;

  const record = { ...payload, id };

  if (typeof window !== "undefined") {
    const existing = JSON.parse(
      localStorage.getItem(APPLICATIONS_STORAGE_KEY) ?? "[]"
    ) as unknown[];
    localStorage.setItem(
      APPLICATIONS_STORAGE_KEY,
      JSON.stringify([...existing, record])
    );
  }

  // TODO: await fetch("/api/applications", { method: "POST", body: JSON.stringify(record) })
  console.info("[FDE Brasil] Application submitted (MVP mock):", record);

  return { ok: true, id };
}
