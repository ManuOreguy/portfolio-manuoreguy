import { ContactFormData } from "@/app/constants/data";

export const sendEmail = async (data: ContactFormData) => {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      return { success: true, message: responseData.message };
    } else {
      return {
        success: false,
        message: responseData.message || "Error al enviar el email",
      };
    }
  } catch (error: unknown) {
    console.error("Error en el servicio de email:", error);
    return {
      success: false,
      message:
        "Error de conexión al enviar el email. Por favor, intenta nuevamente.",
    };
  }
};
