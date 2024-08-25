import React from "react";

const Contact: React.FC = () => {
  return (
    <div data-aos="fade-up-left">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary ">
          Contactanos
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-secondary sm:text-xl">
          ¿Tienes un problema técnico? ¿Quieres enviarnos comentarios?
          ¿Necesitas detalles sobre un presupuesto? Háznoslo saber.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-secondary"
            >
              Tu email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-secondary"
            >
              Tema
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-secondary bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Déjanos saber cómo podemos ayudarte"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-secondary dark:text-gray-400"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-secondary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 a comment..."
            ></textarea>
          </div>
          <button
            title="Enviar mensaje"
            type="submit"
            className="p-4 my-4 h-16 w-max font-medium text-primary bg-secondary rounded-sm hover:scale-110 hover:bg-primary hover:text-secondary duration-150"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
