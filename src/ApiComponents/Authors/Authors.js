import React, { useState } from "react";
import "./_authors.scss";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import { useAuthorData, useService } from "../../hooks";
import { QueryKeys } from "../../QueryKeys";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Authors = () => {
  const { authorServices } = useService();
  //   const getAllQuery = useQuery([QueryKeys.getAuthorsKey], () =>
  //     authorServices.getAllAuthors()
  //   );
  const getAllQuery = useAuthorData();

  const [newAuthor, setNewAuthor] = useState({});

  const { mutate: createNewAuthor } = useMutation(
    () => authorServices.addAuthor(newAuthor),
    { onSuccess: () => getAllQuery.refetch() }
  );

  const { mutate: deleteAuthor } = useMutation(
    (id) => authorServices.deleteAuthor(id),
    { onSuccess: () => getAllQuery.refetch() }
  );

  const handleNewAuthor = ({
    target: { value: inputValue, name: inputName },
  }) => {
    setNewAuthor((prev) => ({ ...prev, [inputName]: inputValue }));
  };
  return (
    <main>
      <div className="header">
        <h1>Authors List</h1>
      </div>
      <div className="inputArea">
        <h2>Add Author</h2>
        <input
          name="fullname"
          placeholder="Add Author"
          onChange={handleNewAuthor}
        ></input>
        {/* Author have only fullname parameter */}
        <Button variant="contained" onClick={createNewAuthor}>
          Add Author
        </Button>
      </div>
      <div className="authorList">
        <ul>
          {getAllQuery.data?.data.map((author) => (
            <li key={author.id}>
              <h1>{author.fullname} </h1>
              <button onClick={() => deleteAuthor(author.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Authors;
