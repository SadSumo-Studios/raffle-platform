import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";
import { v4 as uuid } from "uuid";
import { sendEmail } from "../util/sendEmail";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = getDbConnection("react-auth-db");
    const user = await db.collection("users").findOne({ email });

    if (user) {
      res.sendStatus(409);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const verificationString = uuid();

    const startingInfo = {
      hairColor: "",
      favoriteFood: "",
      bio: "",
    };

    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
      info: startingInfo,
      isVerified: false,
      verificationString,
    });
    const { insertedID } = result;

    try {
      await sendEmail({
        to: email,
        from: `${process.env.EMAIL_FROM}`,
        subject: "Please verify your email",
        text: `
          Thanks for signing up! to verify your email, click here:
          http://localhost:3000/verify-email/${verificationString}
        `,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }

    jwt.sign(
      {
        id: insertedID,
        email,
        info: startingInfo,
        isVerified: false,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).json({ token });
      }
    );
  },
};
