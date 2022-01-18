const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"]

function searchName(arr, query) {
    return arr.filter(function(a) {
      return a.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
  name.splice(5)
  
  console.log(searchName(name, "an"))