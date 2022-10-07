import { addMember, NewSubscription } from "../../consts/mailchimp";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body as NewSubscription;

    const query = await addMember(data);

    res.status(200).json(query);
  } catch (e: unknown) {
    res
      .status(400)
      .json(
        e instanceof Error ? { error: e.message } : { error: "unknown error" }
      );
  }
}
