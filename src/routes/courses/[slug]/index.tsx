import { useParams } from "@solidjs/router";
import { JSX, createSignal } from "solid-js";
import CourseHeader from "./components/CourseHeader";

export default function Page(): JSX.Element {

    const params = useParams();
    const { slug } = params; 

    const [courseName, setCourseName] = createSignal<string>(slug);
    


    return (<main class="container mx-auto flex flex-col gap-3">
        <CourseHeader name={courseName()} />
        <section class="flex flex-col gap-3">
            <h3>Course details</h3>
            <p>Course description</p>
        </section>
        <section>
            <h3>Course curriculum</h3>
            Import content / Bulk Edit

            <input type="section" /> Cancel Save


            New section
        </section>
    </main>)
}