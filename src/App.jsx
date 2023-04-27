import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTranscript } from './redux/actions';
import MainLogo from './logo';

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
    <div className='extended-component'>
      <div className='log-content'>
       <MainLogo/>
       <h3>The Better Voice to Text Generator</h3>
       <p><span>Voicex</span> is a modern and user-friendly web application that allows users to easily convert their speech into text. Built with React, the website provides a seamless and responsive user experience, with real-time transcription of the user's speech. We use the Web Speech API to capture the user's speech and convert it into text, and Redux to manage the application state. Our website is designed to be accessible and easy to use, with a clean and intuitive interface that makes voice-to-text technology accessible to everyone.</p>
      </div>
      <button onClick={handleSpeechRecognition} disabled={isListening} className='action-template'>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <p className='placeholder-element'>Say Something ...</p>
      <div className='contentfIg_7i action-new-content GNro_rf8'>
        <p>{props.transcript}</p>
      </div>
      <div className="creator-content">
        <h3>Developed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></h3>
      </div>
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