import { Component, JSX, Show, createSignal } from "solid-js";


type TCourseHeaderProps = {
    name: string;
}

const CourseHeader: Component<TCourseHeaderProps> = ({ name }: TCourseHeaderProps): JSX.Element => {    
    const [editMode, setEditMode] = createSignal<boolean>(false);

    return (
        <header class="py-2">
            <div class="container flex  items-center mx-auto gap-5">
                <h2>Course : </h2>
                <Show when={editMode()} fallback={
                    <><h2>{name}</h2> <span onClick={() => setEditMode(s=>!s)}>Modifier</span></>
                }>
                    <input type="text" value={name} />
                </Show>
               
            </div>
        </header>
    )
}

export default CourseHeader;