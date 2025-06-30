import Article from "./Article";

describe("Article model", () => {
  const baseData = {
    id: "123",
    title: "Test Title",
    abstract: "Test abstract",
    byline: "By John Doe",
    published_date: "2024-12-15",
    url: "https://example.com",
    section: "Technology",
    subsection: "Gadgets",
    views: 1000,
    media: [
      {
        "media-metadata": [
          { format: "standardThumbnail", url: "https://image.com/thumb.jpg" },
          { format: "mediumThreeByTwo440", url: "https://image.com/440.jpg" },
        ],
      },
    ],
  };

  test("should create an Article instance with correct properties", () => {
    const article = new Article(baseData);

    expect(article.id).toBe("123");
    expect(article.title).toBe("Test Title");
    expect(article.abstract).toBe("Test abstract");
    expect(article.byline).toBe("By John Doe");
    expect(article.url).toBe("https://example.com");
    expect(article.section).toBe("Technology");
    expect(article.subsection).toBe("Gadgets");
    expect(article.views).toBe(1000);
  });

  test("getImageUrl() returns mediumThreeByTwo440 format if available", () => {
    const article = new Article(baseData);
    expect(article.getImageUrl()).toBe("https://image.com/440.jpg");
  });

  test("getImageUrl() falls back to first available image if preferred format is missing", () => {
    const no440Data = {
      ...baseData,
      media: [
        {
          "media-metadata": [
            { format: "standardThumbnail", url: "https://image.com/thumb.jpg" },
          ],
        },
      ],
    };
    const article = new Article(no440Data);
    expect(article.getImageUrl()).toBe("https://image.com/thumb.jpg");
  });

  test("getImageUrl() returns null if no media or metadata", () => {
    const noMediaArticle = new Article({ ...baseData, media: [] });
    expect(noMediaArticle.getImageUrl()).toBeNull();

    const noMetadataArticle = new Article({
      ...baseData,
      media: [{ "media-metadata": undefined }],
    });
    expect(noMetadataArticle.getImageUrl()).toBeNull();
  });

  test("getFormattedDate() returns a readable date", () => {
    const article = new Article(baseData);
    expect(article.getFormattedDate()).toBe("December 15, 2024");
  });

  test("getSectionDisplay() returns 'section › subsection' when both exist", () => {
    const article = new Article(baseData);
    expect(article.getSectionDisplay()).toBe("Technology › Gadgets");
  });

  test("getSectionDisplay() returns section if subsection is same or missing", () => {
    const article1 = new Article({ ...baseData, subsection: "Technology" });
    expect(article1.getSectionDisplay()).toBe("Technology");

    const article2 = new Article({ ...baseData, subsection: undefined });
    expect(article2.getSectionDisplay()).toBe("Technology");
  });

  test("getSectionDisplay() defaults to 'News' if no section", () => {
    const article = new Article({
      ...baseData,
      section: null,
      subsection: null,
    });
    expect(article.getSectionDisplay()).toBe("News");
  });
});
