import Control from '../../components/control/control'
import ControlCard from '../../components/control/control-card'
import ControlCombo from '../../components/control-combo/control-combo'
import ControlGroup from '../../components/control-group/control-group'
import LED from '../../components/led/led'
import Header from "../../components/header/header"
import Main from "../../components/main/main"

export default function DataBender() {
  return (
    <div>
      <Header>Data Bender</Header>
      <Main>
        <ControlGroup>
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
        </ControlGroup>
        <ControlGroup>
          <Control label="corrupt" led='blue' title="Decimate" type="small-button">
            <p>Controls variable amounts of bit-crushing and downsampling.</p>
          </Control>
          <Control label="corrupt" led='green' title="Dropout" type="small-button">
            <p>Controls variable amounts of bit-crushing and downsampling.</p>
          </Control>
          <Control label="corrupt" led='yellow' title="Destroy" type="small-button">
            <p>Controls variable amounts of bit-crushing and downsampling.</p>
          </Control>
        </ControlGroup>
        <Control label="shift" title="Store Settings" type="small-button">
          <p>Settings are stored whenever SHIFT is pressed.</p>
        </Control>
        <ControlCombo
          label="GLITCH WINDOWING"
          components={[
            <ControlCard key="1-shift" label="shift" type="small-button"/>,
            <ControlCard key="2-time" label="time" type="knob"/>
          ]}
        >
          <p>Scale an amount of windowing to be applied to the individual stutters.</p>

          <p>When all the way down, there will be hard edges and clicks happen often. When turning this up, the glitches will be fully windowed only reaching full volume for a moment before fading out.</p>

          <p>While holding SHIFT, the SHIFT LED will indicate the amount of windowing:</p>

          <ul>
            <li><LED color="blue"/>No windowing applied.</li>
            <li><LED color="off"/>Default minimal windowing is applied</li>
          </ul>

          <p>Beyond that, the LED will indicate from dim to bright white the amount of windowing applied.</p>

          <p>The Restore Settings action will reset this to the default amount of windowing.</p>
        </ControlCombo>
        <ControlCombo
          label="Stereo Behavior"
          components={[
            <ControlCard key="1-shift" label="shift" type="small-button"/>,
            <ControlCard key="2-bend" label="bend" type="small-button"/>
          ]}
        >
          <p>TBD.</p>
        </ControlCombo>
        <ControlCombo
          label="Restore Settings"
          components={[
            <ControlCard key="1-shift" label="shift" type="small-button"/>,
            <ControlCard key="2-bend" label="break" type="small-button"/>
          ]}
        >
          <p>TBD.</p>
        </ControlCombo>
      </Main>
    </div>
  );
}