interface ApiResponse<T>{
	errorMessage?: string;
	code?: number;
	data?: T;
}

export default ApiResponse;