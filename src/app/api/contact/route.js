import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return Response.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["jordantejada.dev@gmail.com"],
      subject: `Nuevo mensaje de ${nombre}`,
      replyTo: email,
      text: `
Nombre: ${nombre}
Correo: ${email}

Mensaje:
${mensaje}
      `,
    });

    if (error) {
      return Response.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: "Ocurrió un error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
