import { JSX } from "solid-js";
import CreateCourseForm from "./new/components/CreateCourseForm";

export default function Page(): JSX.Element {
    return (
        <main class="container mx-auto flex gap-5">
            See my courses
            <a href="/courses/new">Create a new course</a>
      
        </main>
    )

}