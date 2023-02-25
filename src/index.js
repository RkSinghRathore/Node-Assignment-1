const fs = require('fs').promises

const myFileWriter = async (fileName, fileContent) => {
// 	write code here
//  dont chnage function name
	await fs.writeFile(fileName, fileContent)
}

myFileWriter("File.txt", "Hello");
console.log("File Created Succesfully")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, "utf-8")
	console.log(data);
}

myFileReader("File.txt");
console.log("File read succesfully")



const myFileUpdater = async (fileName, fileContent) => {
	// 	// write code here
	// 	// dont chnage function name
	await fs.appendFile(fileName, "Hello World",)
}

myFileUpdater("File.txt")
console.log("File Updated succesfully")

const myFileDeleter = async (fileName) => {
	// 	write code here
	// 	dont chnage function name
	await fs.unlink(fileName);
}

myFileDeleter("File.txt")
console.log("File deleted succesfully")


module.exports = myFileWriter;
module.exports = myFileUpdater;
module.exports = myFileReader;
module.exports = myFileDeleter;