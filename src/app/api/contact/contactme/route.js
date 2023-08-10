import dbConn from "@/db/dbConfig";
import WillClient from "@/models/contactModel";
import { NextResponse } from "next/server";
import validator from 'validator';

dbConn();

export async function POST(request) {
    try {

        const reqBody = await request.json()
        const { clientName, email, message } = reqBody;


        if (clientName.length <= 0) {
            return NextResponse.json({ success: false, error: "Fill Your name" }, { status: 400 })
        }
        if (email.length <= 0) {
            return NextResponse.json({ success: false, error: "Fill Your email" }, { status: 400 })
        }
        if (message.length <= 0) {
            return NextResponse.json({ success: false, error: "Fill message" }, { status: 400 })
        }
        if (!(validator.isEmail(email))) {
            return NextResponse.json({ success: false, error: "Fill valid email" }, { status: 400 })
        }
        const incomingMsg = new WillClient({
            name: clientName,
            email: email,
            message: message
        })

        const msg = await incomingMsg.save()

        return NextResponse.json({ success: true })

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }



}