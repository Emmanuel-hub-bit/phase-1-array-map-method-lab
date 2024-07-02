const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  // Map over each tutorial title
  return tutorials.map(title => {
    // Split the title into words
    let words = title.split(' ');
    
    // Capitalize each word
    let capitalizedWords = words.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    
    // Join capitalized words back into a title
    let capitalizedTitle = capitalizedWords.join(' ');
    
    // Return the transformed title
    return capitalizedTitle;
  });
}