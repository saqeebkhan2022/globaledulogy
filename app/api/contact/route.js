import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, course } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Counselling Form" <${process.env.EMAIL_USER}>`, // your Gmail
      to: process.env.EMAIL_USER, // your email
      subject: "New Counselling Form Submission",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color:#003366; text-align:center;">📌 New Counselling Registration</h2>
    <p>Dear Admin,</p>
    <p>A new counselling registration has been submitted. Please find the details below:</p>

    <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px auto; font-size: 14px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Course</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${course}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Name</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Phone</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${phone}</td>
      </tr>
    </table>
    <p style="margin-top:20px;">Please review the submission and take the necessary action.</p>
    <p style="color:#555;">Best Regards,<br><strong>Global Edulogy</strong></p>
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
