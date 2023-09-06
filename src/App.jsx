import './App.css'
import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Education from './Education';
import Experience from './Experience';

function App() {
  const [general, setGeneral] = useState(
    {
      name: 'anony mouse',
      email: 'anon@example.com',
      tel: '+1 123-456-XXXX',
      location: 'Los Santos, San Andreas',
    }
  )

  const [education, setEducation] = useState([
    {
      name: 'example university',
      degree: 'example degree',
      location: 'some location',
      from: '2001',
      to: '2005',
      id: uuid(),
    },
    {
      name: 'another place',
      degree: 'another degree',
      location: 'other location',
      from: '2022',
      to: 'present',
      id: uuid(),
    }, 
  ]);

  const [experience, setExperience] = useState([
    {
      name: 'some work place',
      role: 'some role',
      location: 'somewhere on earth',
      from: '2012',
      to: '2015',
      id: uuid(),
    },
    {
      name: 'other work place',
      role: 'different role',
      location: 'another location',
      from: '2016',
      to: '2017',
      id: uuid(),
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateEducation = (id, propName, value) => {
    setEducation(education.map(element => {
      if(element.id === id)
        element[propName] = value;
      return element;
    }));
  }

  const updateExperience = (id, propName, value) => {
    setExperience(experience.map(element => {
      if(element.id === id)
        element[propName] = value;
      return element;
    }));
  }

  return (
    <form>
      <FormTab
        title='Personal'
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <div className='fields'>
        <input
          type='text'
          value={general.name}
          onChange={(e) => setGeneral({
            ...general,
            name: e.target.value,
          })}
        />
        <input
          type='text'
          value={general.email}
          onChange={(e) => setGeneral({
            ...general,
            email: e.target.value,
          })}
        />
        <input
          type='text'
          value={general.tel}
          onChange={(e) => setGeneral({
            ...general,
            tel: e.target.value,
          })}
        />
        <input
          type='text'
          value={general.location}
          onChange={(e) => setGeneral({
            ...general,
            location: e.target.value,
          })}
        />
      </div>
      </FormTab>
      <FormTab
        title='Education'
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        {education.map(target =>
          <Education 
            key={target.id}
            id={target.id}
            update={updateEducation}
            target={target}
          />
        )}
      </FormTab>
      <FormTab
        title='Experience'
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        {experience.map(target =>
          <Experience
            key={target.id}
            id={target.id}
            update={updateExperience}
            target={target}
          >
          </Experience>)
        }
      </FormTab>
    </form>
  )
}

function FormTab({title, isActive, onShow, children}) {
  //todo: maybe add a button specifically for expanding the tab
  return (
    <section 
      className='form-tab'
      onClick={onShow}
    >
      <h2>{title}</h2>
      {isActive && children}
    </section>
  );  
}

export default App