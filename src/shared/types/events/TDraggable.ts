export type TDraggable =
  | {
      draggable: false;
    }
  | ({
      draggable: true;
    } & Partial<TDraggableEvents>);

type TDraggableEvents = {
  onDragStart?: (event: DragEvent) => void;
  onDragEnd?: (event: DragEvent) => void;
  onDragOver?: (event: DragEvent) => void;
  onDrag?: (event: DragEvent) => void;
  onDragEnter?: (event: DragEvent) => void;
};
