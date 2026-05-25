import type { JobListing } from "@/types";

/** TODO: Job Board — fetch from DB or external feed (e.g. Remotive API) */
export type { JobListing };

export interface JobBoardFilters {
  remote?: boolean;
  role?: string;
}
