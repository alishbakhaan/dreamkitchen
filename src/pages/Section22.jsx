import Button from "../components/Button";

export default function Section22() {
  return (
    <div className="bg-primary">
      <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between bg-section20">
        <h1 className="text-white text-5xl font-bold max-sm:text-3xl max-md:text-4xl">
          Thank you for reaching out, one of our specialized feasibility- discovery - design representatives will reach out to discuss setting up your individualized F-D-A process...
        </h1>

        <div className=" mt-6 bg-black max-w-screen-lg w-full mx-auto p-4 text-white text-3xl text-center max-md:text-xl max-sm:text-lg">
          <p>A F-D-A Process</p>
          <p>(Feasibility- Discovery/Design Agreement) can range between $300-800 depending on your needs our Specialist will help determine the appropriate plan for you</p>
        </div>

        <Button backLink="/sec21" nextLink="/sec23" />
      </main>
    </div>
  )
}