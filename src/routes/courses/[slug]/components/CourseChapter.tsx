import { Component, JSX } from "solid-js";
import { TChapter } from "~/shared/types/TChapter";

type Prop = {
    chapter: TChapter
}
const courseChapter: Component<Prop> = ({chapter:{name}}:Prop): JSX.Element => {
    return <div>{name}</div>;
}
export default courseChapter;