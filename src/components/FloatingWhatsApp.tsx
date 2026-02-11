import { MessageCircle, Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "918689049549";
  const whatsappMessage = "Hello, I want to get a moving quote.";
  const callNumber = "+918689049549";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const callUrl = `tel:${callNumber}`;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-4">
      
     
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
      
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          WhatsApp
        </span>

        
        <button className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl hover:scale-110 transition text-white">
          <MessageCircle size={24} />
        </button>
      </a>

    
      <a
        href={callUrl}
        className="group relative"
      >
      
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Call Us
        </span>

        <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-xl hover:scale-110 transition text-white">
          <Phone size={24} />
        </button>
      </a>

    </div>
  );
};

export default FloatingWhatsApp;
