import '../App.css';
import LeftMenu from '../components/LeftMenu';
import Header from '../components/Header';
import IslamicEvent from '../components/IslamicEvent'



function EventPage() {
  return (
      <div className="App">
        <Header />
        <div className="content">
          <LeftMenu />
          <IslamicEvent />
        </div>
      </div>

  );
}

export default EventPage;



