const API_ENDPOINT = "http://localhost:8000/api/messages/";

export const fetchMessages = async () => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  return data;
};

export const createMessage = async (message: string[]) => {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  const data = await response.json();
  return data;
};
