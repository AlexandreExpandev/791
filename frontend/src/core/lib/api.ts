/**
 * @utility api
 * @summary A simple fetch wrapper for making API requests.
 * @domain core
 * @type utility-function
 * @category api
 */
export const api = {
  async post<T, U>(path: string, body: U): Promise<T> {
    const response = await fetch(`/api/v1${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
    }

    return responseData.data as T;
  },
};
