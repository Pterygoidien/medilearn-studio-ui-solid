import { JSX } from "solid-js";
import CreateCourseForm from "./components/CreateCourseForm";

export default function Page(): JSX.Element {
    return (
        <main class="container mx-auto flex flex-col gap-4 bg-slate-100 p-8 rounded-xl">
            <h2>Create a new course</h2>
            <CreateCourseForm />
        </main>
    )

}