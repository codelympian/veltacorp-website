import { FaWhatsapp } from "react-icons/fa6";
import { company } from "@/data/site";

/**
 * Always-visible WhatsApp tap-to-chat button. Uses WhatsApp's brand green so
 * it's instantly recognizable. Sits bottom-right; BackToTop stacks above it.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Veltacorp on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-card transition-all duration-300 hover:pr-5 hover:shadow-soft sm:pr-4"
    >
      <FaWhatsapp size={26} className="shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100 sm:inline">
        Chat with us
      </span>
    </a>
  );
}
