function SearchInput({ value, onChange }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </span>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="ค้นหาสถานที่ท่องเที่ยว..."
        className="w-full rounded-full border border-gray-200 bg-white py-3 pr-4 pl-12 text-gray-800 shadow-sm transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100 focus:outline-none placeholder:text-gray-400"
      />
    </div>
  );
}

export default SearchInput;
