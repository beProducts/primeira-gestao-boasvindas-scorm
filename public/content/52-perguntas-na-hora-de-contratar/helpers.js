/**
 * Universal helpers used through Froont frontend
 * These should be pure functions that don't depend on other Froont peaces
 */
window.Froont.Helpers = (function () {
  'use strict';

  /**
   * Gets video ID from given URL and prefixes
   * http://stackoverflow.com/questions/5612602/improving-regex-for-parsing-youtube-vimeo-urls
   *
   * @param  {String} str        - Video URL
   * @param  {String[]} prefixes - Video ID prefixes to look for
   * @return {String}            - Vide ID or undefined
   */
  function _getVideoId(str, prefixes) {
    var cleaned = str.replace(/^(https?:)?\/\/(www\.)?/, '');
    for (var i = 0; i < prefixes.length; i++) {
      if (cleaned.indexOf(prefixes[i]) === 0) {
        return cleaned.substr(prefixes[i].length);
      }
    }
    return undefined;
  }

  return {

    /**
     * Gets YouTube ID from given URL
     *
     * @param  {String} url - Video URL
     * @return {String}     - Video ID or undefined
     */
    getYouTubeIdFromURL: function (url) {
      return _getVideoId(url, [
        'youtube.com/watch?v=',
        'youtu.be/',
        'youtube.com/embed/'
      ]);
    },

    /**
     * Gets Vimeo ID from given URL
     *
     * @param  {String} url - Video URL
     * @return {String}     - Video ID or undefined
     */
    getVimeoIdFromURL: function (url) {
      return _getVideoId(url, [
        'vimeo.com/',
        'player.vimeo.com/video/'
      ]);
    }
  };
})();
