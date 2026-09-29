export function ItineraryTimeline({ days }) {
  return (
    <ol className="itinerary-timeline">
      {days.map((day) => (
        <li className="itinerary-timeline__item" key={day.day}>
          <span className="itinerary-timeline__number">{String(day.day).padStart(2, '0')}</span>
          <div className="itinerary-timeline__content">
            {day.title && <h3>{day.title}</h3>}
            <p>{day.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}