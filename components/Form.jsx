import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start ">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share Amazing Qoutes with the world, and let your audience
        know what you think.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Your AI Qoute
          </span>
          <textarea
            value={post.qoute}
            onChange={(e) => setPost({ ...post, qoute: e.target.value })}
            placeholder="Write your qoute  here"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Field of Qoute{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>
        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
