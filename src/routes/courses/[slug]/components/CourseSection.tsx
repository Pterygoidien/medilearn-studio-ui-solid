import { Component, For, JSX } from "solid-js";
import { TSection } from "~/shared/types/TSection";
import CourseChapter from "./CourseChapter";
type Props = {
    section: TSection;
}
const CourseSection: Component<Props> = ({ section: { name, chapters }  }:Props): JSX.Element=> {
    return <article>
        {name}
        <For each={chapters}>{
            (chapter) => <CourseChapter chapter={chapter} />
        }</For>
    </article>
}
export default CourseSection;