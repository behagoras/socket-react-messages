export const formatMessage=(username, text)=> {
  return {
    username,
    text,
    time: new Date()
  };
}
