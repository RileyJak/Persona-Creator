import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app";
import { users } from "./data/firebase";

const root = document.querySelector("#root");
console.log(root);

ReactDOM.render(<App />, root);

//async function getAllUsers() {
//try {
//const snapshot = await users.get();
//snapshot.forEach((doc) => {
//	console.log(doc.id);
//	console.log(doc.data());
//	});
//} catch (error) {
//	console.error(error);
//	}
//}

//getAllUsers();

//const save = async (event) => {
//	try {
//	await users.doc("GGgKAZ1p8ub4dW9lKTGOfVlTgkZ2").set({
//		name: "Riley",
//		role: "UX",
//		company: "place",
//	});
//	} catch (error) {
//		console.error(error);
//	}
// };

// save();
