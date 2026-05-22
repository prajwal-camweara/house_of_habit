export const generateOtpEmail = (otp, userName = "there") => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #333333;">
    
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f5; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 500px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
            
            <tr>
              <td align="center" style="background-color: #000000; padding: 30px 20px;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">HOUSE OF HABIT</h1>
              </td>
            </tr>

            <tr>
              <td style="padding: 40px 30px; text-align: center;">
                <h2 style="margin-top: 0; font-size: 20px; color: #111827;">Verify your email address</h2>
                <p style="font-size: 16px; color: #4b5563; line-height: 1.5; margin-bottom: 30px;">
                  Hi ${userName},<br>
                  Use the security code below to complete your verification. This code will expire in 5 minutes.
                </p>
                
                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; letter-spacing: 8px; font-size: 32px; font-weight: bold; color: #111827; margin-bottom: 30px;">
                  ${otp}
                </div>

                <p style="font-size: 14px; color: #6b7280; line-height: 1.5; margin: 0;">
                  If you didn't request this code, you can safely ignore this email.
                </p>
              </td>
            </tr>

            <tr>
              <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                  &copy; ${new Date().getFullYear()} House of Habit. All rights reserved.<br>
                  Bengaluru, Karnataka
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};
