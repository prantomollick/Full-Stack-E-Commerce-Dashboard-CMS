import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { storeId: string } }
) {
  try {
  } catch (error) {
    console.log("[STORE_POST]", error);
  }
}
