import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const BookCard = ({ book }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <Link to={`../books/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-500 transform hover:-translate-y-2 rounded-md shadow-lg hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={book.image}
          alt="Book Cover"
        />

        <div className="bg-black px-6 py-4 opacity-0 hover:opacity-100 bg-opacity-70 inset-0 transition-opacity duration-400 text-gray-300 absolute flex flex-col">
          <p className="font-medium">{book.title}</p>
          <br />
          <p className="font-medium">{book.subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto font-semibold">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
