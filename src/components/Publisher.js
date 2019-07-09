import React from 'react';
import { OTPublisher } from 'opentok-react';
import RadioButtons from './RadioButtons';
import CheckBox from './CheckBox';

class Publisher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'camera'
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  setVideoSource = (videoSource) => {
    this.setState({ videoSource });
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }

  render() {
    return (
      <div className="publisher">
        Publisher

        {this.state.error ? <div id="error">{this.state.error}</div> : null}

        <OTPublisher
          properties={{
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
          }}
          onError={this.onError}
        />

        <RadioButtons
          buttons={[
            {
              label: 'Use Camera',
              value: 'camera'
            },
            {
              label: 'Use Screen',
              value: 'screen'
            }
          ]}
          initialChecked={this.state.videoSource}
          onChange={this.setVideoSource}
        />

        <CheckBox
          label="Publish Audio"
          initialChecked={this.state.audio}
          onChange={this.setAudio}
        />

        <CheckBox
          label="Publish Video"
          initialChecked={this.state.video}
          onChange={this.setVideo}
        />

      </div>
    );
  }
}
export default Publisher;
