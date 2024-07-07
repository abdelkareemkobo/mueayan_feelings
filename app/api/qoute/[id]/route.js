import Qoute from "@models/qoute";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const qoute = await Qoute.findById(params.id).populate("creator");
    if (!qoute) return new Response("Qoute not found", { status: 404 });
    return new Response(JSON.stringify(qoute), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all Qoutes", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { qoute, tag } = await request.json();
  try {
    await connectToDB();
    const existingQoute = await Qoute.findById(params.id);
    if (!existingQoute) return new Response("Qoute not found", { status: 404 });
    existingQoute.qoute = qoute;
    existingTag.tag = tag;
    await existingQoute.save();
    return new Response(JSON.stringify(existingQoute), { status: 200 });
  } catch (error) {
    return new Response("Failed to update Qoute", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Qoute.findByIdAndRemove(params.id);
    return new Response("Qoute deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
