interface ApiResponseSuccess {
    status: "success";
    data: any;
}

interface ApiResponseError {
    status: "error";
    errorMessage: string;
}

type ApiResponse = ApiResponseSuccess | ApiResponseError;

function isApiResponseSuccess(response: ApiResponse): response is ApiResponseSuccess {
    return response.status === "success";
}

async function fetchData(): Promise<ApiResponse> {
    // Fetch data from an API endpoint and return the JSON response
    // ...
}

async function handleApiResponse() {
    const response = await fetchData();

    if (isApiResponseSuccess(response)) {
        console.log("Data:", response.data);
    } else {
        console.error("Error message:", response.errorMessage);
    }
}

handleApiResponse();
