//include command | ex: include("google.com")

function include(url) {
fetch(url).then((res) => res.text().then((t) => eval(t)))
}

//run command | ex: runCode("code")

function runCode(code) {
code => res.text().then((t) => eval(t))
}

//document.get easier
getElementById = document.getElementById;
getElementsByClassName = document.getElementsByClassName;
getElementsByName = document.getElementsByName;
getElementsByTagName = document.getElementsByTagName;
getElementsByTagNameNS = document.getElementsByTagNameNS;


function cycle(array, delay, callback) {
  let i = 0
  const interval = setInterval(() => callback(interval, array[(i++) % (array.length)]), delay)
}


// Usage Examples:

// Prints every element from the array with a delay of 1 second, cycling through
cycle([1,2,3,4,5], 1000, (_, element) => {
  console.log(element)
})

// Prints each element from the array with a delay of 3 seconds, cycling through, clearing the interval when the value 5 is found
cycle([1,2,3,4,5], 3000, (intervalID, element) => {
  if (element === 5) clearInterval(intervalID)
  console.log(element)
})
