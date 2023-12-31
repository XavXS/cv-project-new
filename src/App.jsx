import './App.css'
import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Education from './Education';
import Experience from './Experience';

function App() {
  const [general, setGeneral] = useState(
    {
      name: 'Anony Mouse',
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
    },
    {
      name: 'nother work place',
      role: 'nother role',
      location: 'a location',
      from: '2077',
      to: '2088',
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

  const addEducation = () => {
    setEducation(education.concat({
      name: 'new university',
      degree: 'new degree',
      location: 'new location',
      from: 'start date',
      to: 'end date',
      id: uuid(),
    }));
  }

  const removeEducation = (id) => {
    setEducation(education.filter(element => element.id !== id));
  }

  const updateExperience = (id, propName, value) => {
    setExperience(experience.map(element => {
      if(element.id === id)
        element[propName] = value;
      return element;
    }));
  }

  const addExperience = () => {
    setExperience(experience.concat({
      name: 'new experience',
      role: 'new role',
      location: 'new location',
      from: 'start date',
      to: 'end date',
      id: uuid(),
    }));
  }

  const removeExperience = (id) => {
    setExperience(experience.filter(element => element.id !== id));
  }

  return (
    <>
      <form>
        <FormTab
          title='Personal'
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <div className='fields'>
            <label>
              <span>Name</span>
              <input
              type='text'
              value={general.name}
              onChange={(e) => setGeneral({
                ...general,
                name: e.target.value,
              })}
            />
            </label>
            <label>
              <span>Email</span>
              <input
              type='text'
              value={general.email}
              onChange={(e) => setGeneral({
                ...general,
                email: e.target.value,
              })}
            />
            </label>
            <label>
              <span>Number</span>
              <input
              type='text'
              value={general.tel}
              onChange={(e) => setGeneral({
                ...general,
                tel: e.target.value,
              })}
            />
            </label>
            <label>
              <span>Location</span>
              <input
              type='text'
              value={general.location}
              onChange={(e) => setGeneral({
                ...general,
                location: e.target.value,
              })}
            />
            </label>
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
              remove={removeEducation}
              target={target}
            />
          )}
          <button 
            className='add-button'
            type='button'
            onClick={addEducation}
          >Add New</button>
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
              remove={removeExperience}
              target={target}
            >
            </Experience>)
          }
          <button 
            className='add-button'
            type='button'
            onClick={addExperience}
          >Add New</button>
        </FormTab>
      </form>
      <div className='result-container'>
        <div className='result'>
          <div className='result-general'>
            <h1>{general.name}</h1>
            <p>{general.email}</p>
            <p>{general.tel}</p>
            <p>{general.location}</p>
          </div>
          <h1>Education</h1>
          {education.map(target =>
            <div className='result-education' key={uuid()}>
              <h2>{target.name}</h2>
              <div className='accent-line'></div>
              <h3>{target.degree}</h3>
              <p>{target.location}</p>
              <p>{target.from} ~ {target.to}</p>
            </div>
          )}
          <h1>Experience</h1>
          {experience.map(target =>
            <div className='result-experience' key={uuid()}>
              <h2>{target.name}</h2>
              <div className='accent-line'></div>
              <h3>{target.role}</h3>
              <p>{target.location}</p>
              <p>{target.from} ~ {target.to}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function FormTab({title, isActive, onShow, children}) {
  //todo: maybe add a button specifically for expanding the tab
  return (
    <section 
      className='form-tab'
      onClick={onShow}
    >
      <h2>{title}{isActive ? '▲' : '▼'}</h2>
      {isActive && children}
    </section>
  );  
}

export default App