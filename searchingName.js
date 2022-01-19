const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"]

function searchName(a,cb){
  console.log(a)
  return cb(name)  
}

function cari(name){
  const fin = name.filter(function(arr){
    return arr.toLowerCase().includes("an")
  })
    fin.splice(3)
    return fin
}

console.log(searchName("OUTPUT : ", cari))