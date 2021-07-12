import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: `${process.env.EMAIL_FROM}`,
        from: `${process.env.EMAIL_FROM}`,
        subject: "Does this work?",
        text: "If you're reading this .... yes!",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
