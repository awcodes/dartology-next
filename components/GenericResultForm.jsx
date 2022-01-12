import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export default function GenericResultForm() {
  const results = [];
  return (
    <div>
      <form>
        <label htmlFor="result" className="block mb-1 text-sm">
          Record your result
        </label>
        <div className="flex">
          <input id="result" name="result" type="text" pattern="[0-9]*" minLength="1" className="w-full bg-gray-800 rounded-l" />
          <button type="submit" className="w-64 rounded-l-none rounded-r btn secondary">
            Submit
          </button>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-sm text-green-500">
          <CheckCircleIcon className="w-5 h-5" />
          <p>Success Message</p>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-sm text-red-500">
          <XCircleIcon className="w-5 h-5" />
          <p>Error Message</p>
        </div>
      </form>

      <h2 className="mt-6">Latest Results</h2>
      {results.length > 0 ? (
        <ul className="divide-y divide-gray-900">
          {results.map((result) => (
            <li className="flex items-center justify-between py-1">
              <span>Result date</span>
              <span>Result</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Results for this routine. Why not practice this one now.</p>
      )}
    </div>
  );
}
