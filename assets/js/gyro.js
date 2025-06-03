const DEGRADATION_RATE = 20;
const ROLL_MULTIPLIER = 0.25;
const ROTATION_TO_TRANSLATION = 0.65; // degrees over pixels

// In degrees
const rotation = {
  yaw: 0,
  pitch: 0,
  roll: 0,
}
let last_degradation_timestamp = null;
let last_motion_timestamp = null;

const degrade = (timestamp) => {
  window.requestAnimationFrame(degrade);
  if (last_degradation_timestamp === null) {
    last_degradation_timestamp = timestamp;
    return;
  }
  const element = document.getElementsByClassName('gyro-transform').item(0);
  element.style.transform = `rotate(${rotation.roll * ROLL_MULTIPLIER}deg) translate(${rotation.yaw / ROTATION_TO_TRANSLATION}px, ${rotation.pitch / ROTATION_TO_TRANSLATION}px)`;

  const time_passed = (timestamp - last_degradation_timestamp) / 1000;
  last_degradation_timestamp = timestamp;

  const percentage_adjustment = 1/(Math.pow(1 + DEGRADATION_RATE, time_passed));
  rotation.yaw *= percentage_adjustment;
  rotation.pitch *= percentage_adjustment;
  rotation.roll *= percentage_adjustment;
};
window.requestAnimationFrame(degrade);

addEventListener('devicemotion', (event) => {
  if (last_motion_timestamp === null) {
    last_motion_timestamp = performance.now();
    return;
  }
  const timestamp = performance.now();
  let time_passed = (timestamp - last_degradation_timestamp) / 1000;
  time_passed = Math.min(0.05, time_passed);
  last_motion_timestamp = timestamp;
  
  if (event.rotationRate.alpha !== null) {
    rotation.pitch += event.rotationRate.alpha * time_passed;
  }
  if (event.rotationRate.beta !== null) {
    rotation.yaw += event.rotationRate.beta * time_passed;
  }
  if (event.rotationRate.gamma !== null) {
    // rotation.roll += event.rotationRate.gamma * time_passed;
  }
});
