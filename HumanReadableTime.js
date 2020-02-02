// https://www.codewars.com/kata/52685f7382004e774f0001f7

// Write a function, which takes a non-negative integer (seconds) as input and 
// returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let hours =  Math.floor((seconds / 60) / 60)
  let minutes = Math.floor((seconds - ((hours * 60) * 60))/60)
  let sec = seconds - (((hours * 60) * 60) + (minutes * 60))
  return ("0"+ hours).slice(-2) + ":" + ("0"+ minutes).slice(-2) + ":" + ("0"+ sec).slice(-2);
}
