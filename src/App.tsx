import { Calendar } from "./components/Calendar";
import { EventsProvider } from "./context/Events";

const App = () => {
  return (
    <EventsProvider>
      <Calendar />
    </EventsProvider>
  );
};

export default App;
