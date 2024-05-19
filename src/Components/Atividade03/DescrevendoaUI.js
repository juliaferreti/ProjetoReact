import React from 'react';
import './DescrevendoaUI.css';
import { people } from './Data.js';
import { getImageUrl } from './Utils.js';

// Atividade 1
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Gallery() {
  return (
    <section>
      <h2>1 - Amazing scientists</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// Atividade 2
function TodoListHedy() {
  return (
    <>
      <h2>2 - Hedy Lamarr's Todos</h2>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

// Atividade 3
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function TodoListGregorio() {
  return (
    <div style={person.theme}>
      <h2>3 - {person.name}'s Todos</h2>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Atividade 4
function Avatar({ size, person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function ProfileKatsuko() {
  return (
    <section>
        <h2>4 - Katsuko Saruhashi</h2>
        <Card>
        <Avatar
            size={100}
            person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
            }}
        />
        </Card>
    </section>
  );
}

// Atividade 5
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h1>5 - Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// Atividade 6
function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>6 - Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

// Atividade 7
function Cup({ guest }) {
  return <h2> Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
    <h2>7 - Tea Set</h2>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Gallery />
      <TodoListHedy />
      <TodoListGregorio />
      <ProfileKatsuko />
      <PackingList />
      <List />
      <TeaSet />
    </div>
  );
}
