// Name 1
const name1 = prompt("Who is your favorite actor?", "Margot Robbie");
console.log(name1.length)

// Name 2
const name2 = prompt("Who is your favorite athlete?", "Serena Williams");
console.log(name2.length)

// Name 3
const name3 = prompt("Who is your favorite author", "J.K. Rowling");
console.log(name3.length)

// Result
function longestName(name) {
    let max = name[0].length;
    name.map(v => max = Math.max(max, v.length));
    result = name.filter(v => v.length == max);
    return result;
  }
  console.log(longestName([name1, name2, name3]) + " has the longest name.");