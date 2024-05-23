const resendOtp = async (req, res) => {
    const { email } = req.body;
    try {
      if (!email) {
        return res.status(400).json({ message: "Please enter the email!" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const now = new Date();
      if (user.otp && user.otpExpiration > now) {
        // OTP is still valid, no need to generate a new one
        return res.status(200).json({ message: "OTP has already been sent and is still valid!" });
      }
  
      // Generate a new OTP
      const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();
      const otp = generateOTP();
      console.log("Generated OTP:", otp);
  
      const otpExpiration = new Date(Date.now() + 60 * 1000); // OTP expires in 1 minute
      await User.findOneAndUpdate(
        { _id: user.id },
        { $set: { otp, otpExpiration } }
      );
  
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "Resend OTP for Password Reset",
        text: `Your OTP for password reset is: ${otp}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Error sending email", error });
        } else {
          console.log("Email sent:", info.response);
          return res.status(200).json({ message: "OTP Resent Successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  };
  
  module.exports = { resendOtp };
  