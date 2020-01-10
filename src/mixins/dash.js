export default {
  methods: {
    replaceDashes: function(string) {
      return string.replace('–', '<span class="separe">–</span>');
    },
    replaceDashesSpaced: function(string) {
      return string.replace('–', '<span class="separe separe--spaced">–</span>');
    },
    getDash: function() {
      return ' <span class="separe">–</span> ';
    },
    getDashSpaced: function() {
      return ' <span class="separe separe--spaced">–</span> ';
    }
  }
}
