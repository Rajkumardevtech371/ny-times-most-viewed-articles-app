export default class Article {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.abstract = data.abstract;
    this.byline = data.byline;
    this.published_date = data.published_date;
    this.url = data.url;
    this.media = data.media || [];
    this.section = data.section;
    this.subsection = data.subsection;
    this.views = data.views;
  }

  getImageUrl() {
    if (this.media.length > 0 && this.media[0]["media-metadata"]) {
      const metadata = this.media[0]["media-metadata"];
      return (
        metadata.find((item) => item.format === "mediumThreeByTwo440")?.url ||
        metadata[0]?.url
      );
    }
    return null;
  }

  getFormattedDate() {
    return new Date(this.published_date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  getSectionDisplay() {
    if (this.subsection && this.subsection !== this.section) {
      return `${this.section} › ${this.subsection}`;
    }
    return this.section || "News";
  }
}
