import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, course } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shshank2022@gmail.com",
        pass: "ykcxlpiqhykmqscw",
      },
    });

    await transporter.sendMail({
      from: `"Counselling Form" <${"shshank2022@gmail.com"}>`,
      to: "quadriabsaar@gmail.com",
      subject: "New Counselling Form Submission",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background:#f9f9f9; padding:30px;">
  <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); padding:20px;">
    
    <h2 style="color:#003366; text-align:center; margin-bottom:10px;">
      📌 New Counselling Registration
    </h2>
    <p style="text-align:center; color:#666; font-size:14px; margin-bottom:20px;">
      A new counselling registration has been submitted. Please find the details below:
    </p>

    <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold; background:#f1f5f9; width:35%;">Course</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${course}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold; background:#f1f5f9;">Name</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold; background:#f1f5f9;">Email</td>
        <td style="border: 1px solid #ddd; padding: 10px; color:#003366;">
          <a href="mailto:${email}" style="color:#003366; text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold; background:#f1f5f9;">Phone</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${phone}</td>
      </tr>
    </table>

    <p style="margin-top:20px; font-size:14px; color:#555; text-align:center;">
      Please review the submission and take the necessary action.
    </p>

    <p style="margin-top:20px; text-align:center; color:#333;">
      Best Regards,<br>
      <strong style="color:#003366;">Global Edulogy</strong>
    </p>
  </div>
</div>

`,
    });

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
