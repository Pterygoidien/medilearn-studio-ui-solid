import { TextInput } from "../../../../utils/modular-forms/TextInput";
import { SubmitHandler, createForm, required, valiForm } from "@modular-forms/solid";
import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import * as v from 'valibot';

const CourseSchema = v.object({
    name: v.string([
        v.minLength(3, 'Course name must be at least 3 characters long'),
        v.maxLength(50, 'Course name must be at most 50 characters long'),
    ]),
});
type TCreateCourseForm = v.Input<typeof CourseSchema>;


const CreateCourseForm: Component = (): JSX.Element => {
    const nav = useNavigate();
    const [courseForm, { Form, Field}] = createForm<TCreateCourseForm>({
        validate: valiForm(CourseSchema)
    });

    const handleSubmit: SubmitHandler<TCreateCourseForm> = (values, event) => {
        event.preventDefault();
        console.log(values);
        console.log("called");
        const name = values.name
        
        if(true)
            nav(`/courses/${values.name.replace(/\s+/g, '-')}`, { replace: true });
    };

    return (
        <Form onSubmit={handleSubmit} class="flex flex-col gap-5">
            <fieldset class="flex flex-col gap-3">
                <Field name="name">
                    {(field, props) => (
                            <TextInput {...props} name="name" label="Enter a course name" value={field.value} error={field.error} type="text" required />
                    )}
                </Field>
            </fieldset>
            <button type="submit" class="btn bg-slate-400 shadow">Submit</button>
        </Form>
    );
};

export default CreateCourseForm;
