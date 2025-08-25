import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, course } = await req.json();

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shshank2022@gmail.com",
        pass: "ykcxlpiqhykmqscw",
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Counselling Form" <${process.env.EMAIL_USER}>`,
      to: "quadriabsaar@gmail.com",
      subject: "New Counselling Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background:#f9f9f9; padding:30px;">
          <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); padding:20px;">
            <h2 style="color:#003366; text-align:center; margin-bottom:10px;">New Enquiry</h2>
            <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
              <tr><td style="padding:10px; font-weight:bold; background:#f1f5f9;">Course</td><td style="padding:10px;">${course}</td></tr>
              <tr><td style="padding:10px; font-weight:bold; background:#f1f5f9;">Name</td><td style="padding:10px;">${name}</td></tr>
              <tr><td style="padding:10px; font-weight:bold; background:#f1f5f9;">Email</td><td style="padding:10px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:10px; font-weight:bold; background:#f1f5f9;">Phone</td><td style="padding:10px;">${phone}</td></tr>
            </table>
            <p style="margin-top:20px; font-size:14px; color:#555; text-align:center;">Please review the submission and take the necessary action.</p>
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
