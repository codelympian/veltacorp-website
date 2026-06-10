import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Sanity calls this webhook whenever content is published, so edits appear on
 * the live site within seconds. Configure in Sanity:
 *   Manage → API → Webhooks → URL = https://<site>/api/revalidate
 *   Secret = SANITY_REVALIDATE_SECRET (same value as the env var)
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }
}
