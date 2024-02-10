export const copy2Clipboard = (
  text: string,
  callback?: (state: boolean) => void,
) => {
  navigator.clipboard.writeText(text)
    .then(() => {
    if (callback) {
        callback(true);
    }

    setTimeout(() => {
        if (callback) {
        callback(false);
        }
    }, 5000);
    })
    .catch(console.error);
};
  