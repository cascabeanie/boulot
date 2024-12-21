export default function Filters() {
  return (
    <>
      <div className="flex w-full max-w-md flex-col justify-center gap-4 rounded-md border bg-white p-4 shadow-lg sm:max-w-xl sm:p-8">
        <div className="flex flex-col gap-1">
          <h2 className="mb-2 text-xl font-bold">Filters</h2>

          <h3 className="text-lg font-medium">Job Type</h3>

          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              value={"true"}
              id="permanent-checkBox"
              name="permanent"
              className="cursor-pointer accent-zinc-900"
            />
            <label
              htmlFor="permanent-checkBox"
              className="text-sm text-zinc-900"
            >
              Permanent position
            </label>
          </span>

          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              value={"true"}
              id="part-time-checkBox"
              name="partTime"
              className="cursor-pointer accent-zinc-900"
            />
            <label
              htmlFor="part-time-checkBox"
              className="text-sm text-zinc-900"
            >
              Part time position
            </label>
          </span>

          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              value={"true"}
              id="temp-checkBox"
              name="temp"
              className="cursor-pointer accent-zinc-900"
            />
            <label htmlFor="temp-checkBox" className="text-sm text-zinc-900">
              Temp position
            </label>
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">Salary</h3>

          <span className="flex items-center gap-2">
            <select
              name="minimumSalary"
              id="min-salary"
              className="cursor-pointer rounded-sm bg-zinc-100 pl-1"
            >
              <option value="">Any amount</option>
              <option value="20000">£20,000+</option>
              <option value="25000">£25,000+</option>
              <option value="30000">£30,000+</option>
              <option value="30000">£35,000+</option>
              <option value="40000">£40,000+</option>
              <option value="50000">£50,000+</option>
            </select>

            <label htmlFor="min-salary" className="text-sm text-zinc-900">
              Starting Salary
            </label>
          </span>
        </div>
      </div>
    </>
  );
}
