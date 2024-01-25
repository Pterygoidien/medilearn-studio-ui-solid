import * as v from "valibot";
export const CreateCourseSchema = v.object({
  name: v.string([
    v.minLength(3, "COURSE_NAME_TOO_SHORT"),
    v.maxLength(50, "COURSE_NAME_TOO_LONG"),
  ]),
});
