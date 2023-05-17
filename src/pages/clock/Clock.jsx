import Navbar from "../../components/Nav";

function Clock() {
  return (
    <div>
      <Navbar />
      <h1>Relogio Digital</h1>
      <div className="clock">
        <div>
            <span id="horas">00</span>
            <span className="time">Horas</span>
        </div>
        <div>
            <span id="minutos">00</span>
            <span className="time">Minutos</span>
        </div>
        <div>
            <span id="segundos">00</span>
            <span className="time">Segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Clock;