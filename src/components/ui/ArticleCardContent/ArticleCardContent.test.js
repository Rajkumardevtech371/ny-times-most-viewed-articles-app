import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCardContent from "./ArticleCardContent";

// Mock dependencies
jest.mock("../IconText", () => ({
  __esModule: true,
  IconText: ({ icon: Icon, children }) => (
    <div data-testid="icon-text">
      {Icon && <Icon data-testid="icon" />}
      <span>{children}</span>
    </div>
  ),
}));

jest.mock("../SectionLabel/SectionLabel", () => ({
  __esModule: true,
  default: ({ text }) => <span data-testid="section-label">{text}</span>,
}));

// Mock Lucide icons to render dummy elements 
jest.mock("lucide-react", () => ({
  ChevronRight: () => <svg data-testid="chevron-icon" />,
  Calendar: () => <svg data-testid="calendar-icon" />,
  User: () => <svg data-testid="user-icon" />,
}));

describe("ArticleCardContent", () => {
  const mockArticle = {
    title: "Test Article Title",
    abstract: "This is the article summary.",
    byline: "By Jane Doe",
    getImageUrl: () => "https://example.com/image.jpg",
    getSectionDisplay: () => "Technology",
    getFormattedDate: () => "July 1, 2025",
  };

  test("renders article content with image and icons", () => {
    render(<ArticleCardContent article={mockArticle} />);

    expect(screen.getByText(/test article title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is the article summary/i)).toBeInTheDocument();
    expect(screen.getByTestId("section-label")).toHaveTextContent("Technology");
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
    expect(screen.getByText(/july 1, 2025/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
  });

  test("does not render image if getImageUrl returns null", () => {
    const articleWithoutImage = { ...mockArticle, getImageUrl: () => null };
    render(<ArticleCardContent article={articleWithoutImage} />);
    expect(screen.queryByRole("img")).toBeNull();
  });

  test("does not render byline if missing", () => {
    const articleWithoutByline = { ...mockArticle, byline: "" };
    render(<ArticleCardContent article={articleWithoutByline} />);
    expect(screen.queryByText(/jane doe/i)).toBeNull();
  });
});
