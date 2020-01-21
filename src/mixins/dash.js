export default {
  methods: {
    replaceDashes: function(string) {
      if(string){
        return string.replace('–', '<span class="dash">–</span>');
      }
    },
    replaceDashesSpaced: function(string) {
      if(string){
        return string.replace('–', '<span class="dash dash--spaced">–</span>');
      }
    },
    getDash: function() {
      return ' <span class="dash">–</span> ';
    },
    getDashSpaced: function() {
      return ' <span class="dash dash--spaced">–</span> ';
    }
  }
}
