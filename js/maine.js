
const quotes = [{
    quote: `“Be yourself; everyone else is already taken.”`,
    writer: `― Oscar Wilde`
}, {
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” `,
    writer: `― J.K. Rowling`
}, {
    quote: `“Insanity is doing the same thing, over and over again, but expecting different results.” `,
    writer: `― Narcotics Anonymous`
   
}, {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.” `,
    writer: `― Andre Gide`
}, {
    quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” `,
    writer: `― Ralph Waldo Emerson`
}, {
    quote: `“I am so clever that sometimes I don't understand a single word of what I am saying.” `,
    writer: `― Oscar Wilde`
}, {
    quote: `“We accept the love we think we deserve.”`,
    writer: `― Stephen Chbosky`
}, {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” `,
    writer: ` Dr. Seuss`
}, {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” `,
    writer: `― Maya Angelou`
}, {
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.” `,
    writer: `― Oscar Wilde`
}, {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.” `,
    writer: `― Mahatma Gandhi`
}, {
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    writer: `― Oscar Wilde`
}, {
    quote: `“If you tell the truth, you don't have to remember anything.” `,
    writer: `― Mark Twain`
}, {
    quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa`
},]
let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    
})
