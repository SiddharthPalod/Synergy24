import { useParams } from 'react-router-dom';

const EventPage = () => {
  let { event_day, event } = useParams();
  return (
    <div>
      {event_day} - {event}
    </div>
  );
}

export default EventPage;