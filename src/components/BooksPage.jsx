import axios from "axios";
import React, { useEffect, useState } from "react";

const BooksPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://wlccxgkjvhewrfawsnyv.supabase.co/rest/v1/BooksTable?select=*",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsY2N4Z2tqdmhld3JmYXdzbnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxNDY2OTUsImV4cCI6MjAxNzcyMjY5NX0.iaeGZ91rpGowFJHNTEHVr7VEFKzhovybA_3QnuzMfno",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsY2N4Z2tqdmhld3JmYXdzbnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxNDY2OTUsImV4cCI6MjAxNzcyMjY5NX0.iaeGZ91rpGowFJHNTEHVr7VEFKzhovybA_3QnuzMfno",
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="books-page">
      <div className="books">
        {data?.map((el) => (
          <div key={el.id} className="images">
            <img src={el.photo} alt="" />
            <h2 className="book-name">{el.name}</h2>
            <p className="author-name">{el.author}</p>
            <p className="price">{el.price} man</p>
            <button>Səbətə əlavə edin</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
