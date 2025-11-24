import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, method, type, message } = body;

        // Server-side validation
        if (!name || !email) {
            return NextResponse.json(
                { message: "Name and email are required." },
                { status: 400 }
            );
        }

        // Mock processing (e.g., sending email via Resend/SendGrid would go here)
        console.log("Contact form submission:", { name, email, phone, method, type, message });

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { message: "Internal server error." },
            { status: 500 }
        );
    }
}
