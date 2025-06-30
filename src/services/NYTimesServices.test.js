import { NYTimesServices } from "../services";

describe("NYTimesServices", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test("fetchMostPopular returns data when response is ok", async () => {
    const mockData = { results: [] };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await NYTimesServices.fetchMostPopular(1);
    expect(data).toEqual([]);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("viewed/1.json"),
    );
  });

  test("fetchMostPopular throws on API failure", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    await expect(NYTimesServices.fetchMostPopular(1)).rejects.toThrow(
      "HTTP error! status: undefined",
    );
  });
});
