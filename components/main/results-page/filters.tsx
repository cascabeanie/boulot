export default function Filters() {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 border rounded-md shadow-lg p-4 sm:p-8 bg-white w-full max-w-md sm:max-w-xl">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold mb-2">Filters</h2>

          <h3 className="text-lg font-medium">Job Type</h3>

          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              value={"true"}
              id="permanent-checkBox"
              name="permanent"
              className="accent-zinc-900 cursor-pointer"
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
              className="accent-zinc-900 cursor-pointer"
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
              className="accent-zinc-900 cursor-pointer"
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
              className="bg-zinc-100 rounded-sm cursor-pointer pl-1"
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
