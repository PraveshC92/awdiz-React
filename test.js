// // let array1 = ["a", "b", "c"];
// // let array2 = ["d", "e", "f"];
// // let array3 = array1.concat(array2); // It is used to merge two or more arrays

// // console.log(array3);

// // let iterator1 = array1.entries(); //it returns the new array iterator object which containes the key value pairs
// // //for each index

// // console.log(iterator1.next().value);
// // console.log(iterator1.next().value);

// // const numArray1 = [1, 30, 39, 29, 10, 45];

// // const isBelowThreshold = (currentValue) => currentValue < 40;

// // console.log(numArray1.every(isBelowThreshold)); // It tests whether all elements in the array passes the test implemented by the provided function

// // const numArr = [1, 2, 3, 4, 5];

// // console.log(numArr.fill(0, 2, 3)); //This method fill the array, it puts 0 from index position 2 to 3
// // console.log(numArr.fill(0, 2, 4)); //This method fill the array, it puts 0 from index position 2 to 3

// // let objDetails = [
// //   { id: 1, course: "JavaScript" },
// //   { id: 2, course: "Core Java" },
// //   { id: 3, course: "Data Science" },
// //   { id: 4, course: "Python" },
// //   { id: 5, course: "Machine Learning" },
// // ];

// // let courses = objDetails.filter((ele) => ele.id > 2);
// // console.log(courses);

// // let course = objDetails.find((ele) => ele.id === 3);
// // console.log(course);

// // let courseIndex = objDetails.findIndex((ele) => ele.course === "Core Java");
// // console.log(courseIndex);

// // const numArr2 = [5, 12, 50, 130, 40, 20];

// // console.log(numArr2.findLast((ele) => ele > 25));
// // console.log(numArr2.findLastIndex((ele) => ele > 25));

// // let employees = [
// //   { name: "Ram", email: "ram@gmail.com", age: 23 },
// //   { name: "Shyam", email: "shyam23@gmail.com", age: 28 },
// //   { name: "John", email: "john@gmail.com", age: 33 },
// //   { name: "Bob", email: "bob32@gmail.com", age: 41 },
// // ];

// // employees.forEach((emp) => {
// //   console.log(
// //     `EmployeeName: ${emp.name} Employee EmailId : ${emp.email} Employee Age: ${emp.age}`
// //   );
// // });

// // let arr2 = ["Liquid", "Solid", "Gas"];

// // console.log(arr2.join(" "));

// // let cars = ["Mercedes", "Ford", "Toyota", "Honda", "Hyundai"];

// // if (cars.includes("Mercedes")) {
// //   console.log("Car found in array");
// // }

// // if (cars.indexOf("Toyota") > 0) {
// //   console.log("Given car is found in array");
// // } else {
// //   console.log("Given car is not found in array");
// // }

// // let numbers = [1, 2, 3, 4, 5, 6];

// // console.log(
// //   `Number added in the end of  given array ${numbers.push(
// //     7
// //   )}, Array:  ${numbers}`
// // );
// // console.log(
// //   `Number removed from end of given array ${numbers.pop()}, Array:  ${numbers}`
// // );
// // console.log(
// //   `Number added in the start of  given array ${numbers.shift()}, Array:  ${numbers}`
// // );
// // console.log(
// //   `Number removed from start of given array ${numbers.unshift(
// //     1
// //   )}, Array:  ${numbers}`
// // );

// let nums = [3, 2, 2, 3];
// let val = 3;
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] == val) {
//     nums.splice(i, 1);
//     nums.splice(nums.length, 0, "_");
//     count++;
//     i--;
//   }
// }

// console.log(nums + " " + count);

// let needle = "sad";
// console.log(needle.length);

// let temp = -121;

// console.log(temp.toString());

// let strArr = temp.toString().split("").reverse().join("");
// console.log(strArr);

// let string = "   fly me   to   the moon  ";

// let strArr1 = string.trim().split(" ");

// console.log(strArr1[strArr1.length - 1].length);

let s = "A man, a plan, a canal: Panama";

let chars = s
  .trim()
  .replace(/\s|,|:/g, "")
  .toLowerCase();
// console.log(chars);
console.log(chars);
console.log(chars.split("").reverse());

if (chars.split("").reverse() === chars.split("")) {
  console.log("true");
}

let arr = [1, 2, 3, 4];

console.log(Object.assign(arr));


