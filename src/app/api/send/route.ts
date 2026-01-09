export const runtime = "nodejs";

export async function POST() {
  return new Response(
    JSON.stringify({ success: true, message: "Form devre dışı" }),
    { status: 200 }
  );
}
