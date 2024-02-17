function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1 = s1.toLowerCase();
	let s2 = s2.toLowerCase();
	let targetLen = s2.lenngth;
	let targetChar = s2.at(0);
	for(let i=0;i<s1.length;i++){
		if(targetChar === s1.at(i) && s1.slice(i,i+targetLen)===s2){
			return i;
		}
	}
	return -1;  
}
  
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));