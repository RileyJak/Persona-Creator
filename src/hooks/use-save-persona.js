import { useState } from "react";
import { personas, users } from "../data/firebase";
import firebase from "firebase/app";
import faker from "faker";

function useSavePersona(userId) {
	const [isSaving, setIsSaving] = useState(false);
	const [hasSaved, setHasSaved] = useState(false);

	const [personaData, setPersonaData] = useState(() => {
		return {
			name: faker.name.findName(),
			gender: faker.name.gender(),
			age: getAge(1, 100),
			image: faker.image.people(),
			job: faker.name.jobType(),
			company: faker.company.companyName(),
			email: faker.internet.email(),
			address: faker.address.streetAddress(),
			state: faker.address.stateAbbr(),
		};
	});

	const randomData = () => {
		console.log(userId);
		setPersonaData({
			name: faker.name.findName(),
			gender: faker.name.gender(),
			age: getAge(1, 100),
			image: faker.image.people(),
			job: faker.name.jobType(),
			company: faker.company.companyName(),
			email: faker.internet.email(),
			address: faker.address.streetAddress(),
			state: faker.address.stateAbbr(),
		});
	};

	const {
		address,
		email,
		gender,
		image,
		name,
		job,
		age,
		company,
		state,
	} = personaData;

	function getAge(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let classes = "SaveButton";
	if (hasSaved === true) classes += "-saved";

	const save = async (userId, event) => {
		setIsSaving(true);
		setHasSaved(false);
		console.log(userId);
		try {
			await users.doc(userId).collection("personas").add({
				address,
				email,
				gender,
				image,
				name,
				job,
				age,
				company,
				state,
				time: firebase.firestore.Timestamp.now(),
			});
			setHasSaved(true);
		} catch (error) {
			console.error(error);
		}

		setIsSaving(false);
	};

	return [
		save,
		isSaving,
		hasSaved,
		address,
		email,
		gender,
		image,
		name,
		job,
		age,
		company,
		state,
		classes,
		randomData,
	];
}

export default useSavePersona;
