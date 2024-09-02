/**
 * @typedef {import('mdast').Root} Root
 */

import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";

/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {Heading['depth']} Rank
 */

/**
 * @typedef Options
 *   Search configuration.
 * @property {Rank | null | undefined} [startDepth=2]
 *   Heading depth to start numbering (default: `2`).
 * @property {string | null | undefined} [skip]
 *   Headings to skip, wrapped in `new RegExp('^(' + value + ')$', 'i')`
 *   (default: `undefined`).
 */

/**
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function remarkCustomNumberedHeadings(options) {
  options = options || {};

  const skip = options.skip || "Contents";
  const startDepth = options.startDepth || 2;

  const skipRe = new RegExp(`^(${skip})\$`, 'i');

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    /**
     * @type {number[]}
     */
    const counters = []; // 重置 counters 数组

    visit(tree, "heading", node => {
      const counterIndex = node.depth - startDepth;

      // Skip by depth
      if (counterIndex < 0) {
        return;
      }

      // Get text node or create.
      let textNode = /** @type {import('mdast').Text}*/ (node.children[0]);
      if (!textNode || textNode.type !== "text") {
        textNode = {
          type: "text",
          value: "",
        };

        node.children.unshift(textNode);
      }

      // Get text.
      const text = toString(textNode).replace(/^([0-9\-])+\. /, "");

      // Skip by text.
      if (skipRe.test(text)) {
        return;
      }

      // Remove previous counters.
      const length = counterIndex + 1;
      while (counters.length > length) {
        counters.pop();
      }

      // Increment counter or add counter.
      if (counters.length === length) {
        counters[counterIndex]++;
      } else {
        while (counters.length < length) {
          counters.push(1);
        }
      }

      // Add numbers.
      textNode.value = `${counters.join(".")}. ${text}`;
    });
  };
}