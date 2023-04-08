import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BookCard from "./BookCard";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  const { books } = useLoaderData();
  console.log(books);

  return (
    <div className="my-container mt-5 sm:mt-8 md:mt-12 lg:mt-24">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2 ">
        {books.map((book) => (
          <BookCard book={book} key={book.isbn13}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
