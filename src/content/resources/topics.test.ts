import { describe, expect, it } from "vitest";
import {
  getAllTopicSlugs,
  getTopicBySlug,
  resourceTopics,
} from "./topics";

describe("resourceTopics", () => {
  it("contains exactly 6 topics", () => {
    expect(resourceTopics).toHaveLength(6);
  });

  it("every topic has required fields populated", () => {
    for (const topic of resourceTopics) {
      expect(topic.slug).toBeTruthy();
      expect(topic.title).toBeTruthy();
      expect(topic.summary.length).toBeGreaterThan(20);
      expect(topic.keyFacts.length).toBeGreaterThan(0);
      expect(topic.misconceptions.length).toBeGreaterThan(0);
      expect(topic.practicalTips.length).toBeGreaterThan(0);
      expect(topic.references.length).toBeGreaterThan(0);
    }
  });
});

describe("getTopicBySlug", () => {
  it("returns a topic for a valid slug", () => {
    const topic = getTopicBySlug("mobility-support");
    expect(topic).toBeDefined();
    expect(topic?.title).toBe("Mobility support");
  });

  it("returns undefined for an invalid slug", () => {
    expect(getTopicBySlug("nonexistent-slug")).toBeUndefined();
  });

  it("returns undefined for an empty string", () => {
    expect(getTopicBySlug("")).toBeUndefined();
  });
});

describe("getAllTopicSlugs", () => {
  it("returns 6 slugs", () => {
    expect(getAllTopicSlugs()).toHaveLength(6);
  });

  it("returns strings matching topic slugs", () => {
    const slugs = getAllTopicSlugs();
    for (const slug of slugs) {
      expect(getTopicBySlug(slug)).toBeDefined();
    }
  });
});
