/** TODO: Forum — consider Discourse embed or custom threads in Supabase */

export interface ForumThread {
  id: string;
  title: string;
  authorId: string;
  createdAt: string;
  replyCount: number;
}
