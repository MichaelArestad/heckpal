import Control from '../../components/control/control'
import ControlCard from '../../components/control/control-card'
import ControlCombo from '../../components/control-combo/control-combo'
import Header from "../../components/header/header"
import Main from "../../components/main/main"

export default function DataBender() {
  return (
    <div>
      <Header>Data Bender</Header>
      <Main>
        <ControlCombo
          label="GLITCH WINDOWING"
          details="details"
          components={[
            <ControlCard key="1-shift-x" label="shift" type="small-button"/>,
            <ControlCard key="2-time-y" label="time" type="knob"/>
          ]}
        >
          <p>Scale an amount of windowing to be applied to the individual stutters.</p>

          <p>When all the way down, there will be hard edges and clicks happen often. When turning this up, the glitches will be fully windowed only reaching full volume for a moment before fading out.</p>
        </ControlCombo>
        <Control label="clock" led='blue' title="Internal Clock" type="small-button">
          <p>The Time knob will be a smooth changing value from 16 seconds at the bottom of the knobto 80Hz at the top of the knob.</p>
        </Control>
        <Control label="clock" led='white' title="External Clock" type="small-button">
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
        <Control label="corrupt" led='blue'title="Decimate" type="small-button">
          <p>Controls variable amounts of bit-crushing and downsampling.</p>
        </Control>
      </Main>
    </div>
  );
}