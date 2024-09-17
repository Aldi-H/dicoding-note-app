import { FiArchive, FiRotateCcw, FiTrash2 } from "react-icons/fi";

interface NoteItemProps {
  noteTitle: string;
  noteContent: string;
  noteDate: string;
  noteArchived: boolean;
}

const NoteItem = ({
  noteTitle,
  noteContent,
  noteDate,
  noteArchived,
}: NoteItemProps) => {
  return (
    <div className="flex h-max flex-col justify-between whitespace-pre-wrap rounded-md border p-4 shadow backdrop-blur backdrop-brightness-100">
      <div className="flex flex-col gap-y-3 text-left">
        <h3 className="text-pretty font-bold">{noteTitle}</h3>

        <hr className="my-3" />

        <p className="text-pretty">{noteContent}</p>
      </div>

      <hr className="mb-4 mt-10" />

      <footer className="flex justify-between text-center">
        <small className="font-semibold text-gray-500">{noteDate}</small>
        <div className="flex flex-row gap-x-2.5">
          <FiTrash2
            className="cursor-pointer text-red-500 hover:text-red-500/85"
            size="1.3em"
          />
          {noteArchived ? (
            <FiRotateCcw
              className="cursor-pointer text-gray-800 hover:text-gray-800/85"
              size="1.3em"
            />
          ) : (
            <FiArchive
              className="cursor-pointer text-gray-800 hover:text-gray-800/85"
              size="1.3em"
            />
          )}
        </div>
      </footer>
    </div>
  );
};

export default NoteItem;
