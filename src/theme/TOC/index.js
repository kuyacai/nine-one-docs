// src/theme/TOC/index.js
import React from 'react';
import DefaultTOC from '@theme-original/TOC';

function addNumbering(toc) {
  const numberedToc = [];
  const levelCounters = {};

  toc.forEach((item) => {
    const { level } = item;

    // Reset counters for levels deeper than the current level
    for (let i = level + 1; i <= Object.keys(levelCounters).length; i++) {
      delete levelCounters[i];
    }

    if (!levelCounters[level]) {
      levelCounters[level] = 1;
    } else {
      levelCounters[level]++;
    }

    // Generate the numbering based on the level
    let number = '';
    for (let i = 2; i <= level; i++) {
      if (levelCounters[i]) {
        number += `${levelCounters[i]}.`;
      } else {
        number += '1.';
        levelCounters[i] = 1;
      }
    }

    numberedToc.push({
      ...item,
      value: `${number} ${item.value}`,
    });
  });

  return numberedToc;
}

export default function TOC(props) {
  const { toc } = props;

  // Log the toc to see its structure
  //console.log('TOC structure:', JSON.stringify(toc, null, 2));

  const numberedItems = addNumbering(toc);

  return <DefaultTOC {...props} toc={numberedItems} />;
}