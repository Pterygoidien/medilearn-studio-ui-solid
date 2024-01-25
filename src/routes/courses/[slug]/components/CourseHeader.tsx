import { Component, JSX, Show, createEffect, createSignal } from "solid-js";

type TCourseHeaderProps = {
  courseName: any;
  setCourseNameFn: (name: string) => void;
};

const CourseHeader: Component<TCourseHeaderProps> = ({
  courseName,
  setCourseNameFn,
}: TCourseHeaderProps): JSX.Element => {
    const [editMode, setEditMode] = createSignal<boolean>(false);

  return (
    <header class="py-2 bg-slate-50 px-2">
      <div class="container flex  justify-between items-center mx-auto gap-5">
        <Show
          when={editMode()}
          fallback={
            <>
              <h2>{courseName()}</h2>
              <span onClick={() => setEditMode((s) => !s)}>Modifier</span>
            </>
          }
        >
          <input
            class="text-4xl font-bold leading-5 tracking-tighter px-4 py-2"
            style={{ width: `${courseName().length+8}ch`, "max-width": "100%", "min-width": "100px"}}
            type="text"
            value={courseName()}
            onInput={(e) => setCourseNameFn(e.target.value)}
          />
          <span onClick={() => setEditMode((s) => !s)}>Enregistrer</span>
        </Show>
      </div>
    </header>
  );
};

export default CourseHeader;
