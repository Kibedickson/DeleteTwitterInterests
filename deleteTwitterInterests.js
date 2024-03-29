let checkboxes = [];
// we only really want to find those that are checked/ticked
// so instead of looping over all of them (with an interval)
// only loop over the checked ones, and put them into
// the checkboxes array
document.querySelectorAll('input[type="checkbox"]').forEach((c) => {
  if(c.checked) { 
    checkboxes[checkboxes.length] = c; 
  }
});
let i = 0;

let loopId = setInterval(() => {
  let e = checkboxes[i++];
  if(i % 10 == 0) { console.log("Running... (" + i + ")")}
  if(e !== undefined) {
    if(e.checked) {
      console.log(e);
      e.parentElement.click(); 
    }
  } else {
    clearInterval(loopId);
  }
}, 7000);
