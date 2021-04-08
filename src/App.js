import './App.css';
import React, { useState } from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

const App = () => {
  const [currentInput, setCurrentInput] = useState(markdownText);

  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  };

  return (
    <div className="row container-fluid">
      <div className="col-md-6">
        <Editor handleChange={handleChange} />
      </div>
      <div className="col-md-6">
        <Preview currentInput={currentInput} />
      </div>
    </div>
  );
};

const Editor = (props) => {
  return (
    <div id="text">
      <textarea id="editor" onChange={props.handleChange}>
        {markdownText}
      </textarea>
    </div>
  );
};

const Preview = (props) => {
  return (
    <div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.currentInput, { renderer: renderer }) }}
      />
    </div>
  );
};

const markdownText = `# Hello World!  

## I am very happy to share with you my React Markdown Previewer!

![Kitty Myuchan](https://image.itmedia.co.jp/nl/articles/2003/28/mika2003_kiss9.jpg)

Let's together teach our kitty Myuchan some markdown features. In particular :  

1. Lists. Myuchan needs to have a proper dinner today, lets create some ol/ul lists for him. 
2. Code (inline, block)! Let' teach Myuchan some basic function in code.
3. Blockquote.. You know that Myuchan has some very famous quotes invented by him! We will know later what are they.
4. Images! Let's see how cute Myuchan is.  
5. Links! Myuchan has an IG profile, folow him and his nice family.  

So lets start.  

First Myuchan needs to buy products for his dinner today and for this he needs a **list** with the items to buy. Let's create an **unordered list** for him.  

_Products for dinner:_   

* Milk
* Fish
* Chicken  

You see! Very easy! Unordered lists can use either asterisks *, plus +, or hyphens - as list markers.  

Then he needs to understand in which sequence he wants to eat these items:  

_Order of dishes during dinner:_  

1. Chicken
2. Fish
3. Milk  

Ordered lists use numbers followed by period . or right parenthesis ).  

Fantastic! So now after having his great dinner Myuchan could study some coding. Let's show him how to create a \`for Loop\`. What we want is to print in concole.log \`numberOfSheeps\` from 1 to 100 so that Myuchan could calculate them to fall asleep quickly:  

	for (let number = 0; number <= 100; number++){
	console.log("Sheep" + number);
	};  
	
All you need to do for creating **inline code** is to wrap it with backticks \`.
To create a **code block**, either indent each line by 4 spaces, or place 3 backticks \`\`\` on a line above and below the code block.  

Great, Mychan fells asleep after the third one (obviously especially taking into consideration how much he ate today at dinner =P).  

So whats next?  While our friend is sleeping let's have a look at some of his quotes:
>To eat or not to eat! This is NOT a question.
>Mew mew mew mew.
>You could skip work but never a nap on the sun!  

Yes, yes.. I know he is super talented. So how did we do it? Super easy - to create a **blockquote**, start a line with greater than > followed by an optional space.  

And now if you like Mychan you need for sure to see more photos of him! You could have a look at his [instagram profile](https://www.instagram.com/myuuuuchan_1116/) which is cared with love by his family. Enjoy and have fun!

Hope you like it guys and lets keep in touch  [in instagram](https://www.instagram.com/sunlessky/) or [twitter](https://twitter.com/pavoninushka) as i need your great advices in my learning path!`

export default App;
