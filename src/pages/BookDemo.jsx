import React from "react";
// import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import BookForm from "../containers/bookForm/BookForm";

const BookDemo = () => {
  return (
    <div>
      <Navbar />
      <BookForm />
      {/* <Footer /> */}
    </div>
  );
};

export default BookDemo;
