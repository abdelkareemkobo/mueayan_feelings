import Qoute from "@models/qoute";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const qoutes = await Qoute.find({ creator: params.id }).populate("creator");
    return new Response(JSON.stringify(qoutes), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all qotues", { status: 500 });
  }
};
