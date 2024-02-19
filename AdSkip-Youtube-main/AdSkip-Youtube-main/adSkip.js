const click = (clazz) => {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
    console.log('You Skipped add like a boss');
  }
};

setInterval(() => {
  click('ytp-ad-skip-button-text');
  click('ytp-ad-overlay-close-button');
}, 300);
console.log('You Skipped add like a boss');
