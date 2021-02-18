import React, { useContext, useEffect } from "react";
import { MyContext } from "../App";

export default function Records() {
  const { records, setRecords, token, userData } = useContext(MyContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/records", {
      method: "GET",
      headers: { "x-auth": token },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setRecords(result.allRecords);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  }, []); //component did mount (execute once)

  return (
    <div>
      <h1>This is Records Page</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {records.map((record) => {
          return (
            <div
              key={record._id}
              style={{
                width: "300px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "2px 5px 5px gray",
              }}
            >
              <h3>Title: {record.title}</h3>
              <h4>Artist: {record.artist}</h4>
              <p>Year: {record.year}</p>
              <p>Price: {record.price}$</p>
              { userData.role === "Admin" ? (
                <>
                  <button>Delete Record</button> <button>Edit Record</button>{" "}
                </>
              ) : (
                  <button>Place order</button>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
