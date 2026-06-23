import { db } from "@/server/db";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        console.log("Clerk webhook event received:", body);
        
        const { data, type } = body;
        console.log("Event type:", type);
        console.log("Data payload:", JSON.stringify(data, null, 2));

        if (!data) {
            return new Response('No data field found in webhook payload', { status: 400 });
        }

        let emailAddress = data.email_addresses?.[0]?.email_address;
        if (!emailAddress) {
            if (process.env.NODE_ENV === "development") {
                console.warn("⚠️ No email address found in the payload. Using a fallback email for testing.");
                emailAddress = data.primary_email_address_id 
                    ? `${data.primary_email_address_id}@example.com` 
                    : `${data.id || 'unknown'}@example.com`;
            } else {
                console.error("❌ Webhook failed: No email address found in the payload.");
                return new Response('No email address found', { status: 400 });
            }
        }

        const firstName = data.first_name || "";
        const lastName = data.last_name || "";
        const imageUrl = data.image_url || "";
        const id = data.id;

        if (!id) {
            console.error("❌ Webhook failed: No user ID found in the payload.");
            return new Response('No user ID found', { status: 400 });
        }

        console.log(`Upserting user ${id} (${emailAddress}) into database...`);

        const user = await db.user.upsert({
            where: { id },
            update: { emailAddress, firstName, lastName, imageUrl },
            create: { id, emailAddress, firstName, lastName, imageUrl },
        });

        console.log("✅ User upserted successfully in database:", user);

        return new Response('Webhook received and processed', { status: 200 });
    } catch (error) {
        console.error("❌ Error processing webhook:", error);
        return new Response('Internal Server Error', { status: 500 });
    }
}