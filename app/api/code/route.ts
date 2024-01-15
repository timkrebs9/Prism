import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from 'openai';
import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limits";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const instructionMessage: OpenAI.Chat.ChatCompletionMessageParam = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanation",
}

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        //console.log("[USERID]", userId);
        //console.log("[BODY]", body);
        //console.log("[CONVERSATION]", messages);

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!openai.apiKey) {
            return new NextResponse("API Key not configured", { status: 401 });
        }
        if (!messages) {
            return new NextResponse("Message is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }

        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages],
        });
        console.log(chatCompletion.choices[0].message);

        if (!isPro) {
            await incrementApiLimit();
        }

        return NextResponse.json(chatCompletion.choices[0].message);

    } catch (error) {
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};