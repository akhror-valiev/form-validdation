import { useState, useRef } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "", // birma bir usestate deb yozib otirilmadi chunki inut kop bolsa object yaratvolamiz hohlagan input larnini ichiga yozamiz
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			errorMessage:
				"Username should be 3-16 characters and should not include any special character",
			label: "Username",
			pattern: "^[A-Za-z0-9 ]{3,16}$",
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email",
			errorMessage: "Emial should be valiad email; address",
			label: "Email",
			required: true,
		},
		{
			id: 3,
			name: "birthday",
			type: "date",
			placeholder: "Birthday",
			label: "Birthday",
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-20 characters and should include at least one letter, one number, one special character we well",
			label: "Password",
			pattern:
				"^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd!@#$%^&*()_+]{8,20}",
			required: true,
		},
		{
			id: 5,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Password do not match",
			label: "Confirm Password",
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		// const data = new FormData(e.target);
		// console.log(Object.fromEntries(data.entries()));
	};

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	console.log(values);

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}

				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
