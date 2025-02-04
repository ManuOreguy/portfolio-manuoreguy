"use client";

import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";

const WhatsAppQR = () => {
  const whatsappNumber = "+5491154553704";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="flex flex-col items-center gap-6">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-4 group"
      >
        <QRCodeSVG
          value={whatsappUrl}
          size={120}
          bgColor="transparent"
          fgColor="#f0f6fb"
          level="L"
        />
        <div className="flex items-center gap-2 text-gray-400 group-hover:text-green-500 transition-colors">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 .16 5.334.157 11.892c0 2.096.546 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.693 1.448h.005c6.554 0 11.89-5.335 11.894-11.893 0-3.181-1.237-6.167-3.49-8.413zm-8.413 18.326h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.981 1-3.648-.235-.374a9.827 9.827 0 01-1.51-5.289c.003-5.437 4.428-9.862 9.87-9.862 2.634 0 5.112 1.027 6.974 2.89a9.832 9.832 0 012.886 6.979c-.004 5.438-4.429 9.863-9.867 9.863zm5.415-7.382c-.298-.149-1.759-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.298-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.371-.025-.52-.074-.148-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.197 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.064 2.876 1.213 3.074.148.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            />
          </svg>
          <span className="text-sm">Escribíme</span>
        </div>
      </Link>
    </div>
  );
};

export default WhatsAppQR;
