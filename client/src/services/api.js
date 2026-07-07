import axios from "axios";

// ฟังก์ชันดึงข้อมูลสถานที่ท่องเที่ยวจาก Server ตาม keyword ที่ค้นหา
export async function fetchAttractions(keyword) {
  try {
    // ส่งคำขอ GET ไปยัง API พร้อมส่ง keyword เป็น query parameter
    const response = await axios.get("http://localhost:4001/trips", {
      params: { keywords: keyword },
    });

    // คืนค่าเฉพาะข้อมูลที่ Server ตอบกลับมา
    return response.data;
  } catch (error) {
    // จัดการกรณีที่เกิดข้อผิดพลาดระหว่างเรียก API
    console.error("ไม่สามารถดึงข้อมูลสถานที่ท่องเที่ยวได้:", error);
    throw error;
  }
}
