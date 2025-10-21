import CategorySelector from "../components/CategorySelector";

export default function SelectCategory() {
  return (
    <>
      <h2 className="mt-6 text-center font-bold text-xl md:text-2xl">
        Please, select category you are interested in
      </h2>
      <CategorySelector />
    </>
  );
}
