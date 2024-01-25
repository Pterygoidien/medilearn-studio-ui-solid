import { Component, For, JSX } from "solid-js";
import { TSection } from "~/shared/types/TSection";
import CourseChapter from "./CourseChapter";
import { TDraggable } from "~/shared/types/events/TDraggable";

type Props = {
    section: TSection;
} & TDraggable;


const CourseSection: Component<Props> = ({
  section: { name, chapters },
  ...props
}: Props): JSX.Element => {


  return (
    <article
      class="p-4 bg-slate-200"
      {...props}
    >
      <h4>{name}</h4>
      <For each={chapters}>
        {(chapter) => <CourseChapter chapter={chapter} />}
      </For>
    </article>
  );
};
export default CourseSection;
