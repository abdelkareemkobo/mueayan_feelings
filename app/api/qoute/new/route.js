import Qoute from "@models/qoute";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, qoute, tag } = await request.json();
  try {
    await connectToDB();
    const newQoute = new Qoute({ creator: userId, qoute, tag });
    await newQoute.save();
    return new Response(JSON.stringify(newQoute), { status: 200 });
  } catch (error) {
    return new Response("Failed to create a new Qoute", { status: 500 });
  }
};
