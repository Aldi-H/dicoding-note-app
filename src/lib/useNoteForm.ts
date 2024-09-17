import { ChangeEvent, useState } from "react";

export const useNoteForm = (title = "", content = "") => {
  const [noteTitle, setNoteTitle] = useState<string>(title);
  const [noteContent, setNoteContent] = useState<string>(content);
  const titleCharacterLimit = 50;

  const onHandleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (titleCharacterLimit - e.target.value.length >= 0) {
      setNoteTitle(e.target.value);
    }

    // setNoteTitle(e.target.value.slice(0, titleCharacterLimit));
  };

  const onHandleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteContent(e.target.value);
  };

  const onHandleAddNote = (
    handleAddNote: (note: { title: string; body: string }) => void,
  ) => {
    if (noteTitle.trim().length && noteContent.trim().length > 0) {
      handleAddNote({
        title: noteTitle,
        body: noteContent,
      });
      setNoteTitle("");
      setNoteContent("");
    }
  };

  return {
    noteTitle,
    noteContent,
    titleCharacterLimit,
    onHandleChangeTitle,
    onHandleChangeContent,
    onHandleAddNote,
  };
};
