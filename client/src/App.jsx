import { useEffect, useState } from "react";
import AttractionList from "./components/AttractionList";
import SearchInput from "./components/SearchInput";
import { fetchAttractions } from "./services/api";

function App() {
  // State เก็บคำค้นหาที่ผู้ใช้พิมพ์ในช่อง SearchInput
  const [keyword, setKeyword] = useState("");

  // State เก็บรายการสถานที่ท่องเที่ยวที่ได้จาก Server
  const [trips, setTrips] = useState([]);

  // ดึงข้อมูลใหม่ทุกครั้งที่ keyword เปลี่ยน พร้อม Debounce 300ms
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const result = await fetchAttractions(keyword);
        setTrips(result.data);
      } catch {
        setTrips([]);
      }
    }, 300);

    // ยกเลิก timer เก่าเมื่อ keyword เปลี่ยนก่อนครบ 300ms
    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            ค้นหาสถานที่ท่องเที่ยว
          </h1>
          <p className="mt-2 text-gray-500">
            ค้นหาและสำรวจสถานที่ท่องเที่ยวที่น่าสนใจ
          </p>
        </header>

        <SearchInput
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <AttractionList trips={trips} />
      </main>
    </div>
  );
}

export default App;
