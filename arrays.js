var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray() {
  chocolateBars2 = ["foo", ...chocolateBars]
  return chocolateBars2
}