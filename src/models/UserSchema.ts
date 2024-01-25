import * as v from "valibot";

export const UserSchema = v.object({
  id: v.string(),
  email: v.string([
    v.minLength(3, "USER_EMAIL_TOO_SHORT"),
    v.email("USER_EMAIL_INVALID"),
    v.maxLength(50, "USER_EMAIL_TOO_LONG"),
  ]),
});
