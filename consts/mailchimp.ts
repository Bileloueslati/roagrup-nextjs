import * as Lib from "@mailchimp/mailchimp_marketing";

const { MAILCHIMP_API_KEY } = process.env;

Lib.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: "us11",
});

/* @ts-ignore */
export const callPing = (): Promise<any> => Lib.ping.get();

const listId = "506e91537e";

export type NewSubscription = {
  email: string;
  member: {
    firstName: string;
    lastName: string;
    phone?: string;
    birthday?: string;
  };
};

export const addMember = ({
  email,
  member: { firstName, lastName, birthday },
}: NewSubscription) =>
  Lib.lists.addListMember(listId, {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      BIRTHDAY: birthday || "",
    },
  });
