/*
 * 
 * https://twitter.com/settings/your_twitter_data/twitter_interests 
 * 
 * Go to the inspector and run this code and it should untick all the ticked boxes
 * in the list. You can change the interval to less than 650ms. You need a delay
 * or the twitter API thinks you're trying to overload it.
 * 
 */
var checkboxes = [];
// we only really want to find those that are checked/ticked
// so instead of looping over all of them (with an interval)
// only loop over the checked ones, and put them into
// the checkboxes array
document.querySelectorAll('input[type="checkbox"]').forEach((c) => {
  if(c.checked) { 
    checkboxes[checkboxes.length] = c; 
  }
});
var i = 0;

var loopId = setInterval(() => {
  var e = checkboxes[i++];
  if(i % 10 == 0) { console.log("Running... (" + i + ")")}
  if(e !== undefined) {
    if(e.checked) {
      console.log(e);
      e.parentElement.click(); 
    }
  } else {
    clearInterval(loopId);
  }
}, 3000);