import { FiArchive, FiRotateCcw, FiTrash2 } from "react-icons/fi";

const NoteItem = () => {
  return (
    <div className="shadow border rounded-md backdrop-blur backdrop-brightness-100 p-4 h-max flex flex-col justify-between whitespace-pre-wrap">
      <div className="flex flex-col text-left gap-y-3">
        <h3 className="font-bold text-pretty">
          Beloved Manhattan soup stand closes
        </h3>

        <hr className="my-3" />

        <p className="text-pretty">
          New Yorkers are facing the winter chill with less warmth this year as
          the city's most revered soup stand unexpectedly shutters, following a
          series of events that have left the community puzzled.
        </p>
      </div>

      <hr className="mt-10 mb-4" />

      <footer className="flex text-center justify-between">
        <small className="font-semibold text-gray-500">
          April 14, 2022, 4:27:34
        </small>
        <div className="flex flex-row gap-x-2.5">
          <FiTrash2
            className="cursor-pointer text-red-500 hover:text-red-500/85"
            size="1.3em"
          />
          <FiRotateCcw
            className="cursor-pointer text-gray-800 hover:text-gray-800/85"
            size="1.3em"
          />
          <FiArchive
            className="cursor-pointer text-gray-800 hover:text-gray-800/85"
            size="1.3em"
          />
        </div>
      </footer>
    </div>
  );
};

export default NoteItem;
