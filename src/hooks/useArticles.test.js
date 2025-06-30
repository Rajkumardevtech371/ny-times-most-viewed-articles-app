import { renderHook, act } from "@testing-library/react";
import useArticles from "./useArticles";
import { NYTimesServices } from "../services";
import { waitFor } from "@testing-library/react";

jest.mock("../services", () => ({
  NYTimesServices: {
    fetchMostPopular: jest.fn(),
  },
}));

describe("useArticles hook", () => {
  const mockArticles = [{ id: "1", title: "Article 1" }];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and sets articles on mount", async () => {
    NYTimesServices.fetchMostPopular.mockResolvedValueOnce(mockArticles);

    const { result } = renderHook(() => useArticles());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.articles).toEqual(mockArticles);
    expect(result.current.error).toBe(null);
  });

  test("sets error when fetch fails", async () => {
    NYTimesServices.fetchMostPopular.mockRejectedValueOnce(
      new Error("Network error"),
    );

    const { result } = renderHook(() => useArticles());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Network error");
    expect(result.current.articles).toEqual([]);
  });

  test("refetch updates articles", async () => {
    NYTimesServices.fetchMostPopular.mockResolvedValueOnce([]);
    const { result } = renderHook(() => useArticles());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const newArticles = [{ id: "2", title: "Article 2" }];
    NYTimesServices.fetchMostPopular.mockResolvedValueOnce(newArticles);

    await act(async () => {
      await result.current.refetch(7);
    });

    expect(result.current.articles).toEqual(newArticles);
  });
});
