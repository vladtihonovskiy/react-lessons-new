import { loader } from "../components/Loader/Loader";
import axios from "axios";
import {apiUrl} from "../constants/config";



export const postRequest = async (src, data) => {
	loader.show();
	try {
		const result = await axios.post(`${apiUrl}${src}`, { ...data }
	);
		loader.hide();
		return result.data;
	}
	catch (error) {
		loader.hide();
		throw error.response.data.error;
	}
}
