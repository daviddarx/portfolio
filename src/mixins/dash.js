export default {
  methods: {
    replaceDashes: function(string, isSpaced, isTitle) {
      let additionalClass = (isSpaced == true) ? ' dash--spaced' : '';
          additionalClass = (isTitle == true) ? additionalClass+' dash--title' : additionalClass;
      if(string){
        return string.replaceAll('–', `<span class="dash${additionalClass}">–</span>`);
      }
    },
    getDash: function(isSpaced, isTitle) {
      let additionalClass = (isSpaced == true) ? ' dash--spaced' : '';
          additionalClass = (isTitle == true) ? additionalClass+' dash--title' : additionalClass;

      return ` <span class="dash${additionalClass}">–</span> `;
    }
  }
}
