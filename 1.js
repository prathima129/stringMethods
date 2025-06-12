//String Methods
/* JavaScript string are primitive datatype 
that is used to work with texts

*There are 3 ways to use strings

1.Single Quotation ==> ''
2.Double Quotation ==> ""
3.Template Literals ==> ``
*/


let a='Prathima'
let b="Prathima Shrestha"
let c=`Shrestha`
console.log(a,b,c)
console.log(a[3])
console.log(b[16])
console.log(c[7])

console.log(b.length)

/*In JS it is case sensitive where
a is not equal to A
C id=s not equal to c
*/
console.log("c" == "c")
console.log("c" == "C")

/*In JS to add new lines in strings by using \n  
*/
console.log("Iam\nPrathima\nShrestha")

//First String Method
//1.charAt

let college="Global"
console.log(college.charAt(0))
console.log(college.charAt(1))
console.log(college.charAt(2))
console.log(college.charAt(3))
console.log(college.charAt(4))
console.log(college.charAt(5))

//charAt takes index value and gives string element of that Index

//2.indexOf

let fname="College"
console.log(fname.indexOf("C"))
console.log(fname.indexOf("o"))
console.log(fname.indexOf("l"))
console.log(fname.indexOf("l"))
console.log(fname.indexOf("e"))
console.log(fname.indexOf("g"))
console.log(fname.indexOf("e"))
//let us also take a letter which is not there in string 
console.log(fname.indexOf("p")) //the result shows as -1

//3.concat

let n1="Global"
let n2=" College"
let n3=n1.concat(n2);
console.log(n3)
//Or there is one mpre method to merge thwm that is
console.log(n1.concat(n2))

//4.includes

let msg="JavaScript is fun to use."
console.log(msg.includes("Java"))
console.log(msg.includes("prathima"))

//5.lastindexOf

let m1="Prathima"
console.log(m1.indexOf("a"))
console.log(m1.lastIndexOf("a"))

let m2="Global"
console.log(m2.indexOf("l"))
console.log(m2.lastIndexOf("l"))

//6.length

let lang="JAVA"
console.log(lang.length) //length starts from one(1) not like index which starts from 0 huh

//7.repeat()

let m3="Hii "
console.log(m3.repeat(2))
console.log(m3.repeat(0))

//8.replace()

let m4="prathima Shrestha"
console.log(m4.replace("p","P"))

//9.replaceAll()

let m5="prathima Shrestha"
console.log(m5.replaceAll("a","A"))

//10.startsWith()
//11.endsWith()

let m6="Prathima Shrestha is a Student"
console.log(m6.startsWith("prathima"))
console.log(m6.startsWith("Prathima"))

console.log(m6.endsWith("student"))
console.log(m6.endsWith("Student"))

//12.toLoweCase()
//13.toUpperCase()

let m7="PRATHIMA"
console.log(m7.toLowerCase())

let m8="prathima"
console.log(m7.toUpperCase())

/*let m9="Prathima"
console.log(m9.toLowerCase(0))

let m10="prathima"
console.log(m10.toUpperCase(5))*/

//14.trim() 

let m11="       Hello Global      "
console.log(m11.trim())

//15.slice(index,length)

let m12="Prathima"
/*index starts from 0123
length starts from 1234*/

console.log(m12.slice(2,4))
console.log(m12.slice(2,3))

//16.split()

let m13="Global-College-Hyderabad"
//["Global","College","Hyderabad"]  (coverting from string to array)
console.log(m13.split("-"))

//let us try with space

let m14="Prathima Global BTech"
console.log(m14.split(" "))