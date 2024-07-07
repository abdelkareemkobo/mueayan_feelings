"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateQoute = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qouteId = searchParams.get("id");

  const [post, setPost] = useState({ qoute: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getQouteDetails = async () => {
      const response = await fetch(`/api/qoute/${qouteId}`);
      const data = await response.json();

      setPost({
        qoute: data.qoute,
        tag: data.tag,
      });
    };

    if (qouteId) getQouteDetails();
  }, [qouteId]);

  const updateQoute = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!qouteId) return alert("Missing QouteId!");

    try {
      const response = await fetch(`/api/qoute/${qouteId}`, {
        method: "PATCH",
        body: JSON.stringify({
          qoute: post.qoute,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateQoute}
    />
  );
};

export default UpdateQoute;
