let counties = ["Nairobi", "Tharaka Nithi", "Meru", "Nairobi", "Mandera"];
 // Returns   a user friendly version of a string
 function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
 }

 function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
 }
 console.log(imperativeUrls(counties));

 // urls: Fuctional version
 function functionalUrls(elements) {
    return elements.map(element => urlify(element));
 }
 console.log(imperativeUrls(counties));

 // Singles: Imperative version
 function imperativeSingles(elements) {
   let singles = [];
   elements.forEach(function(element) {
      if (element.split(/\s+/).length ===1) {
         singles.push(element);
      }
   });
   return singles;
 }
 console.log(imperativeSingles(counties));

 // Singles:  Functional Version
 function functionalSingles(elements) {
   return elements.filter(element => element.split(/\s+/).length ===1);
 }
 console.log(functionalSingles(counties));

 // Reverse a string
 function reverse(String) {
   return Array.from(string).reverse().join("");
 }
  
 // Defines a Phrase Object. 
 function Phrase(content) {
   this.content = content;

   // Returns content processed for palindrome testing 
   this.processedContent = function processedContent () {
      return this.content.toLowerCase();
   }

   //Return true if the phrase is palindrome, false otherwise
   this.palindrome = function palindrome() {
      return this.processedContent === reverse(this.processedContent());
   }
 }

 // Defines a TranslatedPhrase object.
 function TranslatedPhrase(content, translation){
   this.content = content;
   this.translation = translation; 

   // Returns translation processed for palindrome testing.
   this.processedContent = function processedContent() {
      return this.translation.toLowerCase();
   }
 }

 TranslatedPhrase.prototype = new Phrase();