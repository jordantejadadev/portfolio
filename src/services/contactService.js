export async function sendContactMessage(form) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "No se pudo enviar el mensaje.");
  }

  return data;
}
