import { HTTPClient } from "../HTTPClient";

export class authorService extends HTTPClient {
  constructor() {
    super("https://localhost:7090/api");
  }

  async getAllAuthors() {
    return await this.get("Authors");
  }
  async deleteAuthor(id) {
    return await this.delete("Authors", id);
  }
  async addAuthor(bodyRequest) {
    return await this.post("Authors", bodyRequest);
  }
}
// export default authorServices = new authorService();
