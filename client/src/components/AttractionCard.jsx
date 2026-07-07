function AttractionCard({ trip, onTagClick }) {
  // 3. ตัด Description ให้ยาวไม่เกิน 100 ตัวอักษร แล้วต่อท้ายด้วย '...'
  const shortDescription =
    trip.description.length > 100
      ? `${trip.description.slice(0, 100)}...`
      : trip.description;

  // 1. แยกรูปใหญ่ 1 รูป และรูปเล็ก 3 รูปที่เหลือ
  const [mainPhoto, ...thumbnailPhotos] = trip.photos;

  return (
    <article className="flex flex-col gap-6 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:flex-row">
      {/* 1. ส่วนแสดงรูปภาพ — รูปใหญ่ด้านบน และรูปเล็ก 3 รูปด้านล่าง */}
      <div className="w-full shrink-0 md:w-72">
        <img
          src={mainPhoto}
          alt={trip.title}
          className="h-52 w-full rounded-xl object-cover"
        />

        <div className="mt-2 grid grid-cols-3 gap-2">
          {thumbnailPhotos.slice(0, 3).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${trip.title} ${index + 2}`}
              className="h-20 w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {/* 2. Title เป็นลิงก์ กดแล้วเปิดแท็บใหม่ไปที่ trip.url */}
        <a
          href={trip.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-gray-900 transition hover:text-sky-600"
        >
          {trip.title}
        </a>

        {/* 3. แสดง Description ที่ถูกตัดความยาวแล้ว */}
        <p className="text-sm leading-relaxed text-gray-600">
          {shortDescription}
        </p>

        {/* 4. ปุ่ม 'อ่านต่อ' สีฟ้า กดแล้วเปิดแท็บใหม่ไปที่ trip.url */}
        <a
          href={trip.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-sky-600"
        >
          อ่านต่อ
        </a>

        {/* 5. แสดงหมวดหมู่ (Tags) โดยวนลูปจาก trip.tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {trip.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              // เมื่อคลิก Tag ส่งชื่อหมวดหมู่กลับไปยัง handleTagClick ใน App.jsx
              onClick={() => onTagClick(tag)}
              className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 transition hover:bg-slate-200 hover:underline"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default AttractionCard;
