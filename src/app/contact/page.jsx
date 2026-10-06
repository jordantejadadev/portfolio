"use client";
import { useState } from "react";
import { sendContactMessage } from "@/services/contactService";

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await sendContactMessage(form);

      setStatus("Mensaje enviado correctamente.");

      setForm({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black px-4 py-20 text-white fade">
      <div className="mx-auto max-w-2xl">

        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          📬 Contacto
        </h2>

        <p className="mb-12 text-center text-gray-400">
          ¿Tienes un proyecto, consulta o propuesta? Puedes escribirme
          utilizando el formulario o contactarme directamente.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label
              htmlFor="nombre"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Nombre
            </label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Correo electrónico
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Mensaje
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="5"
              required
              className="w-full resize-none rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status && (
            <p className="text-center text-sm text-gray-300">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}
