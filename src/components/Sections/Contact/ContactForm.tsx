import { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  reason: string; // Añadido para el motivo de contacto
  termsAccepted: boolean; // Añadido para aceptar términos
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
      reason: '',
      termsAccepted: false, // Inicializamos como no aceptado
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data],
  );

  const handleReasonChange = (reason: string) => {
    setData({ ...data, reason });
  };

  const handleTermsChange = () => {
    setData((prevData) => ({ ...prevData, termsAccepted: !prevData.termsAccepted }));
  };

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Data to send: ', data);
    },
    [data],
  );

  // Nueva función para limpiar el formulario
  const handleClearForm = () => {
    setData(defaultData); // Restablece el estado a los valores predeterminados
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Nombre" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Mensaje"
        required
        rows={6}
      />

      {/* Ajustamos el bloque de Motivo de contacto */}
      <div className="mt-4"> 
        <p className="text-lg font-semibold text-white">Motivo de contacto</p> 
        <p className="text-sm text-neutral-400 mt-1">Seleccione una opción que describa el motivo de su contacto</p> 

        <div className="flex justify-between mt-2"> 
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${data.reason === 'Consulta' ? 'bg-orange-500 text-white' : 'bg-neutral-700 text-neutral-300'}`}
            onClick={() => handleReasonChange('Consulta')}
          >
            Consulta
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${data.reason === 'Colaboración' ? 'bg-orange-500 text-white' : 'bg-neutral-700 text-neutral-300'}`}
            onClick={() => handleReasonChange('Colaboración')}
          >
            Colaboración
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${data.reason === 'Solicitud de información' ? 'bg-orange-500 text-white' : 'bg-neutral-700 text-neutral-300'}`}
            onClick={() => handleReasonChange('Solicitud de información')}
          >
            Solicitud de información
          </button>
        </div>

        {/* Agregamos el texto de Términos de uso con el mismo estilo */}
        <p className="text-lg font-semibold text-white mt-4">Términos de uso</p>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={data.termsAccepted}
            onChange={handleTermsChange}
            className="mr-2 h-4 w-4 rounded border-neutral-400 text-orange-600 focus:ring-orange-600"
          />
          <label className="text-sm text-neutral-400">
            He leído los <a href="/terminos" className="text-orange-500 underline">términos de uso</a> que se encuentran en este sitio web
          </label>
        </div>
      </div>

      {/* Ajustamos la posición de los botones hacia arriba */}
      <div className="flex space-x-4 mt-4"> {/* Contenedor flex para alinear botones */}
        <button
          type="button"
          onClick={handleClearForm}
          className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        >
          Limpiar
        </button>
        <button
          aria-label="Enviar formulario"
          className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
          type="submit"
          disabled={!data.termsAccepted} // Deshabilitar el botón si no se aceptan los términos
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
