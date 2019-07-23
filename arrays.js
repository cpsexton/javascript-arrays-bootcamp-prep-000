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
}
function destructivelyAddElementToEndOfArray(chocolateBars, i) {
  chocolateBars.push("foo")
  return chocolateBars
}