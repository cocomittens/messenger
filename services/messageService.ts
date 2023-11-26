const API_ENDPOINT = "http://localhost:8000/api/messages/";

export const fetchMessages = async () => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  return data;
};

export const createMessage = async ({
  message,
  date,
  sender,
  recipient,
}: {
  message: string;
  date: Date;
  sender: number;
  recipient: number;
}) => {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      date: date.toISOString(),
      sender,
      recipient,
    }),
  });
  const data = await response.json();
  return data;
};
