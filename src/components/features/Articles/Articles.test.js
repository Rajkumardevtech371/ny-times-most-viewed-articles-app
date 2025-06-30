import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Articles from "./Articles";
import { useArticles } from "../../../hooks";

jest.mock("../../../hooks", () => ({
  useArticles: jest.fn(),
}));

jest.mock("../../ui/LoadingSpinner", () => ({
  LoadingSpinner: () => <div data-testid="loading-spinner">Loading...</div>,
}));

jest.mock("../ArticleCard", () => ({
  ArticleCard: ({ article, onClick, testId }) => (
    <div data-testid={testId} onClick={() => onClick(article)}>
      {article.title}
    </div>
  ),
}));

jest.mock("../ErrorMessage", () => ({
  ErrorMessage: ({ message, onRetry }) => (
    <div data-testid="error-message">
      {message}
      <button onClick={onRetry}>Retry</button>
    </div>
  ),
}));

jest.mock("../PeriodSelector/PeriodSelector", () => ({
  __esModule: true,
  default: ({ period, onPeriodChange, disabled }) => (
    <div data-testid="period-selector">
      <button onClick={() => onPeriodChange(7)} disabled={disabled}>
        7 Days
      </button>
    </div>
  ),
}));

jest.mock("../ArticleDetail", () => ({
  ArticleDetail: ({ article, onClose }) => (
    <div data-testid="article-detail">
      {article.title}
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe("Articles component", () => {
  const mockRefetch = jest.fn();
  const mockSetPeriod = jest.fn();

  const mockArticle = {
    id: "1",
    title: "Test Article",
    abstract: "Summary",
    byline: "By Jane",
    url: "#",
    getFormattedDate: () => "Today",
    getImageUrl: () => null,
    getSectionDisplay: () => "News",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    useArticles.mockReturnValue({
      articles: [],
      loading: true,
      error: null,
      period: 1,
      setPeriod: mockSetPeriod,
      refetch: mockRefetch,
    });
    render(<Articles />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders error state and handles retry", () => {
    useArticles.mockReturnValue({
      articles: [],
      loading: false,
      error: "Network error",
      period: 1,
      setPeriod: mockSetPeriod,
      refetch: mockRefetch,
    });
    render(<Articles />);
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Network error",
    );
    fireEvent.click(screen.getByText("Retry"));
    expect(mockRefetch).toHaveBeenCalledWith(1);
  });

  test("renders no-articles message", () => {
    useArticles.mockReturnValue({
      articles: [],
      loading: false,
      error: null,
      period: 1,
      setPeriod: mockSetPeriod,
      refetch: mockRefetch,
    });
    render(<Articles />);
    expect(screen.getByText(/No articles found/i)).toBeInTheDocument();
  });

  test("renders list of articles and opens detail on click", () => {
    useArticles.mockReturnValue({
      articles: [mockArticle],
      loading: false,
      error: null,
      period: 1,
      setPeriod: mockSetPeriod,
      refetch: mockRefetch,
    });
    render(<Articles />);
    const card = screen.getByTestId("article-card-0");
    expect(card).toHaveTextContent("Test Article");
    fireEvent.click(card);
    expect(screen.getByTestId("article-detail")).toHaveTextContent(
      "Test Article",
    );
  });

  test("changes period via PeriodSelector", () => {
    useArticles.mockReturnValue({
      articles: [],
      loading: false,
      error: null,
      period: 1,
      setPeriod: mockSetPeriod,
      refetch: mockRefetch,
    });
    render(<Articles />);
    fireEvent.click(screen.getByText("7 Days"));
    expect(mockSetPeriod).toHaveBeenCalledWith(7);
    expect(mockRefetch).toHaveBeenCalledWith(7);
  });
});
