import Control from '../../components/control/control'
import Header from "../../components/header/header"
import Main from "../../components/main/main"

export default function DataBender() {
  return (
    <div>
      <Header>Data Bender</Header>
      <Main>
        <Control label="clock" led='blue' type="small-button">
          <p>INTERNAL CLOCK</p>
          <p>The Time knob will be a smooth changing value from 16 seconds at the bottom of the knobto 80Hz at the top of the knob.</p>
        </Control>
        <Control label="clock" led='white' type="small-button">
          <p>EXTERNAL CLOCK</p>
          <p>The Time Knob acts as a divide/multiply control with the following changes to the clock:</p>
          <ul>
            <li>/ by 16 (4 bars)</li>
            <li>/ by 8 (2 bars)</li>
            <li>/ by 4 (1 bar)</li>
            <li>/ by 2</li>
            <li>Clock Matches Input</li>
            <li>x 2 (8th Notes)</li>
            <li>x 3 (8th Note Triplets)</li>
            <li>x 4 (16th Notes)</li>
            <li>x 8 (32nd Notes)</li>
          </ul>
          <p>When the knob/CV move into a new division or multiplication, the Clock LED will brieflyilluminate gold.</p>
        </Control>
        <Control label="corrupt" led='blue' type="small-button">
          <p>DECIMATE</p>
          <p>Controls variable amounts of bit-crushing and downsampling.</p>
        </Control>
      </Main>
    </div>
  );
}