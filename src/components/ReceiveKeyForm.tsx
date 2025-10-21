import { Form } from "react-router";

type ReceiveKeyFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
};

export default function ReceiveKeyForm({
  handleSubmit,
  isPending,
}: ReceiveKeyFormProps) {
  return (
    <Form
      className="flex justify-center flex-col max-w-[400px] m-auto gap-5 mb-6"
      onSubmit={handleSubmit}
    >
      <input
        name="key"
        className="border border-indigo-300 outline-0 px-3 py-1 rounded-xl"
        required
      ></input>
      <button
        disabled={isPending}
        className={`bg-indigo-500 py-1 hover:cursor-pointer flex justify-center items-center gap-3 hover:bg-indigo-800 rounded-xl font-semibold ${
          isPending ? "animate-pulse" : ""
        }`}
      >
        {isPending && (
          <div className="animate-spin h-5 w-5 border-4 border-white-500 rounded-full border-t-transparent inline-block"></div>
        )}
        Find!
      </button>
    </Form>
  );
}
