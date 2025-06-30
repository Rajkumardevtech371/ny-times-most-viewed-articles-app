import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleDetail from "./ArticleDetail";

jest.mock("../../ui/ArticleMetaInfo", () => ({
  __esModule: true,
  ArticleMetaInfo: ({ byline, date }) => (
    <div data-testid="mock-meta">
      {byline} - {date}
    </div>
  ),
}));

jest.mock("../../ui/Button", () => ({
  __esModule: true,
  Button: ({ children, "data-testid": testId, ...props }) => (
    <a data-testid={testId} {...props}>
      {children}
    </a>
  ),
}));

describe("ArticleDetail", () => {
  const mockArticle = {
    title: "Test Article Title",
    abstract: "This is a test article.",
    byline: "By Jane Doe",
    url: "https://example.com/full-article",
    getFormattedDate: () => "July 1, 2025",
    getSectionDisplay: () => "Technology",
    getImageUrl: () => "https://example.com/image.jpg",
  };

  test("does not render when article is null", () => {
    render(<ArticleDetail article={null} onClose={() => {}} />);
    expect(
      screen.queryByTestId("article-detail-modal"),
    ).not.toBeInTheDocument();
  });

  test("renders all article content correctly", () => {
    render(<ArticleDetail article={mockArticle} onClose={() => {}} />);
    expect(screen.getByTestId("article-detail-modal")).toBeInTheDocument();
    expect(screen.getByText("Test Article Title")).toBeInTheDocument();
    expect(screen.getByText("This is a test article.")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByTestId("mock-meta")).toHaveTextContent(
      "By Jane Doe - July 1, 2025",
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/image.jpg",
    );
    expect(screen.getByTestId("read-full-article-btn")).toHaveAttribute(
      "href",
      mockArticle.url,
    );
  });

  test("calls onClose when backdrop is clicked", () => {
    const onClose = jest.fn();
    render(<ArticleDetail article={mockArticle} onClose={onClose} />);
    fireEvent.click(screen.getByTestId("article-detail-modal"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<ArticleDetail article={mockArticle} onClose={onClose} />);
    fireEvent.click(screen.getByTestId("close-modal-btn"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
