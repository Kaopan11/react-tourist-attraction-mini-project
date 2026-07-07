import { useState } from "react";

function AttractionCard({ trip, onTagClick }) {
  // State เก็บสถานะว่าคัดลอกลิงก์สำเร็จแล้วหรือยัง (เริ่มต้นเป็น false)
  const [copied, setCopied] = useState(false);

  // ฟังก์ชันคัดลอกลิงก์สถานที่ท่องเที่ยวไปยัง Clipboard ของผู้ใช้
  async function handleCopyLink() {
    // นำ URL ของสถานที่ท่องเที่ยวไปใส่ใน Clipboard
    await navigator.clipboard.writeText(trip.url);

    // เปลี่ยนสถานะเป็น true เพื่อแสดง Feedback บนปุ่ม
    setCopied(true);

    // หลังจาก 2 วินาที รีเซ็ตสถานะกลับเป็น false ให้ปุ่มกลับสู่หน้าตาเดิม
    setTimeout(() => setCopied(false), 2000);
  }

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

        {/* 4. ปุ่ม 'อ่านต่อ' และปุ่มคัดลอกลิงก์ วางคู่กันในแนวนอน */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-sky-600"
          >
            อ่านต่อ
          </a>

          {/* ปุ่มคัดลอกลิงก์ — กดแล้วเรียก handleCopyLink เพื่อคัดลอก trip.url */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-white transition ${
              copied
                ? "bg-green-500 hover:bg-green-600"
                : "bg-sky-500 hover:bg-sky-600"
            }`}
          >
            {copied ? (
              "คัดลอกแล้ว! ✓"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                คัดลอกลิงก์
              </>
            )}
          </button>
        </div>

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
