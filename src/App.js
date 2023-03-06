import "./App.css";
import CustomizedDialogs from "./Components/Dialog/dialog";
import { dialog1Title, dialog1Content } from "./Utils/data/data";
function App() {
	return (
		<div className='App'>
			<CustomizedDialogs
				title={dialog1Title}
				content={dialog1Content}></CustomizedDialogs>
		</div>
	);
}

export default App;
