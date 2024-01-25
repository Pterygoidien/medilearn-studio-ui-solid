import { useParams } from "@solidjs/router";
import { For, JSX, createEffect, createSignal } from "solid-js";
import CourseHeader from "./components/CourseHeader";
import { createStore } from "solid-js/store";
import { TCourseCuriculum } from "~/shared/types/TCurriculum";
import CourseSection from "./components/CourseSection";

export default function Page(): JSX.Element {
  const params = useParams();
  const { slug } = params;

  const [courseName, setCourseName] = createSignal<string>(slug);
  const [courseCuriculum, setCourseCuriculum] =
    createStore<TCourseCuriculum>(mockCourseCuriculum);

  createEffect(() => {
    //change URL param when courseName change
    window.history.replaceState(null, "", `/courses/${courseName().replace(/\s+/g, "-")}`);
  });

  const addSection = () => {
    setCourseCuriculum((prev) => {
      return {
        ...prev,
        sections: [
          ...prev.sections,
          {
            name: "New section",
            chapters: [],
            order: prev.sections.length + 1,
          },
        ],
      };
    });
  };

  return (
    <main class="container mx-auto flex flex-col gap-3">
      <CourseHeader courseName={courseName} setCourseNameFn={setCourseName} />
      <section class="flex flex-col gap-3">
        <h3>Course details</h3>
        <p>Course description</p>
      </section>
      <section class="flex flex-col gap-3">
        <h3>Course curriculum</h3>
        <div class="bg-gray-100 p-4 rounded-xl flex flex-col gap-3">
          <For each={courseCuriculum.sections}>
            {(section) =>
              <CourseSection
                section={section}
                draggable={true}
                onDragStart={(e) => console.log("called: " + e)}
                onDragEnter={(e) => console.log("ENTER " + e)}
                onDragEnd={(e) => console.log("END: " + e)}
              />
            }
          </For>
          <button onClick={addSection}>Add section</button>
        </div>
        Import content / Bulk Edit New section
      </section>
    </main>
  );
}

const mockCourseCuriculum: TCourseCuriculum = {
  name: "Course name",

  sections: [
    {
      name: "Section 1",
      chapters: [
        {
          name: "Chapter 1",
        },
        {
          name: "Chapter 2",
        },
        {
          name: "Chapter 3",
        },
      ],
      order: 1,
    },
    {
      name: "Section 2",
      chapters: [
        {
          name: "Chapter 1",
        },
        {
          name: "Chapter 2",
        },
        {
          name: "Chapter 3",
        },
      ],
      order: 2,
    },
  ],
};
