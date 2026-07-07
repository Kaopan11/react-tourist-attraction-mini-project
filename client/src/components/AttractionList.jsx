import AttractionCard from "./AttractionCard";

function AttractionList({ trips, onTagClick }) {
  if (trips.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        ไม่พบสถานที่ท่องเที่ยวที่ค้นหา
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {trips.map((trip) => (
        <AttractionCard key={trip.eid} trip={trip} onTagClick={onTagClick} />
      ))}
    </div>
  );
}

export default AttractionList;
