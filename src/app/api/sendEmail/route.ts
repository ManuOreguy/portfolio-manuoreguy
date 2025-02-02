import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactFormData } from "@/app/constants/data";

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();
    const { name, email, message } = data;

    // Validaciones
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de: ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h1 style="color: #333333; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
              Nuevo Mensaje desde el Portfolio
            </h1>
            
            <div style="margin-bottom: 20px;">
              <h2 style="color: #666666; font-size: 18px; margin-bottom: 5px;">Información del Contacto</h2>
              <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
            </div>

            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <h2 style="color: #666666; font-size: 18px; margin-bottom: 10px;">Mensaje</h2>
              <p style="color: #333333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0; text-align: center; color: #888888; font-size: 12px;">
              <p>Este mensaje fue enviado desde el formulario de contacto del Portfolio</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "¡Mensaje enviado correctamente!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje. Por favor, intenta nuevamente." },
      { status: 500 }
    );
  }
}
