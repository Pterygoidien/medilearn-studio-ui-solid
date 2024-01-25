import * as v from "valibot";
import { UserSchema } from "./UserSchema";

export const CourseSchema = v.object({
  id: v.string(),
  name: v.string([
    v.minLength(3, "COURSE_NAME_TOO_SHORT"),
    v.maxLength(50, "COURSE_NAME_TOO_LONG"),
  ]),
  description: v.optional(
    v.string([
      v.minLength(20, "COURSE_DESCRIPTION_TOO_SHORT"),
      v.maxLength(500, "COURSE_DESCRIPTION_TOO_LONG"),
    ])
  ),
});

export type TCourse = v.Input<typeof CourseSchema>;
