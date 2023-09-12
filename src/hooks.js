import { useQuery } from "react-query";
import { authorService } from "./APIs/Services/AuthorService";
import { QueryKeys } from "./QueryKeys";

export const useService = () => {
  const authorServices = new authorService();

  return { authorServices };
};

export const useAuthorData = () => {
  const { authorServices } = useService();

  return useQuery([QueryKeys.getAuthorsKey], () =>
    authorServices.getAllAuthors()
  );
};
