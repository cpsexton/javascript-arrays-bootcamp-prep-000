var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars2 = chocolateBars.unshift("foo")
  return chocolateBars2
}