import { Component } from "react";
import Modal from './Modal.js';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main className="container__Modal">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Combining Viking pressure and temperature data with Mars Orbital Laser Altimeter topography data, we have computed the fraction of the martian year during which pressure and temperature allow for liquid water to be stable on the martian surface. We find that liquid water would be stable within the Hellas and Argyre basin and over the northern lowlands equatorward of about 40°. The location with the maximum period of stable conditions for liquid water is in the southeastern portion of Utopia Planitia, where 34% of the year liquid water would be stable if it were present. Locations of stability appear to correlate with the distribution of valley networks.</p>
        </Modal>
        <button className="container__Modal-OpenButton" type="button" onClick={this.showModal}>
          Go
        </button>
      </main>
    );
}
}
export default Dashboard;