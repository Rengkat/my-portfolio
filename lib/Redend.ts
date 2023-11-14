import { Resend } from "resend";

const resend = new Resend("re_PD3X8pXx_GVx7fTiGNFgEuKitjb7oEmF5");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "successinmotion11@gmail.com",
  subject: "Hello World",
  react: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
