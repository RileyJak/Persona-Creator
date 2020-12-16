import { useState, useEffect } from "react";
import { personas, users } from "../data/firebase";

function useAllPersonas(userId) {
	const [persona, setPersona] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	useEffect(() => {
		setIsLoading(true);
		const onNext = (snapshot) => {
			setIsLoading(false);
			const docs = snapshot.docs;
			setPersona(docs);
		};
		const onError = (error) => {
			setIsLoading(false);
			setErrorMessage("There was a problem loading. Please try again.");
			console.error(error);
		};

		const unsubscribe = users
			.doc(userId)
			.collection("personas")
			.orderBy("time", "desc")
			.onSnapshot(onNext, onError);

		return unsubscribe;
	}, []);

	return [persona, isLoading, errorMessage];
}

export default useAllPersonas;
