// ==UserScript==
// @name        e64betas
// @namespace   Violentmonkey Scripts
// @match       https://*.e926.net/*
// @match       https://*.e621.net/*
// @grant       GM.addStyle
// @version     1.0
// @author      dogkisser
// @description Blur images on e621.net
// ==/UserScript==

/************* CONFIGURATION *************/
const blurSafe = false; /* set to true to blur images rated safe. */
const imageBlur = "1.3cqmax"; /* blur for full sized images when you click on a post */
const thumbnailBlur = "5px"; /* self explanatory */
/*********** END CONFIGURATION ***********/

const baseStylesheet = `
  img, video, body > img {
    filter: blur(${imageBlur});
  }

  .avatar, #image-container {
    max-width: fit-content;
    overflow: hidden;
  }

  .avatar, .thumbnail {
    img {
      filter: blur(${thumbnailBlur});
    }
  }
`;

const dontBlurSafeStylesheet = `
  div[data-rating="s"],
  article[data-rating="s"],
  section[data-rating="s"] {
    img, video {
      filter: none;
    }
  }
`;

GM.addStyle(baseStylesheet);

if (!blurSafe) {
  GM.addStyle(dontBlurSafeStylesheet);
}
