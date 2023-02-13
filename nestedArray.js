function panggilNestedArray(value){
    var owner = Array ();

    owner[0] = Array (value[0][0], value[1][0], value[2][0])
    owner[1] = Array (value[0][1], value[1][1], value[2][1])
    owner[2] = Array (value[0][2], value[1][2], value[2][2])
    owner[3] = Array (value[0][3], value[1][3], value[2][3])
    
    console.log(owner);
}
   
var nestedArray = [
  [1,2,3,4],
  ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
  ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]
   
panggilNestedArray(nestedArray)