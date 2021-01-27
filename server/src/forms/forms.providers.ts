import { Connection } from "mongoose";
import { ContactFormSchema, SignupFormSchema } from "./forms.schema";
import { contactFormModel, injectedDatabase, signupFormModel } from "./forms.helpers.constants";

export const formsProviders = [
  {
    provide: signupFormModel,
    useFactory: (connection: Connection) => connection.model("SignupForm", SignupFormSchema),
    inject: [injectedDatabase],
  },
  {
    provide: contactFormModel,
    useFactory: (connection: Connection) => connection.model("ContactForm", ContactFormSchema),
    inject: [injectedDatabase],
  }
];