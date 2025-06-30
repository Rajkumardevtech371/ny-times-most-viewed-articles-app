import { Article } from "../models";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default class NYTimesService {
  static async fetchMostPopular(period = 1) {
    try {
      if (!API_BASE_URL || !API_KEY) {
        throw new Error(
          "Missing NYTimes API configuration. Please ensure API_KEY and BASE_URL are set in your .env file.",
        );
      }

      const response = await fetch(
        `${API_BASE_URL}/${period}.json?api-key=${API_KEY}`,
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(
            "Invalid API key. Please check your NY Times API configuration.",
          );
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.results.map((article) => new Article(article));
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  }
}
