var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars.unshift("foo")
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, i) {
  chocolateBars = [...chocolateBars, "foo"]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray(chocolateBars, i) {
  chocolateBars.push("foo")
  return chocolateBars
}
function accessElementInArray(chocolateBars, i) {
  return chocolateBars[3];
}