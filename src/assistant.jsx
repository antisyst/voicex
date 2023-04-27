import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTranscript } from './actions';

function VoiceAssistantApp(props) {
  const [isListening, setIsListening] = useState(false);

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      props.setTranscript(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div>
      <h1>Voice Assistant App</h1>
      <button onClick={handleSpeechRecognition} disabled={isListening}>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <p>{props.transcript}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transcript: state.transcript,
  };
};

const mapDispatchToProps = {
  setTranscript,
};

export default connect(mapStateToProps, mapDispatchToProps)(VoiceAssistantApp);