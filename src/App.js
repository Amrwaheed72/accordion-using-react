import './App.css';
import { useState } from 'react'

const faqs = [
  {
    num: '01',
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    num: '02',
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    num: '03',
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsOPen] = useState(null);
  return (
    <div className='accordion'>
      {
        data.map((element, i) => <AccordionItem curOpen={curOpen} onOpen={setIsOPen} num={element.num} title={element.title} key={i} >{element.text}</AccordionItem>)
      }
    </div>
  )
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {

  const isOpen = num === curOpen

  function handleToggle() {
    onOpen(isOpen ? null : num)
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num}</p>
      <p className={`title ${isOpen ? 'text' : ''}`}>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  )
}


export default App;
