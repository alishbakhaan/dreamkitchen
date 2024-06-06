import Button from "../components/Button";

export default function Section21() {
  return (
    <div className="bg-primary">
      <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between bg-section20">
        <h1 className="text-white text-5xl font-bold max-sm:text-3xl max-md:text-4xl">
          A few more questions to help us better understand details about your project...
        </h1>

        <div className=" mt-6 flex-1 bg-black max-w-screen-lg w-full mx-auto grid grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="" className="text-white text-lg font-semibold">Time frame:</label>
            <input type="text" name="" id="" className="bg-white px-4 py-2" />
          </div>
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="" className="text-white text-lg font-semibold">Budget:</label>
            <input type="text" name="" id="" className="bg-white px-4 py-2" />
          </div>
          <div className="flex gap-2 items-center justify-between col-span-full">
            <label htmlFor="" className="text-white text-lg font-semibold self-start">Other</label>
            <textarea name="" id="" rows="10" className="flex-1 px-4 py-2" placeholder="Please share any other information you believe is relevant or important or that you would like us to know:" />
          </div>
        </div>

        <Button backLink="/sec20" nextLink="/sec22" />
      </main>
    </div>
  )
}