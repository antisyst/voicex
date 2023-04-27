export const SET_TRANSCRIPT = 'SET_TRANSCRIPT';

export function setTranscript(transcript) {
  return {
    type: SET_TRANSCRIPT,
    payload: transcript,
  };
}
