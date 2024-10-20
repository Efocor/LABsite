import { FC, memo, useCallback, useMemo, useState } from 'react';
import emailjs from 'emailjs-com'; // Importamos EmailJS

interface FormData {
  name: string;
  email: string;
  message: string;
  reason: string;
  termsAccepted: boolean;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
      reason: '',
      termsAccepted: false,
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState(false); // Para mostrar un indicador de carga
  const [messageSent, setMessageSent] = useState(false); // Para confirmar envío

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      const fieldData: Partial<FormData> = { [name]: value };
      setData((prevData) => ({ ...prevData, ...fieldData }));
    },
    [],
  );

  const handleReasonChange = (reason: string) => {
    setData((prevData) => ({ ...prevData, reason }));
  };

  const handleTermsChange = () => {
    setData((prevData) => ({ ...prevData, termsAccepted: !prevData.termsAccepted }));
  };

  const handleClearForm = () => {
    setData(defaultData);
  };

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true); // Indicamos que comienza la carga

      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        reason: data.reason,
      };

      try {
        // Enviamos el email a través de EmailJS
        await emailjs.send(
          'service_oa316ab', // Reemplaza con tu Service ID
          'template_cqplcip', // Reemplaza con tu Template ID
          templateParams,
          '4_kxnlqH3THc4ehvx', // Reemplaza con tu Public Key
        );
        setMessageSent(true); // Confirmamos el envío
        handleClearForm(); // Limpiamos el formulario después de enviar
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        setLoading(false); // Finalizamos el indicador de carga
      }
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Nombre"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Mensaje"
        required
        rows={6}
        value={data.message}
      />

      <div className="mt-2">
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

      <div className="flex space-x-4 mt-2">
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
          disabled={!data.termsAccepted || loading} // Deshabilitar mientras está cargando
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>

      {messageSent && <p className="text-green-500 mt-4">¡Mensaje enviado con éxito!</p>}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
