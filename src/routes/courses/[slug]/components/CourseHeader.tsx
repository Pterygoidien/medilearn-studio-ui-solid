import { Component, JSX, Show, createSignal } from "solid-js";


type TCourseHeaderProps = {
    courseName: any;
    setCourseNameFn: (name: string) => void;
}

const CourseHeader: Component<TCourseHeaderProps> = ({ courseName, setCourseNameFn }: TCourseHeaderProps): JSX.Element => {    
    const [editMode, setEditMode] = createSignal<boolean>(false);


    return (
        <header class="py-2 bg-slate-50 px-2">
            <div class="container flex  items-center mx-auto gap-5">
   
                <Show when={editMode()} fallback={
                    <>
                        <h2>{courseName()}</h2>
                        <span onClick={() => setEditMode(s => !s)}>Modifier</span>
                    </>
                }>
                    <input class="text-4xl font-bold leading-5 tracking-tighter" type="text" value={courseName()} onChange={(e)=>setCourseNameFn(e.target.value)} />
                    <span onClick={() => setEditMode(s => !s)}>Enregistrer</span>
                </Show>
               
            </div>
        </header>
    )
}

export default CourseHeader;